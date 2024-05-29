import { AccessType, prisma } from "@repo/prisma";
import { isEmpty } from "lodash";
import EmailPassword from "supertokens-node/recipe/emailpassword";
import UserRoles from "supertokens-node/recipe/userroles";
import { listUsersByAccountInfo } from "supertokens-node";

async function getUserByEmail(email: string) {
  const [user] = await listUsersByAccountInfo("public", { email });
  if (!user) return null;
  return user;
}

export async function addRole(userId: string, role: string) {
  const response = await UserRoles.addRoleToUser("public", userId, role);
  if (response.status === "UNKNOWN_ROLE_ERROR") {
    return;
  }
  if (response.didUserAlreadyHaveRole === true) {
    return;
  }
}
export function overrideApis(
  originalImplementation: EmailPassword.APIInterface,
): EmailPassword.APIInterface {
  return {
    ...originalImplementation,
    emailExistsGET: async (input) => {
      const { email } = input;
      const signedUser = await prisma.user.findFirst({ where: { email } });
      const tokensUser = await getUserByEmail(email);
      if (signedUser && tokensUser) {
        input.options.res.setStatusCode(200);
        input.options.res.sendJSONResponse({
          status: "OK",
          exists: true,
        });
        return {
          status: "OK",
          exists: true,
        };
      } else {
        input.options.res.setStatusCode(200);
        input.options.res.sendJSONResponse({
          status: "OK",
          exists: false,
        });
        return {
          status: "OK",
          exists: false,
        };
      }
    },
    signUpPOST: async (input) => {
      // const { formFields } = input;
      // const formFieldsArr = formFields.map((item) => {
      //   const { id, value } = item;
      //   return { [id]: value };
      // });
      // const terms = Object.assign({}, ...formFieldsArr);
      if (originalImplementation.signUpPOST === undefined) {
        throw new Error("emailPasswordSignUpPOST not implemented");
      }
      const response = await originalImplementation.signUpPOST(input);
      if (response.status === "OK") {
        const { user } = response;
        const { emails, id } = user;
        const [email] = emails;
        const createdUser = await prisma.user.findUnique({
          where: { email },
        });
        if (!createdUser) throw new Error("user not found");
        await prisma.user.update({
          where: { email },
          data: {
            stUserId: id,
          },
        });
      }
      return response;
    },
    signInPOST: async (input) => {
      const { formFields } = input;
      const formFieldsArr = formFields.map((item) => {
        const { id, value } = item;
        return { [id]: value };
      });
      const data = Object.assign({}, ...formFieldsArr);
      if (!data.email || isEmpty(data.email)) throw new Error("email is empty");
      if (originalImplementation.signInPOST === undefined) {
        throw new Error("emailPasswordSignInPOST not implemented");
      }
      const response = await originalImplementation.signInPOST(input);
      if (response.status === "OK") {
        const {
          user: { emails },
        } = response;
        const [email] = emails;
        await prisma.accessLog.create({
          data: {
            user: { connect: { stUserId: response.user.id } },
            email,
            accessType: AccessType.SIGNIN,
          },
        });
      } else {
        await prisma.accessLog.create({
          data: {
            email: data.email,
            accessType: AccessType.REJECTED,
          },
        });
      }
      return response;
    },
  };
}
