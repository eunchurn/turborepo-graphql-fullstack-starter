import { queryField, list } from "nexus";

export const PolicyAggregateQuery = queryField("aggregatePolicy", {
  type: "AggregatePolicy",
  args: {
    where: "PolicyWhereInput",
    orderBy: list("PolicyOrderByWithRelationInput"),
    cursor: "PolicyWhereUniqueInput",
    take: "Int",
    skip: "Int",
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.policy.aggregate({ ...args, ...select }) as any;
  },
});
