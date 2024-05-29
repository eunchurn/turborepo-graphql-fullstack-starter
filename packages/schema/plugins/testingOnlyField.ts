import { plugin } from "nexus";
import { printedGenTyping, printedGenTypingImport } from "nexus/dist/utils";
import { Context } from "@repo/context";
import UserRoles from "supertokens-node/recipe/userroles";

export type TestingAccess = {
  permission: "ADMIN" | "TESTER_ONLY";
  enabled: boolean;
};

const testingAccessPluginImport = printedGenTypingImport({
  module: "../plugins/testingOnlyField",
  bindings: ["TestingAccess"],
});

const fieldDefTypes = printedGenTyping({
  optional: true,
  name: "testingOnlyField",
  description: "testingOnlyField settings for the field",
  type: "TestingAccess | undefined",
  imports: [testingAccessPluginImport],
});

const authorize = async (
  { session }: Context,
  permission: "ADMIN" | "TESTER_ONLY",
  enabled: boolean
): Promise<boolean> => {
  if (!enabled) return true;
  if (!session) throw new Error("Session not found");
  const userPermission = await session.getClaimValue(UserRoles.PermissionClaim);
  if (!userPermission) throw new Error("User permission not found");
  const isApproved = userPermission.includes(permission);
  return isApproved === true;
};

export const TestingOnlyFieldPlugin = plugin({
  name: "testingOnlyField",
  fieldDefTypes,
  onCreateFieldResolver(config) {
    // if the field is not marked as admin only, don't worry about wrapping the resolver
    const permission =
      config.fieldConfig.extensions?.nexus?.config.testingOnlyField;
    if (permission === undefined || permission === null) return;
    config.fieldConfig.deprecationReason =
      "This field is deprecated, use only for testing";

    return async (root, args, ctx, info, next) => {
      const toComplete = await authorize(
        ctx,
        permission.permission,
        permission.enabled
      );
      return plugin.completeValue(
        toComplete,
        (authResult) => {
          if (authResult === true) {
            return next(root, args, ctx, info);
          }
          throw new Error("Not authorized");
        },
        () => {}
      );
    };
  },
});
