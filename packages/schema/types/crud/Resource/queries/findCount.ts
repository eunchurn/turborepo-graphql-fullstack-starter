import { queryField, nonNull, list } from "nexus";

export const ResourceFindCountQuery = queryField("findManyResourceCount", {
  type: nonNull("Int"),
  args: {
    where: "ResourceWhereInput",
    orderBy: list("ResourceOrderByWithRelationInput"),
    cursor: "ResourceWhereUniqueInput",
    take: "Int",
    skip: "Int",
    distinct: list("ResourceScalarFieldEnum"),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.resource.count(args as any);
  },
});
