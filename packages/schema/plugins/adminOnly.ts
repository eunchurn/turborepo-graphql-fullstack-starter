import { plugin } from "nexus";
import { printedGenTyping, printedGenTypingImport } from "nexus/dist/utils";
import { Context } from "@repo/context";
import UserRoles from "supertokens-node/recipe/userroles";

export type Option = {
  apiKeyBypass: boolean;
};

const AdminOnlyPluginImport = printedGenTypingImport({
  module: "../plugins/adminOnly",
  bindings: ["Option"],
});

const fieldDefTypes = printedGenTyping({
  optional: true,
  name: "adminOnly",
  description: "admin only settings for the field",
  type: "Option | undefined",
  imports: [AdminOnlyPluginImport],
});

const authorize = async (
  { session, apiKey, request }: Context,
  apiKeyBypass: boolean,
): Promise<boolean> => {
  if (apiKeyBypass) {
    const res = apiKey.authorizer(request);
    if (res) return true;
  }
  if (!session) throw new Error("Session not found");
  const userId = session.getUserId();
  const userRole = await UserRoles.getRolesForUser("public", userId);
  if (userRole.status !== "OK" || userRole.roles.length === 0)
    throw new Error("User role not found");
  const auth = userRole.roles.filter((item) => item === "SUPER_USER");
  return auth.length > 0;
};

export const AdminOnlyPlugin = plugin({
  name: "AdminOnlyPlugin",
  fieldDefTypes,
  onCreateFieldResolver(config) {
    // if the field is not marked as admin only, don't worry about wrapping the resolver
    const role = config.fieldConfig.extensions?.nexus?.config.adminOnly;
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
        },
      );
    };
  },
});
