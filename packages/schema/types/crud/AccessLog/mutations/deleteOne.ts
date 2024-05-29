import { mutationField, nonNull } from "nexus";

export const AccessLogDeleteOneMutation = mutationField("deleteOneAccessLog", {
  type: "AccessLog",
  args: {
    where: nonNull("AccessLogWhereUniqueInput"),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.accessLog.delete({
      where,
      ...select,
    });
  },
});
