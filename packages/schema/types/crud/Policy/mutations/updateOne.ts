import { mutationField, nonNull } from "nexus";

export const PolicyUpdateOneMutation = mutationField("updateOnePolicy", {
  type: nonNull("Policy"),
  args: {
    data: nonNull("PolicyUpdateInput"),
    where: nonNull("PolicyWhereUniqueInput"),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.policy.update({
      where,
      data,
      ...select,
    });
  },
});
