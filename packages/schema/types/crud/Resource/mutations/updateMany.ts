import { mutationField, nonNull } from "nexus";

export const ResourceUpdateManyMutation = mutationField("updateManyResource", {
  type: nonNull("BatchPayload"),
  args: {
    data: nonNull("ResourceUpdateManyMutationInput"),
    where: "ResourceWhereInput",
  },
  resolve(_parent, args, { prisma }) {
    return prisma.resource.updateMany(args as any);
  },
});
