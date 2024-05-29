import { mutationField, nonNull } from "nexus";

export const PolicyDeleteManyMutation = mutationField("deleteManyPolicy", {
  type: nonNull("BatchPayload"),
  args: {
    where: "PolicyWhereInput",
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.policy.deleteMany({ where } as any);
  },
});
