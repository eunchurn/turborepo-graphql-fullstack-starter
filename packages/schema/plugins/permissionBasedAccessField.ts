import { plugin } from "nexus";
import { printedGenTyping, printedGenTypingImport } from "nexus/dist/utils";
import { Context } from "@repo/context";
import UserRoles from "supertokens-node/recipe/userroles";
import { UserPermission } from "@repo/prisma";

export type AuthorizedPermission = {
  permission: Array<UserPermission>;
  type: "AND" | "OR";
  apiKeyBypass?: boolean;
};

const PermissionBasedAccessFieldPluginImport = printedGenTypingImport({
  module: "../plugins/permissionBasedAccessField",
  bindings: ["AuthorizedPermission"],
});

const fieldDefTypes = printedGenTyping({
  optional: true,
  name: "permissionBasedAccessField",
  description: "permission settings for the field",
  type: "AuthorizedPermission | undefined",
  imports: [PermissionBasedAccessFieldPluginImport],
});

const authorize = async (
  { session, apiKey, request }: Context,
  permission: Array<UserPermission>,
  type: "AND" | "OR",
  apiKeyBypass?: boolean
): Promise<boolean> => {
  if (apiKeyBypass) {
    const res = apiKey.authorizer(request);
    if (res) return true;
  }
  if (!session) throw new Error("Session not found");
  const userPermission = await session.getClaimValue(UserRoles.PermissionClaim);
  if (!userPermission) throw new Error("User permission not found");
  const auth = permission.filter((item) => userPermission.includes(item));
  if (type === "AND") return auth.length === permission.length;
  if (type === "OR") return auth.length > 0;
  return false;
};

export const PermissionBasedAccessFieldPlugin = plugin({
  name: "PermissionBasedAccessFieldPlugin",
  fieldDefTypes,
  onCreateFieldResolver(config) {
    // if the field is not marked as admin only, don't worry about wrapping the resolver
    const permission =
      config.fieldConfig.extensions?.nexus?.config.permissionBasedAccessField;
    if (permission === undefined || permission === null) return;

    return async (root, args, ctx, info, next) => {
      const toComplete = await authorize(
        ctx,
        permission.permission,
        permission.type,
        permission.apiKeyBypass
      );
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
