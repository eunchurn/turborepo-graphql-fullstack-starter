import { queryField, list } from "nexus";

export const ResourceAggregateQuery = queryField("aggregateResource", {
  type: "AggregateResource",
  args: {
    where: "ResourceWhereInput",
    orderBy: list("ResourceOrderByWithRelationInput"),
    cursor: "ResourceWhereUniqueInput",
    take: "Int",
    skip: "Int",
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.resource.aggregate({ ...args, ...select }) as any;
  },
});
