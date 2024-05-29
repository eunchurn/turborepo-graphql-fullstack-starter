import { queryField, nonNull, list } from "nexus";

export const ResourceFindManyQuery = queryField("findManyResource", {
  type: nonNull(list(nonNull("Resource"))),
  args: {
    where: "ResourceWhereInput",
    orderBy: list("ResourceOrderByWithRelationInput"),
    cursor: "ResourceWhereUniqueInput",
    take: "Int",
    skip: "Int",
    distinct: list("ResourceScalarFieldEnum"),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.resource.findMany({
      ...args,
      ...select,
    });
  },
});
