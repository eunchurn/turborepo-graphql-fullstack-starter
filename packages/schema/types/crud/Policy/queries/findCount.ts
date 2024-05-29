import { queryField, nonNull, list } from "nexus";

export const PolicyFindCountQuery = queryField("findManyPolicyCount", {
  type: nonNull("Int"),
  args: {
    where: "PolicyWhereInput",
    orderBy: list("PolicyOrderByWithRelationInput"),
    cursor: "PolicyWhereUniqueInput",
    take: "Int",
    skip: "Int",
    distinct: list("PolicyScalarFieldEnum"),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.policy.count(args as any);
  },
});
