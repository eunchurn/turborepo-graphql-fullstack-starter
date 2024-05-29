import { queryField } from "nexus";
import { getMe } from "./getMe";

export const me = queryField("meDemo", {
  type: "User",
  description: "User endpoint",
  async resolve(_root, _args, ctx) {
    const user = await getMe(ctx);
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
