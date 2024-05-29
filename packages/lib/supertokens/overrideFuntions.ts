import EmailPassword from "supertokens-node/recipe/emailpassword";
import { isEmpty } from "lodash";
import { AccessType, UserRole, prisma } from "@repo/prisma";
import UserRoles from "supertokens-node/recipe/userroles";
import { listUsersByAccountInfo } from "supertokens-node";
import {
  // XXX: to be used later
  // permissionsToStrArr,
  // resolveUserDefaultPermission2,
  updateUserPermissions,
} from "../utils";

async function getUserByEmail(email: string) {
  const [user] = await listUsersByAccountInfo("public", { email });
  if (!user) return null;
  return user;
}

export function overrideFunctions(
  originalImplementation: EmailPassword.RecipeInterface,
): EmailPassword.RecipeInterface {
  return {
    ...originalImplementation,
    async signUp(input) {
      if (
        input.email === "admin@builderhub.io" ||
        input.email === "sd_admin@builderhub.io" ||
        input.email === "construct_admin@builderhub.io"
      ) {
        return await originalImplementation.signUp(input);
      }
      const signupUser = await originalImplementation.signUp(input);
      const { status } = signupUser;
      if (status === "OK") {
        const {
          user: { emails, id },
        } = signupUser;
        const [email] = emails;
        await prisma.user.create({
          data: {
            email,
            stUserId: id,
            AccessLog: { create: { email, accessType: AccessType.SIGNUP } },
          },
        });
        await UserRoles.addRoleToUser("public", id, UserRole.GUEST);
      }
      return signupUser;
    },
    async signIn(input) {
      const signinUser = await getUserByEmail(input.email);
      if (!signinUser) throw new Error("User not found");
      const { id } = signinUser;
      const user = await prisma.user.findUnique({
        where: {
          stUserId: id,
        },
      });
      if (!user) throw new Error("User not found");
      const result = await originalImplementation.signIn(input);
      if (result.status === "OK") {
        const userRoles = await prisma.policy.findMany({
          where: { user: { stUserId: id } },
        });
        if (!isEmpty(userRoles)) {
          for await (const role of userRoles) {
            await updateUserPermissions({
              stUserId: id,
              permission: [role.action],
              prisma,
            });
          }
        }
      }
      return await originalImplementation.signIn(input);
    },
  };
}
