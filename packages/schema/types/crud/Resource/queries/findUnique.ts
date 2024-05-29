import { queryField, nonNull } from "nexus";

export const ResourceFindUniqueQuery = queryField("findUniqueResource", {
  type: "Resource",
  args: {
    where: nonNull("ResourceWhereUniqueInput"),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.resource.findUnique({
      where,
      ...select,
    });
  },
});
