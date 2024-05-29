import { mutationField, nonNull } from "nexus";

export const ResourceUpdateOneMutation = mutationField("updateOneResource", {
  type: nonNull("Resource"),
  args: {
    data: nonNull("ResourceUpdateInput"),
    where: nonNull("ResourceWhereUniqueInput"),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.resource.update({
      where,
      data,
      ...select,
    });
  },
});
