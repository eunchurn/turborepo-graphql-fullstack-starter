import { objectType, list } from "nexus";

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: "User",
  description: `User information`,
  definition(t) {
    t.int("id", { description: `User ID` });
    t.string("uuid", { description: `User UUID` });
    t.field("createdAt", { description: "created date", type: "DateTime" });
    t.field("updatedAt", { description: "updated date", type: "DateTime" });
    t.string("email", { description: `User email` });
    t.nullable.string("name", { description: `User name` });
    t.nullable.string("phoneNumber", { description: `User phone number` });
    t.nullable.string("description", { description: `User description` });
    t.nullable.string("imgUrl", { description: `User picture` });
    t.field("role", { description: "User role", type: "UserRole" });
    t.string("stUserId", { description: `Supertokens User ID` });
    t.list.field("permission", { type: "UserPermission" });
    t.list.field("AccessLog", {
      type: "AccessLog",
      args: {
        where: "AccessLogWhereInput",
        orderBy: list("AccessLogOrderByWithRelationInput"),
        cursor: "AccessLogWhereUniqueInput",
        take: "Int",
        skip: "Int",
        distinct: list("AccessLogScalarFieldEnum"),
      },
      resolve(root: any) {
        return root.AccessLog;
      },
    });
    t.list.field("policy", {
      type: "Policy",
      args: {
        where: "PolicyWhereInput",
        orderBy: list("PolicyOrderByWithRelationInput"),
        cursor: "PolicyWhereUniqueInput",
        take: "Int",
        skip: "Int",
        distinct: list("PolicyScalarFieldEnum"),
      },
      resolve(root: any) {
        return root.policy;
      },
    });
    t.field("_count", {
      type: "UserCountOutputType",
      resolve(root: any) {
        return root._count;
      },
    });
  },
});
