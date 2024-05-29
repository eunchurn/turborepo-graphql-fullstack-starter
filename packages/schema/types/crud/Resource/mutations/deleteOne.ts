import { mutationField, nonNull } from "nexus";

export const ResourceDeleteOneMutation = mutationField("deleteOneResource", {
  type: "Resource",
  args: {
    where: nonNull("ResourceWhereUniqueInput"),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.resource.delete({
      where,
      ...select,
    });
  },
});
