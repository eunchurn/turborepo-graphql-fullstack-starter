import { mutationField, nonNull } from "nexus";

export const AccessLogUpdateOneMutation = mutationField("updateOneAccessLog", {
  type: nonNull("AccessLog"),
  args: {
    data: nonNull("AccessLogUpdateInput"),
    where: nonNull("AccessLogWhereUniqueInput"),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.accessLog.update({
      where,
      data,
      ...select,
    });
  },
});
