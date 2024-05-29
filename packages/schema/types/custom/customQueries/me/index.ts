import { queryField } from "nexus";
import { getMe } from "./getMe";
import UserRole from "supertokens-node/recipe/userroles";

export const me = queryField("me", {
  type: "User",
  description: "User endpoint",
  async resolve(_root, _args, ctx) {
    const user = await getMe(ctx);
    return user;
  },
});

export const supertokenTest = queryField("getMe", {
  type: "User",
  //@ts-ignore
  resolve(_root, _args, { prisma, select, userId }) {
    if (!userId) throw new Error("No user in session");
    const user = prisma.user.findUnique({
      where: { stUserId: userId },
      ...select,
    });
    return user;
  },
});

export const checker = queryField("apiTest", {
  type: "Boolean",
  resolve(_root, _args, { apiKey, request, prisma }) {
    const result = apiKey.authorizer(request);
    return result;
  },
});

export const checkAdmin = queryField("checkAdmin", {
  type: "Boolean",
  // @ts-ignore
  async resolve(_root, _args, { session, userId }) {
    if (!session || !userId) return false;
    const userRole = await UserRole.getRolesForUser("public", userId);
    return userRole.roles.includes("SUPER_USER");
  },
});
