import { queryField, nonNull } from "nexus";

export const AccessLogFindUniqueQuery = queryField("findUniqueAccessLog", {
  type: "AccessLog",
  args: {
    where: nonNull("AccessLogWhereUniqueInput"),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.accessLog.findUnique({
      where,
      ...select,
    });
  },
});
