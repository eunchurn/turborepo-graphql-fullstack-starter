import { mutationField, nonNull } from "nexus";

export const PolicyUpsertOneMutation = mutationField("upsertOnePolicy", {
  type: nonNull("Policy"),
  args: {
    where: nonNull("PolicyWhereUniqueInput"),
    create: nonNull("PolicyCreateInput"),
    update: nonNull("PolicyUpdateInput"),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.policy.upsert({
      ...args,
      ...select,
    });
  },
});
