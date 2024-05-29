import { mutationField, nonNull } from "nexus";

export const ResourceDeleteManyMutation = mutationField("deleteManyResource", {
  type: nonNull("BatchPayload"),
  args: {
    where: "ResourceWhereInput",
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.resource.deleteMany({ where } as any);
  },
});
