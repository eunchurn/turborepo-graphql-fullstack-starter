import { queryField, list } from "nexus";

export const AccessLogAggregateQuery = queryField("aggregateAccessLog", {
  type: "AggregateAccessLog",
  args: {
    where: "AccessLogWhereInput",
    orderBy: list("AccessLogOrderByWithRelationInput"),
    cursor: "AccessLogWhereUniqueInput",
    take: "Int",
    skip: "Int",
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.accessLog.aggregate({ ...args, ...select }) as any;
  },
});
