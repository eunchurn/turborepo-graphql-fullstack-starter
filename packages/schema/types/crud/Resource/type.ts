import { objectType, list } from "nexus";

export const Resource = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: "Resource",
  description: `Sample resouce`,
  definition(t) {
    t.int("id");
    t.string("uuid");
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.list.field("policies", {
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
        return root.policies;
      },
    });
    t.field("_count", {
      type: "ResourceCountOutputType",
      resolve(root: any) {
        return root._count;
      },
    });
  },
});
