import { mutationField, nonNull } from "nexus";

export const ResourceCreateOneMutation = mutationField("createOneResource", {
  type: nonNull("Resource"),
  args: {
    data: nonNull("ResourceCreateInput"),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.resource.create({
      data,
      ...select,
    });
  },
});
