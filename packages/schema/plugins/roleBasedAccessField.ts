import { UserRole } from "@repo/prisma";
import { plugin } from "nexus";
import { printedGenTyping, printedGenTypingImport } from "nexus/dist/utils";
import { Context } from "@repo/context";
import UserRoles from "supertokens-node/recipe/userroles";

export type AuthorizedRole = {
  role: Array<UserRole>;
  apiKeyBypass?: boolean;
};

const RoleBasedAccessFieldPluginImport = printedGenTypingImport({
  module: "../plugins/roleBasedAccessField",
  bindings: ["AuthorizedRole"],
});

const fieldDefTypes = printedGenTyping({
  optional: true,
  name: "roleBasedAccessField",
  description: "role settings for the field",
  type: "AuthorizedRole | undefined",
  imports: [RoleBasedAccessFieldPluginImport],
});

const authorize = async (
  { session, apiKey, request }: Context,
  role: Array<UserRole>,
  apiKeyBypass?: boolean
): Promise<boolean> => {
  if (apiKeyBypass) {
    const res = apiKey.authorizer(request);
    if (res) return true;
  }
  if (!session) throw new Error("Session not found");
  const userRole = await session.getClaimValue(UserRoles.UserRoleClaim);
  if (!userRole) throw new Error("User role not found");
  const auth = role.filter((item) => userRole.includes(item));
  return auth.length > 0;
};

export const RoleBasedAccessFieldPlugin = plugin({
  name: "RoleBasedAccessFieldPlugin",
  fieldDefTypes,
  onCreateFieldResolver(config) {
    // if the field is not marked as admin only, don't worry about wrapping the resolver
    const role =
      config.fieldConfig.extensions?.nexus?.config.roleBasedAccessField;
    if (role === undefined || role === null) return;

    return async (root, args, ctx, info, next) => {
      const toComplete = await authorize(ctx, role.role);
      return plugin.completeValue(
        toComplete,
        (authResult) => {
          if (authResult === true) {
            return next(root, args, ctx, info);
          }
          throw new Error("Access Denied");
        },
        () => {
          return;
        }
      );
    };
  },
});
