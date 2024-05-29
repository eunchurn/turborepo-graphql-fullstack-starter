import { objectType } from "nexus";

export const AccessLog = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: "AccessLog",
  description: `Access Log`,
  definition(t) {
    t.int("id");
    t.field("createdAt", { type: "DateTime" });
    t.nullable.string("userId");
    t.nullable.string("email");
    t.string("message");
    t.field("accessType", { type: "AccessType" });
    t.nullable.field("user", {
      type: "User",
      args: {
        where: "UserWhereInput",
      },
      resolve(root: any) {
        return root.user;
      },
    });
  },
});
