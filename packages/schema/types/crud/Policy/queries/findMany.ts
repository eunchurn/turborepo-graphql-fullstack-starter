import { queryField, nonNull, list } from "nexus";

export const PolicyFindManyQuery = queryField("findManyPolicy", {
  type: nonNull(list(nonNull("Policy"))),
  args: {
    where: "PolicyWhereInput",
    orderBy: list("PolicyOrderByWithRelationInput"),
    cursor: "PolicyWhereUniqueInput",
    take: "Int",
    skip: "Int",
    distinct: list("PolicyScalarFieldEnum"),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.policy.findMany({
      ...args,
      ...select,
    });
  },
});
