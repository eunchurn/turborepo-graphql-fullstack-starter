import { mutationField, nonNull } from "nexus";

export const PolicyUpdateManyMutation = mutationField("updateManyPolicy", {
  type: nonNull("BatchPayload"),
  args: {
    data: nonNull("PolicyUpdateManyMutationInput"),
    where: "PolicyWhereInput",
  },
  resolve(_parent, args, { prisma }) {
    return prisma.policy.updateMany(args as any);
  },
});
