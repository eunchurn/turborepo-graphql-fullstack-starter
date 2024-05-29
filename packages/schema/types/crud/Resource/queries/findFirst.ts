import { queryField, list } from "nexus";

export const ResourceFindFirstQuery = queryField("findFirstResource", {
  type: "Resource",
  args: {
    where: "ResourceWhereInput",
    orderBy: list("ResourceOrderByWithRelationInput"),
    cursor: "ResourceWhereUniqueInput",
    take: "Int",
    skip: "Int",
    distinct: list("ResourceScalarFieldEnum"),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.resource.findFirst({
      ...args,
      ...select,
    });
  },
});
