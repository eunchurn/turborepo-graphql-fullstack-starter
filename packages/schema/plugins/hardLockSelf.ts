import { plugin } from "nexus";
import { printedGenTyping, printedGenTypingImport } from "nexus/dist/utils";
import { Context } from "@repo/context";
import UserRoles from "supertokens-node/recipe/userroles";
import { contextUtils } from "@repo/lib";
import { UserRole } from "@repo/prisma";

export type LockupState = {
  bypass?: Array<UserRole>;
  apiKey?: boolean;
  self: boolean;
};

const checkArgs = (args: any, userId: string): boolean => {
  // args가 없는 경우 패스
  if (args === undefined || args === null) return true;
  const memberArg = contextUtils.getObjects(args, "member", "");
  // member가 없는 경우 패스
  if (memberArg.length === 0) return true;
  const check =
    memberArg
      .map((arg: any) => {
        const userIdArg = contextUtils.getObjects(arg, "userId", "");
        if (userIdArg.length > 0) {
          const isInnerCheckOk =
            userIdArg
              .map((arg2: any) => {
                if (arg2.equal !== userId) return false;
                else return true;
              })
              .filter((item) => !item).length > 0;
          if (isInnerCheckOk) return true;
          else return false;
        } else return true;
      })
      .filter((item) => !item).length > 0;
  // 체크한 결과 하나라도 false가 있으면 false
  if (!check) return false;
  else return true;
};

const hardLockSelfPluginImport = printedGenTypingImport({
  module: "../plugins/hardLockSelf",
  bindings: ["LockupState"],
});

const fieldDefTypes = printedGenTyping({
  optional: true,
  name: "hardLockSelf",
  description: "role settings for the field",
  type: "LockupState | undefined",
  imports: [hardLockSelfPluginImport],
});

const authorize = async (
  { session, apiKey, request }: Context,
  option: LockupState,
  args: any
): Promise<boolean> => {
  const { bypass, self } = option;
  // APIKEY bypass 설정 시 apikey로 인증
  if (apiKey) {
    const isAuthorized = apiKey.authorizer(request);
    return isAuthorized;
  }

  // Session 체크
  if (!session) return false;
  const userId = session.getUserId();
  if (!userId) return false;

  // Self Lock이 설정된 경우
  if (self) {
    // Bypass 설정 시 설정된 Role을 가지고 있으면 인증하지 않고 통과
    if (bypass) {
      const userRole = await session.getClaimValue(UserRoles.UserRoleClaim);
      if (!userRole) return false;
      const isAuthorized = bypass.includes(userRole as any);
      return isAuthorized;
    }
    // Bypass 설정이 없는 경우
    // argument에 userId가 있는 경우
    if (!checkArgs(args, userId)) return false;
    // argument에 userId가 없는 경우
    return true;
  }

  // Self Lock이 설정되지 않은 경우
  return true;
};

export const HardLockSelfPlugin = plugin({
  name: "HardLockSelfPlugin",
  fieldDefTypes,
  onCreateFieldResolver(config) {
    // if the field is not marked as admin only, don't worry about wrapping the resolver
    const pluginArgs: LockupState =
      config.fieldConfig.extensions?.nexus?.config.hardLockSelfPlugin;
    if (pluginArgs === undefined || pluginArgs === null) return;

    return async (root, args, ctx, info, next) => {
      const toComplete = await authorize(ctx, { ...pluginArgs }, args);
      return plugin.completeValue(
        toComplete,
        (authResult) => {
          if (authResult === true) {
            return next(root, args, ctx, info);
          }
          throw new Error("Access denied due to permission policy violation");
        },
        () => {
          return;
        }
      );
    };
  },
});
