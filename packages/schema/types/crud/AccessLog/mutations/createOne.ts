import { mutationField, nonNull } from "nexus";

export const AccessLogCreateOneMutation = mutationField("createOneAccessLog", {
  type: nonNull("AccessLog"),
  args: {
    data: nonNull("AccessLogCreateInput"),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.accessLog.create({
      data,
      ...select,
    });
  },
});
