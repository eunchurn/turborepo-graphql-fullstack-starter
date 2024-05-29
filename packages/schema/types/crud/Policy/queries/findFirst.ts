import { queryField, list } from "nexus";

export const PolicyFindFirstQuery = queryField("findFirstPolicy", {
  type: "Policy",
  args: {
    where: "PolicyWhereInput",
    orderBy: list("PolicyOrderByWithRelationInput"),
    cursor: "PolicyWhereUniqueInput",
    take: "Int",
    skip: "Int",
    distinct: list("PolicyScalarFieldEnum"),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.policy.findFirst({
      ...args,
      ...select,
    });
  },
});
