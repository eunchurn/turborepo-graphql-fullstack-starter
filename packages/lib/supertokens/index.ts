import supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session";
import EmailPassword from "supertokens-node/recipe/emailpassword";
import Dashboard from "supertokens-node/recipe/dashboard";
import { overrideFunctions } from "./overrideFuntions";
import { overrideApis } from "./overrideApis";
import { emailDelivery } from "./emailDelivery";
import UserRoles from "supertokens-node/recipe/userroles";
import { UserRole } from "@repo/prisma";
import {
  resolveUserDefaultPermission,
  // XXX: to be used later
  // permissionsToStrArr,
  // resolveUserDefaultPermission2,
} from "../utils/userPermission";

const websiteDomain = process.env.CLIENT_DOMAIN;
const apiDomain = process.env.API_DOMAIN;
const connectionURI = process.env.AUTH_DOMAIN;
const apiKey = process.env.API_SECRET;
export const supertokensInitializerWithVars = (
  websiteDomain: string,
  apiDomain: string,
  connectionURI: string,
  apiKey: string
) => {
  supertokens.init({
    framework: "express",
    supertokens: {
      connectionURI,
      apiKey,
    },
    appInfo: {
      appName: "idc-auth",
      apiDomain,
      websiteDomain,
      apiBasePath: "/auth",
      websiteBasePath: "/auth",
    },
    recipeList: [
      UserRoles.init(),
      EmailPassword.init({
        signUpFeature: {
          formFields: [
            {
              id: "email",
            },
            {
              id: "password",
            },
            {
              id: "role",
            },
          ],
        },
        override: {
          functions: overrideFunctions,
          apis: overrideApis,
        },
        emailDelivery,
      }),
      Session.init({
        exposeAccessTokenToFrontendInCookieBasedAuth: true,
        getTokenTransferMethod: () => "cookie",
        cookieDomain: process.env.DOMAIN,
      }),
      Dashboard.init({
        apiKey: "chang2022!",
      }),
    ],
  });
  createRole();
};
export const supertokensInitializer = () =>
  supertokensInitializerWithVars(
    websiteDomain,
    apiDomain,
    connectionURI,
    apiKey
  );

function createRole() {
  Object.values(UserRole).forEach((role) => {
    UserRoles.createNewRoleOrAddPermissions(
      role,
      resolveUserDefaultPermission(role)
      // XXX: to be used later
      // permissionsToStrArr(resolveUserDefaultPermission2(role)),
    ).catch((e) => console.log(e));
  });
  UserRoles.createNewRoleOrAddPermissions("testRole", ["testPermission"]);
}

export function getAllUsers() {
  return supertokens.getUsersNewestFirst({ tenantId: "public" });
}
