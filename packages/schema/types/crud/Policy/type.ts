import { objectType } from "nexus";

export const Policy = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: "Policy",
  description: `Policy`,
  definition(t) {
    t.int("id");
    t.string("uuid");
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.int("resourceId");
    t.field("action", { type: "Action" });
    t.nullable.int("userId");
    t.field("resource", {
      type: "Resource",
      resolve(root: any) {
        return root.resource;
      },
    });
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
