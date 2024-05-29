import { mutationField, nonNull } from "nexus";

export const PolicyDeleteOneMutation = mutationField("deleteOnePolicy", {
  type: "Policy",
  args: {
    where: nonNull("PolicyWhereUniqueInput"),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.policy.delete({
      where,
      ...select,
    });
  },
});
