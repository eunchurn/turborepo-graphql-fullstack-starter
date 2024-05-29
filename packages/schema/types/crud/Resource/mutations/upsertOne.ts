import { mutationField, nonNull } from "nexus";

export const ResourceUpsertOneMutation = mutationField("upsertOneResource", {
  type: nonNull("Resource"),
  args: {
    where: nonNull("ResourceWhereUniqueInput"),
    create: nonNull("ResourceCreateInput"),
    update: nonNull("ResourceUpdateInput"),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.resource.upsert({
      ...args,
      ...select,
    });
  },
});
