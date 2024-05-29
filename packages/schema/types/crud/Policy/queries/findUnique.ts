import { queryField, nonNull } from "nexus";

export const PolicyFindUniqueQuery = queryField("findUniquePolicy", {
  type: "Policy",
  args: {
    where: nonNull("PolicyWhereUniqueInput"),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.policy.findUnique({
      where,
      ...select,
    });
  },
});
