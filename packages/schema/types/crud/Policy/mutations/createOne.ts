import { mutationField, nonNull } from "nexus";

export const PolicyCreateOneMutation = mutationField("createOnePolicy", {
  type: nonNull("Policy"),
  args: {
    data: nonNull("PolicyCreateInput"),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.policy.create({
      data,
      ...select,
    });
  },
});
