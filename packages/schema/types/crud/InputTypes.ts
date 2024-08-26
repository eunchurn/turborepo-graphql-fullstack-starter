import { enumType, inputObjectType, objectType } from "nexus";

export const TransactionIsolationLevel = enumType({
  name: "TransactionIsolationLevel",
  members: [
    "ReadUncommitted",
    "ReadCommitted",
    "RepeatableRead",
    "Serializable",
  ],
});

export const UserScalarFieldEnum = enumType({
  name: "UserScalarFieldEnum",
  members: [
    "id",
    "uuid",
    "createdAt",
    "updatedAt",
    "email",
    "name",
    "phoneNumber",
    "description",
    "imgUrl",
    "role",
    "stUserId",
    "permission",
  ],
});

export const PolicyScalarFieldEnum = enumType({
  name: "PolicyScalarFieldEnum",
  members: [
    "id",
    "uuid",
    "createdAt",
    "updatedAt",
    "resourceId",
    "action",
    "userId",
  ],
});

export const ResourceScalarFieldEnum = enumType({
  name: "ResourceScalarFieldEnum",
  members: ["id", "uuid", "createdAt", "updatedAt"],
});

export const AccessLogScalarFieldEnum = enumType({
  name: "AccessLogScalarFieldEnum",
  members: ["id", "createdAt", "userId", "email", "message", "accessType"],
});

export const AdminSchemaScalarFieldEnum = enumType({
  name: "AdminSchemaScalarFieldEnum",
  members: ["id", "createdAt", "updatedAt", "schema"],
});

export const SortOrder = enumType({
  name: "SortOrder",
  members: ["asc", "desc"],
});

export const JsonNullValueInput = enumType({
  name: "JsonNullValueInput",
  members: ["JsonNull"],
});

export const QueryMode = enumType({
  name: "QueryMode",
  members: ["default", "insensitive"],
});

export const NullsOrder = enumType({
  name: "NullsOrder",
  members: ["first", "last"],
});

export const JsonNullValueFilter = enumType({
  name: "JsonNullValueFilter",
  members: ["DbNull", "JsonNull", "AnyNull"],
});

export const UserRole = enumType({
  name: "UserRole",
  members: ["SUPER_USER", "ADMIN", "USER_RO", "USER_RW", "GUEST"],
});

export const UserPermission = enumType({
  name: "UserPermission",
  members: [
    "PROJECT_WRITE",
    "PROJECT_READ",
    "PROJECT_SETTINGS_WRITE",
    "PROJECT_SETTINGS_READ",
    "APPROVAL_WRITE",
    "APPROVAL_READ",
    "MONITORING_WRITE",
    "MONITORING_READ",
    "USER_WRITE",
    "USER_READ",
    "NO_PERMISSION",
    "ADMINISTRATOR",
  ],
});

export const Action = enumType({
  name: "Action",
  members: ["ALLOW", "DENY"],
});

export const AccessType = enumType({
  name: "AccessType",
  members: ["SIGNUP", "SIGNIN", "TRY", "REJECTED"],
});

export const UserWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserWhereInput",
  definition(t) {
    t.list.field("AND", { type: "UserWhereInput" });
    t.list.field("OR", { type: "UserWhereInput" });
    t.list.field("NOT", { type: "UserWhereInput" });
    t.field("id", { type: "IntFilter" });
    t.field("uuid", { type: "StringFilter" });
    t.field("createdAt", { type: "DateTimeFilter" });
    t.field("updatedAt", { type: "DateTimeFilter" });
    t.field("email", { type: "StringFilter" });
    t.field("name", { type: "StringNullableFilter" });
    t.field("phoneNumber", { type: "StringNullableFilter" });
    t.field("description", { type: "StringNullableFilter" });
    t.field("imgUrl", { type: "StringNullableFilter" });
    t.field("role", { type: "EnumUserRoleFilter" });
    t.field("stUserId", { type: "StringFilter" });
    t.field("permission", { type: "EnumUserPermissionNullableListFilter" });
    t.field("AccessLog", { type: "AccessLogListRelationFilter" });
    t.field("policy", { type: "PolicyListRelationFilter" });
  },
});

export const UserOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserOrderByWithRelationInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("uuid", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("updatedAt", { type: "SortOrder" });
    t.field("email", { type: "SortOrder" });
    t.field("name", { type: "SortOrderInput" });
    t.field("phoneNumber", { type: "SortOrderInput" });
    t.field("description", { type: "SortOrderInput" });
    t.field("imgUrl", { type: "SortOrderInput" });
    t.field("role", { type: "SortOrder" });
    t.field("stUserId", { type: "SortOrder" });
    t.field("permission", { type: "SortOrder" });
    t.field("AccessLog", { type: "AccessLogOrderByRelationAggregateInput" });
    t.field("policy", { type: "PolicyOrderByRelationAggregateInput" });
  },
});

export const UserWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserWhereUniqueInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.field("email", { type: "String" });
    t.field("stUserId", { type: "String" });
    t.list.field("AND", { type: "UserWhereInput" });
    t.list.field("OR", { type: "UserWhereInput" });
    t.list.field("NOT", { type: "UserWhereInput" });
    t.field("createdAt", { type: "DateTimeFilter" });
    t.field("updatedAt", { type: "DateTimeFilter" });
    t.field("name", { type: "StringNullableFilter" });
    t.field("phoneNumber", { type: "StringNullableFilter" });
    t.field("description", { type: "StringNullableFilter" });
    t.field("imgUrl", { type: "StringNullableFilter" });
    t.field("role", { type: "EnumUserRoleFilter" });
    t.field("permission", { type: "EnumUserPermissionNullableListFilter" });
    t.field("AccessLog", { type: "AccessLogListRelationFilter" });
    t.field("policy", { type: "PolicyListRelationFilter" });
  },
});

export const UserOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserOrderByWithAggregationInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("uuid", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("updatedAt", { type: "SortOrder" });
    t.field("email", { type: "SortOrder" });
    t.field("name", { type: "SortOrderInput" });
    t.field("phoneNumber", { type: "SortOrderInput" });
    t.field("description", { type: "SortOrderInput" });
    t.field("imgUrl", { type: "SortOrderInput" });
    t.field("role", { type: "SortOrder" });
    t.field("stUserId", { type: "SortOrder" });
    t.field("permission", { type: "SortOrder" });
    t.field("_count", { type: "UserCountOrderByAggregateInput" });
    t.field("_avg", { type: "UserAvgOrderByAggregateInput" });
    t.field("_max", { type: "UserMaxOrderByAggregateInput" });
    t.field("_min", { type: "UserMinOrderByAggregateInput" });
    t.field("_sum", { type: "UserSumOrderByAggregateInput" });
  },
});

export const UserScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserScalarWhereWithAggregatesInput",
  definition(t) {
    t.list.field("AND", { type: "UserScalarWhereWithAggregatesInput" });
    t.list.field("OR", { type: "UserScalarWhereWithAggregatesInput" });
    t.list.field("NOT", { type: "UserScalarWhereWithAggregatesInput" });
    t.field("id", { type: "IntWithAggregatesFilter" });
    t.field("uuid", { type: "StringWithAggregatesFilter" });
    t.field("createdAt", { type: "DateTimeWithAggregatesFilter" });
    t.field("updatedAt", { type: "DateTimeWithAggregatesFilter" });
    t.field("email", { type: "StringWithAggregatesFilter" });
    t.field("name", { type: "StringNullableWithAggregatesFilter" });
    t.field("phoneNumber", { type: "StringNullableWithAggregatesFilter" });
    t.field("description", { type: "StringNullableWithAggregatesFilter" });
    t.field("imgUrl", { type: "StringNullableWithAggregatesFilter" });
    t.field("role", { type: "EnumUserRoleWithAggregatesFilter" });
    t.field("stUserId", { type: "StringWithAggregatesFilter" });
    t.field("permission", { type: "EnumUserPermissionNullableListFilter" });
  },
});

export const PolicyWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyWhereInput",
  definition(t) {
    t.list.field("AND", { type: "PolicyWhereInput" });
    t.list.field("OR", { type: "PolicyWhereInput" });
    t.list.field("NOT", { type: "PolicyWhereInput" });
    t.field("id", { type: "IntFilter" });
    t.field("uuid", { type: "StringFilter" });
    t.field("createdAt", { type: "DateTimeFilter" });
    t.field("updatedAt", { type: "DateTimeFilter" });
    t.field("resourceId", { type: "IntFilter" });
    t.field("action", { type: "EnumActionFilter" });
    t.field("userId", { type: "IntNullableFilter" });
    t.field("resource", { type: "ResourceRelationFilter" });
    t.field("user", { type: "UserNullableRelationFilter" });
  },
});

export const PolicyOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyOrderByWithRelationInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("uuid", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("updatedAt", { type: "SortOrder" });
    t.field("resourceId", { type: "SortOrder" });
    t.field("action", { type: "SortOrder" });
    t.field("userId", { type: "SortOrderInput" });
    t.field("resource", { type: "ResourceOrderByWithRelationInput" });
    t.field("user", { type: "UserOrderByWithRelationInput" });
  },
});

export const PolicyWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyWhereUniqueInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.list.field("AND", { type: "PolicyWhereInput" });
    t.list.field("OR", { type: "PolicyWhereInput" });
    t.list.field("NOT", { type: "PolicyWhereInput" });
    t.field("createdAt", { type: "DateTimeFilter" });
    t.field("updatedAt", { type: "DateTimeFilter" });
    t.field("resourceId", { type: "IntFilter" });
    t.field("action", { type: "EnumActionFilter" });
    t.field("userId", { type: "IntNullableFilter" });
    t.field("resource", { type: "ResourceRelationFilter" });
    t.field("user", { type: "UserNullableRelationFilter" });
  },
});

export const PolicyOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyOrderByWithAggregationInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("uuid", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("updatedAt", { type: "SortOrder" });
    t.field("resourceId", { type: "SortOrder" });
    t.field("action", { type: "SortOrder" });
    t.field("userId", { type: "SortOrderInput" });
    t.field("_count", { type: "PolicyCountOrderByAggregateInput" });
    t.field("_avg", { type: "PolicyAvgOrderByAggregateInput" });
    t.field("_max", { type: "PolicyMaxOrderByAggregateInput" });
    t.field("_min", { type: "PolicyMinOrderByAggregateInput" });
    t.field("_sum", { type: "PolicySumOrderByAggregateInput" });
  },
});

export const PolicyScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyScalarWhereWithAggregatesInput",
  definition(t) {
    t.list.field("AND", { type: "PolicyScalarWhereWithAggregatesInput" });
    t.list.field("OR", { type: "PolicyScalarWhereWithAggregatesInput" });
    t.list.field("NOT", { type: "PolicyScalarWhereWithAggregatesInput" });
    t.field("id", { type: "IntWithAggregatesFilter" });
    t.field("uuid", { type: "StringWithAggregatesFilter" });
    t.field("createdAt", { type: "DateTimeWithAggregatesFilter" });
    t.field("updatedAt", { type: "DateTimeWithAggregatesFilter" });
    t.field("resourceId", { type: "IntWithAggregatesFilter" });
    t.field("action", { type: "EnumActionWithAggregatesFilter" });
    t.field("userId", { type: "IntNullableWithAggregatesFilter" });
  },
});

export const ResourceWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceWhereInput",
  definition(t) {
    t.list.field("AND", { type: "ResourceWhereInput" });
    t.list.field("OR", { type: "ResourceWhereInput" });
    t.list.field("NOT", { type: "ResourceWhereInput" });
    t.field("id", { type: "IntFilter" });
    t.field("uuid", { type: "StringFilter" });
    t.field("createdAt", { type: "DateTimeFilter" });
    t.field("updatedAt", { type: "DateTimeFilter" });
    t.field("policies", { type: "PolicyListRelationFilter" });
  },
});

export const ResourceOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceOrderByWithRelationInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("uuid", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("updatedAt", { type: "SortOrder" });
    t.field("policies", { type: "PolicyOrderByRelationAggregateInput" });
  },
});

export const ResourceWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceWhereUniqueInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.list.field("AND", { type: "ResourceWhereInput" });
    t.list.field("OR", { type: "ResourceWhereInput" });
    t.list.field("NOT", { type: "ResourceWhereInput" });
    t.field("createdAt", { type: "DateTimeFilter" });
    t.field("updatedAt", { type: "DateTimeFilter" });
    t.field("policies", { type: "PolicyListRelationFilter" });
  },
});

export const ResourceOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceOrderByWithAggregationInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("uuid", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("updatedAt", { type: "SortOrder" });
    t.field("_count", { type: "ResourceCountOrderByAggregateInput" });
    t.field("_avg", { type: "ResourceAvgOrderByAggregateInput" });
    t.field("_max", { type: "ResourceMaxOrderByAggregateInput" });
    t.field("_min", { type: "ResourceMinOrderByAggregateInput" });
    t.field("_sum", { type: "ResourceSumOrderByAggregateInput" });
  },
});

export const ResourceScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceScalarWhereWithAggregatesInput",
  definition(t) {
    t.list.field("AND", { type: "ResourceScalarWhereWithAggregatesInput" });
    t.list.field("OR", { type: "ResourceScalarWhereWithAggregatesInput" });
    t.list.field("NOT", { type: "ResourceScalarWhereWithAggregatesInput" });
    t.field("id", { type: "IntWithAggregatesFilter" });
    t.field("uuid", { type: "StringWithAggregatesFilter" });
    t.field("createdAt", { type: "DateTimeWithAggregatesFilter" });
    t.field("updatedAt", { type: "DateTimeWithAggregatesFilter" });
  },
});

export const AccessLogWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogWhereInput",
  definition(t) {
    t.list.field("AND", { type: "AccessLogWhereInput" });
    t.list.field("OR", { type: "AccessLogWhereInput" });
    t.list.field("NOT", { type: "AccessLogWhereInput" });
    t.field("id", { type: "IntFilter" });
    t.field("createdAt", { type: "DateTimeFilter" });
    t.field("userId", { type: "StringNullableFilter" });
    t.field("email", { type: "StringNullableFilter" });
    t.field("message", { type: "StringFilter" });
    t.field("accessType", { type: "EnumAccessTypeFilter" });
    t.field("user", { type: "UserNullableRelationFilter" });
  },
});

export const AccessLogOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogOrderByWithRelationInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("userId", { type: "SortOrderInput" });
    t.field("email", { type: "SortOrderInput" });
    t.field("message", { type: "SortOrder" });
    t.field("accessType", { type: "SortOrder" });
    t.field("user", { type: "UserOrderByWithRelationInput" });
  },
});

export const AccessLogWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogWhereUniqueInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.list.field("AND", { type: "AccessLogWhereInput" });
    t.list.field("OR", { type: "AccessLogWhereInput" });
    t.list.field("NOT", { type: "AccessLogWhereInput" });
    t.field("createdAt", { type: "DateTimeFilter" });
    t.field("userId", { type: "StringNullableFilter" });
    t.field("email", { type: "StringNullableFilter" });
    t.field("message", { type: "StringFilter" });
    t.field("accessType", { type: "EnumAccessTypeFilter" });
    t.field("user", { type: "UserNullableRelationFilter" });
  },
});

export const AccessLogOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogOrderByWithAggregationInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("userId", { type: "SortOrderInput" });
    t.field("email", { type: "SortOrderInput" });
    t.field("message", { type: "SortOrder" });
    t.field("accessType", { type: "SortOrder" });
    t.field("_count", { type: "AccessLogCountOrderByAggregateInput" });
    t.field("_avg", { type: "AccessLogAvgOrderByAggregateInput" });
    t.field("_max", { type: "AccessLogMaxOrderByAggregateInput" });
    t.field("_min", { type: "AccessLogMinOrderByAggregateInput" });
    t.field("_sum", { type: "AccessLogSumOrderByAggregateInput" });
  },
});

export const AccessLogScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogScalarWhereWithAggregatesInput",
  definition(t) {
    t.list.field("AND", { type: "AccessLogScalarWhereWithAggregatesInput" });
    t.list.field("OR", { type: "AccessLogScalarWhereWithAggregatesInput" });
    t.list.field("NOT", { type: "AccessLogScalarWhereWithAggregatesInput" });
    t.field("id", { type: "IntWithAggregatesFilter" });
    t.field("createdAt", { type: "DateTimeWithAggregatesFilter" });
    t.field("userId", { type: "StringNullableWithAggregatesFilter" });
    t.field("email", { type: "StringNullableWithAggregatesFilter" });
    t.field("message", { type: "StringWithAggregatesFilter" });
    t.field("accessType", { type: "EnumAccessTypeWithAggregatesFilter" });
  },
});

export const AdminSchemaWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AdminSchemaWhereInput",
  definition(t) {
    t.list.field("AND", { type: "AdminSchemaWhereInput" });
    t.list.field("OR", { type: "AdminSchemaWhereInput" });
    t.list.field("NOT", { type: "AdminSchemaWhereInput" });
    t.field("id", { type: "IntFilter" });
    t.field("createdAt", { type: "DateTimeFilter" });
    t.field("updatedAt", { type: "DateTimeFilter" });
    t.field("schema", { type: "JsonFilter" });
  },
});

export const AdminSchemaOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AdminSchemaOrderByWithRelationInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("updatedAt", { type: "SortOrder" });
    t.field("schema", { type: "SortOrder" });
  },
});

export const AdminSchemaWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AdminSchemaWhereUniqueInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.list.field("AND", { type: "AdminSchemaWhereInput" });
    t.list.field("OR", { type: "AdminSchemaWhereInput" });
    t.list.field("NOT", { type: "AdminSchemaWhereInput" });
    t.field("createdAt", { type: "DateTimeFilter" });
    t.field("updatedAt", { type: "DateTimeFilter" });
    t.field("schema", { type: "JsonFilter" });
  },
});

export const AdminSchemaOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AdminSchemaOrderByWithAggregationInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("updatedAt", { type: "SortOrder" });
    t.field("schema", { type: "SortOrder" });
    t.field("_count", { type: "AdminSchemaCountOrderByAggregateInput" });
    t.field("_avg", { type: "AdminSchemaAvgOrderByAggregateInput" });
    t.field("_max", { type: "AdminSchemaMaxOrderByAggregateInput" });
    t.field("_min", { type: "AdminSchemaMinOrderByAggregateInput" });
    t.field("_sum", { type: "AdminSchemaSumOrderByAggregateInput" });
  },
});

export const AdminSchemaScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AdminSchemaScalarWhereWithAggregatesInput",
  definition(t) {
    t.list.field("AND", { type: "AdminSchemaScalarWhereWithAggregatesInput" });
    t.list.field("OR", { type: "AdminSchemaScalarWhereWithAggregatesInput" });
    t.list.field("NOT", { type: "AdminSchemaScalarWhereWithAggregatesInput" });
    t.field("id", { type: "IntWithAggregatesFilter" });
    t.field("createdAt", { type: "DateTimeWithAggregatesFilter" });
    t.field("updatedAt", { type: "DateTimeWithAggregatesFilter" });
    t.field("schema", { type: "JsonWithAggregatesFilter" });
  },
});

export const UserCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserCreateInput",
  definition(t) {
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.nonNull.field("email", { type: "String" });
    t.field("name", { type: "String" });
    t.field("phoneNumber", { type: "String" });
    t.field("description", { type: "String" });
    t.field("imgUrl", { type: "String" });
    t.field("role", { type: "UserRole" });
    t.nonNull.field("stUserId", { type: "String" });
    t.list.field("permission", { type: "UserPermission" });
    t.field("AccessLog", { type: "AccessLogCreateNestedManyWithoutUserInput" });
    t.field("policy", { type: "PolicyCreateNestedManyWithoutUserInput" });
  },
});

export const UserUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserUncheckedCreateInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.nonNull.field("email", { type: "String" });
    t.field("name", { type: "String" });
    t.field("phoneNumber", { type: "String" });
    t.field("description", { type: "String" });
    t.field("imgUrl", { type: "String" });
    t.field("role", { type: "UserRole" });
    t.nonNull.field("stUserId", { type: "String" });
    t.list.field("permission", { type: "UserPermission" });
    t.field("AccessLog", {
      type: "AccessLogUncheckedCreateNestedManyWithoutUserInput",
    });
    t.field("policy", {
      type: "PolicyUncheckedCreateNestedManyWithoutUserInput",
    });
  },
});

export const UserUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserUpdateInput",
  definition(t) {
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("email", { type: "StringFieldUpdateOperationsInput" });
    t.field("name", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("phoneNumber", {
      type: "NullableStringFieldUpdateOperationsInput",
    });
    t.field("description", {
      type: "NullableStringFieldUpdateOperationsInput",
    });
    t.field("imgUrl", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("role", { type: "EnumUserRoleFieldUpdateOperationsInput" });
    t.field("stUserId", { type: "StringFieldUpdateOperationsInput" });
    t.list.field("permission", { type: "UserPermission" });
    t.field("AccessLog", { type: "AccessLogUpdateManyWithoutUserNestedInput" });
    t.field("policy", { type: "PolicyUpdateManyWithoutUserNestedInput" });
  },
});

export const UserUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserUncheckedUpdateInput",
  definition(t) {
    t.field("id", { type: "IntFieldUpdateOperationsInput" });
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("email", { type: "StringFieldUpdateOperationsInput" });
    t.field("name", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("phoneNumber", {
      type: "NullableStringFieldUpdateOperationsInput",
    });
    t.field("description", {
      type: "NullableStringFieldUpdateOperationsInput",
    });
    t.field("imgUrl", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("role", { type: "EnumUserRoleFieldUpdateOperationsInput" });
    t.field("stUserId", { type: "StringFieldUpdateOperationsInput" });
    t.list.field("permission", { type: "UserPermission" });
    t.field("AccessLog", {
      type: "AccessLogUncheckedUpdateManyWithoutUserNestedInput",
    });
    t.field("policy", {
      type: "PolicyUncheckedUpdateManyWithoutUserNestedInput",
    });
  },
});

export const UserCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserCreateManyInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.nonNull.field("email", { type: "String" });
    t.field("name", { type: "String" });
    t.field("phoneNumber", { type: "String" });
    t.field("description", { type: "String" });
    t.field("imgUrl", { type: "String" });
    t.field("role", { type: "UserRole" });
    t.nonNull.field("stUserId", { type: "String" });
    t.list.field("permission", { type: "UserPermission" });
  },
});

export const UserUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserUpdateManyMutationInput",
  definition(t) {
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("email", { type: "StringFieldUpdateOperationsInput" });
    t.field("name", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("phoneNumber", {
      type: "NullableStringFieldUpdateOperationsInput",
    });
    t.field("description", {
      type: "NullableStringFieldUpdateOperationsInput",
    });
    t.field("imgUrl", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("role", { type: "EnumUserRoleFieldUpdateOperationsInput" });
    t.field("stUserId", { type: "StringFieldUpdateOperationsInput" });
    t.list.field("permission", { type: "UserPermission" });
  },
});

export const UserUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserUncheckedUpdateManyInput",
  definition(t) {
    t.field("id", { type: "IntFieldUpdateOperationsInput" });
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("email", { type: "StringFieldUpdateOperationsInput" });
    t.field("name", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("phoneNumber", {
      type: "NullableStringFieldUpdateOperationsInput",
    });
    t.field("description", {
      type: "NullableStringFieldUpdateOperationsInput",
    });
    t.field("imgUrl", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("role", { type: "EnumUserRoleFieldUpdateOperationsInput" });
    t.field("stUserId", { type: "StringFieldUpdateOperationsInput" });
    t.list.field("permission", { type: "UserPermission" });
  },
});

export const PolicyCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyCreateInput",
  definition(t) {
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.nonNull.field("action", { type: "Action" });
    t.nonNull.field("resource", {
      type: "ResourceCreateNestedOneWithoutPoliciesInput",
    });
    t.field("user", { type: "UserCreateNestedOneWithoutPolicyInput" });
  },
});

export const PolicyUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUncheckedCreateInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.nonNull.field("resourceId", { type: "Int" });
    t.nonNull.field("action", { type: "Action" });
    t.field("userId", { type: "Int" });
  },
});

export const PolicyUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUpdateInput",
  definition(t) {
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("action", { type: "EnumActionFieldUpdateOperationsInput" });
    t.field("resource", {
      type: "ResourceUpdateOneRequiredWithoutPoliciesNestedInput",
    });
    t.field("user", { type: "UserUpdateOneWithoutPolicyNestedInput" });
  },
});

export const PolicyUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUncheckedUpdateInput",
  definition(t) {
    t.field("id", { type: "IntFieldUpdateOperationsInput" });
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("resourceId", { type: "IntFieldUpdateOperationsInput" });
    t.field("action", { type: "EnumActionFieldUpdateOperationsInput" });
    t.field("userId", { type: "NullableIntFieldUpdateOperationsInput" });
  },
});

export const PolicyCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyCreateManyInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.nonNull.field("resourceId", { type: "Int" });
    t.nonNull.field("action", { type: "Action" });
    t.field("userId", { type: "Int" });
  },
});

export const PolicyUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUpdateManyMutationInput",
  definition(t) {
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("action", { type: "EnumActionFieldUpdateOperationsInput" });
  },
});

export const PolicyUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUncheckedUpdateManyInput",
  definition(t) {
    t.field("id", { type: "IntFieldUpdateOperationsInput" });
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("resourceId", { type: "IntFieldUpdateOperationsInput" });
    t.field("action", { type: "EnumActionFieldUpdateOperationsInput" });
    t.field("userId", { type: "NullableIntFieldUpdateOperationsInput" });
  },
});

export const ResourceCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceCreateInput",
  definition(t) {
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.field("policies", { type: "PolicyCreateNestedManyWithoutResourceInput" });
  },
});

export const ResourceUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceUncheckedCreateInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.field("policies", {
      type: "PolicyUncheckedCreateNestedManyWithoutResourceInput",
    });
  },
});

export const ResourceUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceUpdateInput",
  definition(t) {
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("policies", { type: "PolicyUpdateManyWithoutResourceNestedInput" });
  },
});

export const ResourceUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceUncheckedUpdateInput",
  definition(t) {
    t.field("id", { type: "IntFieldUpdateOperationsInput" });
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("policies", {
      type: "PolicyUncheckedUpdateManyWithoutResourceNestedInput",
    });
  },
});

export const ResourceCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceCreateManyInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
  },
});

export const ResourceUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceUpdateManyMutationInput",
  definition(t) {
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
  },
});

export const ResourceUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceUncheckedUpdateManyInput",
  definition(t) {
    t.field("id", { type: "IntFieldUpdateOperationsInput" });
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
  },
});

export const AccessLogCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogCreateInput",
  definition(t) {
    t.field("createdAt", { type: "DateTime" });
    t.field("email", { type: "String" });
    t.field("message", { type: "String" });
    t.nonNull.field("accessType", { type: "AccessType" });
    t.field("user", { type: "UserCreateNestedOneWithoutAccessLogInput" });
  },
});

export const AccessLogUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogUncheckedCreateInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("createdAt", { type: "DateTime" });
    t.field("userId", { type: "String" });
    t.field("email", { type: "String" });
    t.field("message", { type: "String" });
    t.nonNull.field("accessType", { type: "AccessType" });
  },
});

export const AccessLogUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogUpdateInput",
  definition(t) {
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("email", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("message", { type: "StringFieldUpdateOperationsInput" });
    t.field("accessType", { type: "EnumAccessTypeFieldUpdateOperationsInput" });
    t.field("user", { type: "UserUpdateOneWithoutAccessLogNestedInput" });
  },
});

export const AccessLogUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogUncheckedUpdateInput",
  definition(t) {
    t.field("id", { type: "IntFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("userId", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("email", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("message", { type: "StringFieldUpdateOperationsInput" });
    t.field("accessType", { type: "EnumAccessTypeFieldUpdateOperationsInput" });
  },
});

export const AccessLogCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogCreateManyInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("createdAt", { type: "DateTime" });
    t.field("userId", { type: "String" });
    t.field("email", { type: "String" });
    t.field("message", { type: "String" });
    t.nonNull.field("accessType", { type: "AccessType" });
  },
});

export const AccessLogUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogUpdateManyMutationInput",
  definition(t) {
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("email", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("message", { type: "StringFieldUpdateOperationsInput" });
    t.field("accessType", { type: "EnumAccessTypeFieldUpdateOperationsInput" });
  },
});

export const AccessLogUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogUncheckedUpdateManyInput",
  definition(t) {
    t.field("id", { type: "IntFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("userId", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("email", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("message", { type: "StringFieldUpdateOperationsInput" });
    t.field("accessType", { type: "EnumAccessTypeFieldUpdateOperationsInput" });
  },
});

export const AdminSchemaCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AdminSchemaCreateInput",
  definition(t) {
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.nonNull.field("schema", { type: "Json" });
  },
});

export const AdminSchemaUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AdminSchemaUncheckedCreateInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.nonNull.field("schema", { type: "Json" });
  },
});

export const AdminSchemaUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AdminSchemaUpdateInput",
  definition(t) {
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("schema", { type: "Json" });
  },
});

export const AdminSchemaUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AdminSchemaUncheckedUpdateInput",
  definition(t) {
    t.field("id", { type: "IntFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("schema", { type: "Json" });
  },
});

export const AdminSchemaCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AdminSchemaCreateManyInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.nonNull.field("schema", { type: "Json" });
  },
});

export const AdminSchemaUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AdminSchemaUpdateManyMutationInput",
  definition(t) {
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("schema", { type: "Json" });
  },
});

export const AdminSchemaUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AdminSchemaUncheckedUpdateManyInput",
  definition(t) {
    t.field("id", { type: "IntFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("schema", { type: "Json" });
  },
});

export const IntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "IntFilter",
  definition(t) {
    t.field("equals", { type: "Int" });
    t.list.field("in", { type: "Int" });
    t.list.field("notIn", { type: "Int" });
    t.field("lt", { type: "Int" });
    t.field("lte", { type: "Int" });
    t.field("gt", { type: "Int" });
    t.field("gte", { type: "Int" });
    t.field("not", { type: "NestedIntFilter" });
  },
});

export const StringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "StringFilter",
  definition(t) {
    t.field("equals", { type: "String" });
    t.list.field("in", { type: "String" });
    t.list.field("notIn", { type: "String" });
    t.field("lt", { type: "String" });
    t.field("lte", { type: "String" });
    t.field("gt", { type: "String" });
    t.field("gte", { type: "String" });
    t.field("contains", { type: "String" });
    t.field("startsWith", { type: "String" });
    t.field("endsWith", { type: "String" });
    t.field("mode", { type: "QueryMode" });
    t.field("not", { type: "NestedStringFilter" });
  },
});

export const DateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "DateTimeFilter",
  definition(t) {
    t.field("equals", { type: "DateTime" });
    t.list.field("in", { type: "DateTime" });
    t.list.field("notIn", { type: "DateTime" });
    t.field("lt", { type: "DateTime" });
    t.field("lte", { type: "DateTime" });
    t.field("gt", { type: "DateTime" });
    t.field("gte", { type: "DateTime" });
    t.field("not", { type: "NestedDateTimeFilter" });
  },
});

export const StringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "StringNullableFilter",
  definition(t) {
    t.field("equals", { type: "String" });
    t.list.field("in", { type: "String" });
    t.list.field("notIn", { type: "String" });
    t.field("lt", { type: "String" });
    t.field("lte", { type: "String" });
    t.field("gt", { type: "String" });
    t.field("gte", { type: "String" });
    t.field("contains", { type: "String" });
    t.field("startsWith", { type: "String" });
    t.field("endsWith", { type: "String" });
    t.field("mode", { type: "QueryMode" });
    t.field("not", { type: "NestedStringNullableFilter" });
  },
});

export const EnumUserRoleFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "EnumUserRoleFilter",
  definition(t) {
    t.field("equals", { type: "UserRole" });
    t.list.field("in", { type: "UserRole" });
    t.list.field("notIn", { type: "UserRole" });
    t.field("not", { type: "NestedEnumUserRoleFilter" });
  },
});

export const EnumUserPermissionNullableListFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "EnumUserPermissionNullableListFilter",
  definition(t) {
    t.list.field("equals", { type: "UserPermission" });
    t.field("has", { type: "UserPermission" });
    t.list.field("hasEvery", { type: "UserPermission" });
    t.list.field("hasSome", { type: "UserPermission" });
    t.field("isEmpty", { type: "Boolean" });
  },
});

export const AccessLogListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogListRelationFilter",
  definition(t) {
    t.field("every", { type: "AccessLogWhereInput" });
    t.field("some", { type: "AccessLogWhereInput" });
    t.field("none", { type: "AccessLogWhereInput" });
  },
});

export const PolicyListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyListRelationFilter",
  definition(t) {
    t.field("every", { type: "PolicyWhereInput" });
    t.field("some", { type: "PolicyWhereInput" });
    t.field("none", { type: "PolicyWhereInput" });
  },
});

export const SortOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "SortOrderInput",
  definition(t) {
    t.nonNull.field("sort", { type: "SortOrder" });
    t.field("nulls", { type: "NullsOrder" });
  },
});

export const AccessLogOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogOrderByRelationAggregateInput",
  definition(t) {
    t.field("_count", { type: "SortOrder" });
  },
});

export const PolicyOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyOrderByRelationAggregateInput",
  definition(t) {
    t.field("_count", { type: "SortOrder" });
  },
});

export const UserCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserCountOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("uuid", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("updatedAt", { type: "SortOrder" });
    t.field("email", { type: "SortOrder" });
    t.field("name", { type: "SortOrder" });
    t.field("phoneNumber", { type: "SortOrder" });
    t.field("description", { type: "SortOrder" });
    t.field("imgUrl", { type: "SortOrder" });
    t.field("role", { type: "SortOrder" });
    t.field("stUserId", { type: "SortOrder" });
    t.field("permission", { type: "SortOrder" });
  },
});

export const UserAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserAvgOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
  },
});

export const UserMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserMaxOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("uuid", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("updatedAt", { type: "SortOrder" });
    t.field("email", { type: "SortOrder" });
    t.field("name", { type: "SortOrder" });
    t.field("phoneNumber", { type: "SortOrder" });
    t.field("description", { type: "SortOrder" });
    t.field("imgUrl", { type: "SortOrder" });
    t.field("role", { type: "SortOrder" });
    t.field("stUserId", { type: "SortOrder" });
  },
});

export const UserMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserMinOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("uuid", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("updatedAt", { type: "SortOrder" });
    t.field("email", { type: "SortOrder" });
    t.field("name", { type: "SortOrder" });
    t.field("phoneNumber", { type: "SortOrder" });
    t.field("description", { type: "SortOrder" });
    t.field("imgUrl", { type: "SortOrder" });
    t.field("role", { type: "SortOrder" });
    t.field("stUserId", { type: "SortOrder" });
  },
});

export const UserSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserSumOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
  },
});

export const IntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "IntWithAggregatesFilter",
  definition(t) {
    t.field("equals", { type: "Int" });
    t.list.field("in", { type: "Int" });
    t.list.field("notIn", { type: "Int" });
    t.field("lt", { type: "Int" });
    t.field("lte", { type: "Int" });
    t.field("gt", { type: "Int" });
    t.field("gte", { type: "Int" });
    t.field("not", { type: "NestedIntWithAggregatesFilter" });
    t.field("_count", { type: "NestedIntFilter" });
    t.field("_avg", { type: "NestedFloatFilter" });
    t.field("_sum", { type: "NestedIntFilter" });
    t.field("_min", { type: "NestedIntFilter" });
    t.field("_max", { type: "NestedIntFilter" });
  },
});

export const StringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "StringWithAggregatesFilter",
  definition(t) {
    t.field("equals", { type: "String" });
    t.list.field("in", { type: "String" });
    t.list.field("notIn", { type: "String" });
    t.field("lt", { type: "String" });
    t.field("lte", { type: "String" });
    t.field("gt", { type: "String" });
    t.field("gte", { type: "String" });
    t.field("contains", { type: "String" });
    t.field("startsWith", { type: "String" });
    t.field("endsWith", { type: "String" });
    t.field("mode", { type: "QueryMode" });
    t.field("not", { type: "NestedStringWithAggregatesFilter" });
    t.field("_count", { type: "NestedIntFilter" });
    t.field("_min", { type: "NestedStringFilter" });
    t.field("_max", { type: "NestedStringFilter" });
  },
});

export const DateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "DateTimeWithAggregatesFilter",
  definition(t) {
    t.field("equals", { type: "DateTime" });
    t.list.field("in", { type: "DateTime" });
    t.list.field("notIn", { type: "DateTime" });
    t.field("lt", { type: "DateTime" });
    t.field("lte", { type: "DateTime" });
    t.field("gt", { type: "DateTime" });
    t.field("gte", { type: "DateTime" });
    t.field("not", { type: "NestedDateTimeWithAggregatesFilter" });
    t.field("_count", { type: "NestedIntFilter" });
    t.field("_min", { type: "NestedDateTimeFilter" });
    t.field("_max", { type: "NestedDateTimeFilter" });
  },
});

export const StringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "StringNullableWithAggregatesFilter",
  definition(t) {
    t.field("equals", { type: "String" });
    t.list.field("in", { type: "String" });
    t.list.field("notIn", { type: "String" });
    t.field("lt", { type: "String" });
    t.field("lte", { type: "String" });
    t.field("gt", { type: "String" });
    t.field("gte", { type: "String" });
    t.field("contains", { type: "String" });
    t.field("startsWith", { type: "String" });
    t.field("endsWith", { type: "String" });
    t.field("mode", { type: "QueryMode" });
    t.field("not", { type: "NestedStringNullableWithAggregatesFilter" });
    t.field("_count", { type: "NestedIntNullableFilter" });
    t.field("_min", { type: "NestedStringNullableFilter" });
    t.field("_max", { type: "NestedStringNullableFilter" });
  },
});

export const EnumUserRoleWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "EnumUserRoleWithAggregatesFilter",
  definition(t) {
    t.field("equals", { type: "UserRole" });
    t.list.field("in", { type: "UserRole" });
    t.list.field("notIn", { type: "UserRole" });
    t.field("not", { type: "NestedEnumUserRoleWithAggregatesFilter" });
    t.field("_count", { type: "NestedIntFilter" });
    t.field("_min", { type: "NestedEnumUserRoleFilter" });
    t.field("_max", { type: "NestedEnumUserRoleFilter" });
  },
});

export const EnumActionFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "EnumActionFilter",
  definition(t) {
    t.field("equals", { type: "Action" });
    t.list.field("in", { type: "Action" });
    t.list.field("notIn", { type: "Action" });
    t.field("not", { type: "NestedEnumActionFilter" });
  },
});

export const IntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "IntNullableFilter",
  definition(t) {
    t.field("equals", { type: "Int" });
    t.list.field("in", { type: "Int" });
    t.list.field("notIn", { type: "Int" });
    t.field("lt", { type: "Int" });
    t.field("lte", { type: "Int" });
    t.field("gt", { type: "Int" });
    t.field("gte", { type: "Int" });
    t.field("not", { type: "NestedIntNullableFilter" });
  },
});

export const ResourceRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceRelationFilter",
  definition(t) {
    t.field("is", { type: "ResourceWhereInput" });
    t.field("isNot", { type: "ResourceWhereInput" });
  },
});

export const UserNullableRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserNullableRelationFilter",
  definition(t) {
    t.field("is", { type: "UserWhereInput" });
    t.field("isNot", { type: "UserWhereInput" });
  },
});

export const PolicyCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyCountOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("uuid", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("updatedAt", { type: "SortOrder" });
    t.field("resourceId", { type: "SortOrder" });
    t.field("action", { type: "SortOrder" });
    t.field("userId", { type: "SortOrder" });
  },
});

export const PolicyAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyAvgOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("resourceId", { type: "SortOrder" });
    t.field("userId", { type: "SortOrder" });
  },
});

export const PolicyMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyMaxOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("uuid", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("updatedAt", { type: "SortOrder" });
    t.field("resourceId", { type: "SortOrder" });
    t.field("action", { type: "SortOrder" });
    t.field("userId", { type: "SortOrder" });
  },
});

export const PolicyMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyMinOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("uuid", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("updatedAt", { type: "SortOrder" });
    t.field("resourceId", { type: "SortOrder" });
    t.field("action", { type: "SortOrder" });
    t.field("userId", { type: "SortOrder" });
  },
});

export const PolicySumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicySumOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("resourceId", { type: "SortOrder" });
    t.field("userId", { type: "SortOrder" });
  },
});

export const EnumActionWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "EnumActionWithAggregatesFilter",
  definition(t) {
    t.field("equals", { type: "Action" });
    t.list.field("in", { type: "Action" });
    t.list.field("notIn", { type: "Action" });
    t.field("not", { type: "NestedEnumActionWithAggregatesFilter" });
    t.field("_count", { type: "NestedIntFilter" });
    t.field("_min", { type: "NestedEnumActionFilter" });
    t.field("_max", { type: "NestedEnumActionFilter" });
  },
});

export const IntNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "IntNullableWithAggregatesFilter",
  definition(t) {
    t.field("equals", { type: "Int" });
    t.list.field("in", { type: "Int" });
    t.list.field("notIn", { type: "Int" });
    t.field("lt", { type: "Int" });
    t.field("lte", { type: "Int" });
    t.field("gt", { type: "Int" });
    t.field("gte", { type: "Int" });
    t.field("not", { type: "NestedIntNullableWithAggregatesFilter" });
    t.field("_count", { type: "NestedIntNullableFilter" });
    t.field("_avg", { type: "NestedFloatNullableFilter" });
    t.field("_sum", { type: "NestedIntNullableFilter" });
    t.field("_min", { type: "NestedIntNullableFilter" });
    t.field("_max", { type: "NestedIntNullableFilter" });
  },
});

export const ResourceCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceCountOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("uuid", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("updatedAt", { type: "SortOrder" });
  },
});

export const ResourceAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceAvgOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
  },
});

export const ResourceMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceMaxOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("uuid", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("updatedAt", { type: "SortOrder" });
  },
});

export const ResourceMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceMinOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("uuid", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("updatedAt", { type: "SortOrder" });
  },
});

export const ResourceSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceSumOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
  },
});

export const EnumAccessTypeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "EnumAccessTypeFilter",
  definition(t) {
    t.field("equals", { type: "AccessType" });
    t.list.field("in", { type: "AccessType" });
    t.list.field("notIn", { type: "AccessType" });
    t.field("not", { type: "NestedEnumAccessTypeFilter" });
  },
});

export const AccessLogCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogCountOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("userId", { type: "SortOrder" });
    t.field("email", { type: "SortOrder" });
    t.field("message", { type: "SortOrder" });
    t.field("accessType", { type: "SortOrder" });
  },
});

export const AccessLogAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogAvgOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
  },
});

export const AccessLogMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogMaxOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("userId", { type: "SortOrder" });
    t.field("email", { type: "SortOrder" });
    t.field("message", { type: "SortOrder" });
    t.field("accessType", { type: "SortOrder" });
  },
});

export const AccessLogMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogMinOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("userId", { type: "SortOrder" });
    t.field("email", { type: "SortOrder" });
    t.field("message", { type: "SortOrder" });
    t.field("accessType", { type: "SortOrder" });
  },
});

export const AccessLogSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogSumOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
  },
});

export const EnumAccessTypeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "EnumAccessTypeWithAggregatesFilter",
  definition(t) {
    t.field("equals", { type: "AccessType" });
    t.list.field("in", { type: "AccessType" });
    t.list.field("notIn", { type: "AccessType" });
    t.field("not", { type: "NestedEnumAccessTypeWithAggregatesFilter" });
    t.field("_count", { type: "NestedIntFilter" });
    t.field("_min", { type: "NestedEnumAccessTypeFilter" });
    t.field("_max", { type: "NestedEnumAccessTypeFilter" });
  },
});

export const JsonFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "JsonFilter",
  definition(t) {
    t.field("equals", { type: "Json" });
    t.list.field("path", { type: "String" });
    t.field("string_contains", { type: "String" });
    t.field("string_starts_with", { type: "String" });
    t.field("string_ends_with", { type: "String" });
    t.field("array_contains", { type: "Json" });
    t.field("array_starts_with", { type: "Json" });
    t.field("array_ends_with", { type: "Json" });
    t.field("lt", { type: "Json" });
    t.field("lte", { type: "Json" });
    t.field("gt", { type: "Json" });
    t.field("gte", { type: "Json" });
    t.field("not", { type: "Json" });
  },
});

export const AdminSchemaCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AdminSchemaCountOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("updatedAt", { type: "SortOrder" });
    t.field("schema", { type: "SortOrder" });
  },
});

export const AdminSchemaAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AdminSchemaAvgOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
  },
});

export const AdminSchemaMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AdminSchemaMaxOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("updatedAt", { type: "SortOrder" });
  },
});

export const AdminSchemaMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AdminSchemaMinOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
    t.field("createdAt", { type: "SortOrder" });
    t.field("updatedAt", { type: "SortOrder" });
  },
});

export const AdminSchemaSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AdminSchemaSumOrderByAggregateInput",
  definition(t) {
    t.field("id", { type: "SortOrder" });
  },
});

export const JsonWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "JsonWithAggregatesFilter",
  definition(t) {
    t.field("equals", { type: "Json" });
    t.list.field("path", { type: "String" });
    t.field("string_contains", { type: "String" });
    t.field("string_starts_with", { type: "String" });
    t.field("string_ends_with", { type: "String" });
    t.field("array_contains", { type: "Json" });
    t.field("array_starts_with", { type: "Json" });
    t.field("array_ends_with", { type: "Json" });
    t.field("lt", { type: "Json" });
    t.field("lte", { type: "Json" });
    t.field("gt", { type: "Json" });
    t.field("gte", { type: "Json" });
    t.field("not", { type: "Json" });
    t.field("_count", { type: "NestedIntFilter" });
    t.field("_min", { type: "NestedJsonFilter" });
    t.field("_max", { type: "NestedJsonFilter" });
  },
});

export const UserCreatepermissionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserCreatepermissionInput",
  definition(t) {
    t.nonNull.field("set", { type: "UserPermission" });
  },
});

export const AccessLogCreateNestedManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogCreateNestedManyWithoutUserInput",
  definition(t) {
    t.list.field("create", { type: "AccessLogCreateWithoutUserInput" });
    t.list.field("connectOrCreate", {
      type: "AccessLogCreateOrConnectWithoutUserInput",
    });
    t.field("createMany", { type: "AccessLogCreateManyUserInputEnvelope" });
    t.list.field("connect", { type: "AccessLogWhereUniqueInput" });
  },
});

export const PolicyCreateNestedManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyCreateNestedManyWithoutUserInput",
  definition(t) {
    t.list.field("create", { type: "PolicyCreateWithoutUserInput" });
    t.list.field("connectOrCreate", {
      type: "PolicyCreateOrConnectWithoutUserInput",
    });
    t.field("createMany", { type: "PolicyCreateManyUserInputEnvelope" });
    t.list.field("connect", { type: "PolicyWhereUniqueInput" });
  },
});

export const AccessLogUncheckedCreateNestedManyWithoutUserInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: "AccessLogUncheckedCreateNestedManyWithoutUserInput",
    definition(t) {
      t.list.field("create", { type: "AccessLogCreateWithoutUserInput" });
      t.list.field("connectOrCreate", {
        type: "AccessLogCreateOrConnectWithoutUserInput",
      });
      t.field("createMany", { type: "AccessLogCreateManyUserInputEnvelope" });
      t.list.field("connect", { type: "AccessLogWhereUniqueInput" });
    },
  });

export const PolicyUncheckedCreateNestedManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUncheckedCreateNestedManyWithoutUserInput",
  definition(t) {
    t.list.field("create", { type: "PolicyCreateWithoutUserInput" });
    t.list.field("connectOrCreate", {
      type: "PolicyCreateOrConnectWithoutUserInput",
    });
    t.field("createMany", { type: "PolicyCreateManyUserInputEnvelope" });
    t.list.field("connect", { type: "PolicyWhereUniqueInput" });
  },
});

export const StringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "StringFieldUpdateOperationsInput",
  definition(t) {
    t.field("set", { type: "String" });
  },
});

export const DateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "DateTimeFieldUpdateOperationsInput",
  definition(t) {
    t.field("set", { type: "DateTime" });
  },
});

export const NullableStringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NullableStringFieldUpdateOperationsInput",
  definition(t) {
    t.field("set", { type: "String" });
  },
});

export const EnumUserRoleFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "EnumUserRoleFieldUpdateOperationsInput",
  definition(t) {
    t.field("set", { type: "UserRole" });
  },
});

export const UserUpdatepermissionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserUpdatepermissionInput",
  definition(t) {
    t.list.field("set", { type: "UserPermission" });
    t.list.field("push", { type: "UserPermission" });
  },
});

export const AccessLogUpdateManyWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogUpdateManyWithoutUserNestedInput",
  definition(t) {
    t.list.field("create", { type: "AccessLogCreateWithoutUserInput" });
    t.list.field("connectOrCreate", {
      type: "AccessLogCreateOrConnectWithoutUserInput",
    });
    t.list.field("upsert", {
      type: "AccessLogUpsertWithWhereUniqueWithoutUserInput",
    });
    t.field("createMany", { type: "AccessLogCreateManyUserInputEnvelope" });
    t.list.field("set", { type: "AccessLogWhereUniqueInput" });
    t.list.field("disconnect", { type: "AccessLogWhereUniqueInput" });
    t.list.field("delete", { type: "AccessLogWhereUniqueInput" });
    t.list.field("connect", { type: "AccessLogWhereUniqueInput" });
    t.list.field("update", {
      type: "AccessLogUpdateWithWhereUniqueWithoutUserInput",
    });
    t.list.field("updateMany", {
      type: "AccessLogUpdateManyWithWhereWithoutUserInput",
    });
    t.list.field("deleteMany", { type: "AccessLogScalarWhereInput" });
  },
});

export const PolicyUpdateManyWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUpdateManyWithoutUserNestedInput",
  definition(t) {
    t.list.field("create", { type: "PolicyCreateWithoutUserInput" });
    t.list.field("connectOrCreate", {
      type: "PolicyCreateOrConnectWithoutUserInput",
    });
    t.list.field("upsert", {
      type: "PolicyUpsertWithWhereUniqueWithoutUserInput",
    });
    t.field("createMany", { type: "PolicyCreateManyUserInputEnvelope" });
    t.list.field("set", { type: "PolicyWhereUniqueInput" });
    t.list.field("disconnect", { type: "PolicyWhereUniqueInput" });
    t.list.field("delete", { type: "PolicyWhereUniqueInput" });
    t.list.field("connect", { type: "PolicyWhereUniqueInput" });
    t.list.field("update", {
      type: "PolicyUpdateWithWhereUniqueWithoutUserInput",
    });
    t.list.field("updateMany", {
      type: "PolicyUpdateManyWithWhereWithoutUserInput",
    });
    t.list.field("deleteMany", { type: "PolicyScalarWhereInput" });
  },
});

export const IntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "IntFieldUpdateOperationsInput",
  definition(t) {
    t.field("set", { type: "Int" });
    t.field("increment", { type: "Int" });
    t.field("decrement", { type: "Int" });
    t.field("multiply", { type: "Int" });
    t.field("divide", { type: "Int" });
  },
});

export const AccessLogUncheckedUpdateManyWithoutUserNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: "AccessLogUncheckedUpdateManyWithoutUserNestedInput",
    definition(t) {
      t.list.field("create", { type: "AccessLogCreateWithoutUserInput" });
      t.list.field("connectOrCreate", {
        type: "AccessLogCreateOrConnectWithoutUserInput",
      });
      t.list.field("upsert", {
        type: "AccessLogUpsertWithWhereUniqueWithoutUserInput",
      });
      t.field("createMany", { type: "AccessLogCreateManyUserInputEnvelope" });
      t.list.field("set", { type: "AccessLogWhereUniqueInput" });
      t.list.field("disconnect", { type: "AccessLogWhereUniqueInput" });
      t.list.field("delete", { type: "AccessLogWhereUniqueInput" });
      t.list.field("connect", { type: "AccessLogWhereUniqueInput" });
      t.list.field("update", {
        type: "AccessLogUpdateWithWhereUniqueWithoutUserInput",
      });
      t.list.field("updateMany", {
        type: "AccessLogUpdateManyWithWhereWithoutUserInput",
      });
      t.list.field("deleteMany", { type: "AccessLogScalarWhereInput" });
    },
  });

export const PolicyUncheckedUpdateManyWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUncheckedUpdateManyWithoutUserNestedInput",
  definition(t) {
    t.list.field("create", { type: "PolicyCreateWithoutUserInput" });
    t.list.field("connectOrCreate", {
      type: "PolicyCreateOrConnectWithoutUserInput",
    });
    t.list.field("upsert", {
      type: "PolicyUpsertWithWhereUniqueWithoutUserInput",
    });
    t.field("createMany", { type: "PolicyCreateManyUserInputEnvelope" });
    t.list.field("set", { type: "PolicyWhereUniqueInput" });
    t.list.field("disconnect", { type: "PolicyWhereUniqueInput" });
    t.list.field("delete", { type: "PolicyWhereUniqueInput" });
    t.list.field("connect", { type: "PolicyWhereUniqueInput" });
    t.list.field("update", {
      type: "PolicyUpdateWithWhereUniqueWithoutUserInput",
    });
    t.list.field("updateMany", {
      type: "PolicyUpdateManyWithWhereWithoutUserInput",
    });
    t.list.field("deleteMany", { type: "PolicyScalarWhereInput" });
  },
});

export const ResourceCreateNestedOneWithoutPoliciesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceCreateNestedOneWithoutPoliciesInput",
  definition(t) {
    t.field("create", { type: "ResourceCreateWithoutPoliciesInput" });
    t.field("connectOrCreate", {
      type: "ResourceCreateOrConnectWithoutPoliciesInput",
    });
    t.field("connect", { type: "ResourceWhereUniqueInput" });
  },
});

export const UserCreateNestedOneWithoutPolicyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserCreateNestedOneWithoutPolicyInput",
  definition(t) {
    t.field("create", { type: "UserCreateWithoutPolicyInput" });
    t.field("connectOrCreate", {
      type: "UserCreateOrConnectWithoutPolicyInput",
    });
    t.field("connect", { type: "UserWhereUniqueInput" });
  },
});

export const EnumActionFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "EnumActionFieldUpdateOperationsInput",
  definition(t) {
    t.field("set", { type: "Action" });
  },
});

export const ResourceUpdateOneRequiredWithoutPoliciesNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: "ResourceUpdateOneRequiredWithoutPoliciesNestedInput",
    definition(t) {
      t.field("create", { type: "ResourceCreateWithoutPoliciesInput" });
      t.field("connectOrCreate", {
        type: "ResourceCreateOrConnectWithoutPoliciesInput",
      });
      t.field("upsert", { type: "ResourceUpsertWithoutPoliciesInput" });
      t.field("connect", { type: "ResourceWhereUniqueInput" });
      t.field("update", {
        type: "ResourceUpdateToOneWithWhereWithoutPoliciesInput",
      });
    },
  });

export const UserUpdateOneWithoutPolicyNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserUpdateOneWithoutPolicyNestedInput",
  definition(t) {
    t.field("create", { type: "UserCreateWithoutPolicyInput" });
    t.field("connectOrCreate", {
      type: "UserCreateOrConnectWithoutPolicyInput",
    });
    t.field("upsert", { type: "UserUpsertWithoutPolicyInput" });
    t.field("disconnect", { type: "UserWhereInput" });
    t.field("delete", { type: "UserWhereInput" });
    t.field("connect", { type: "UserWhereUniqueInput" });
    t.field("update", { type: "UserUpdateToOneWithWhereWithoutPolicyInput" });
  },
});

export const NullableIntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NullableIntFieldUpdateOperationsInput",
  definition(t) {
    t.field("set", { type: "Int" });
    t.field("increment", { type: "Int" });
    t.field("decrement", { type: "Int" });
    t.field("multiply", { type: "Int" });
    t.field("divide", { type: "Int" });
  },
});

export const PolicyCreateNestedManyWithoutResourceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyCreateNestedManyWithoutResourceInput",
  definition(t) {
    t.list.field("create", { type: "PolicyCreateWithoutResourceInput" });
    t.list.field("connectOrCreate", {
      type: "PolicyCreateOrConnectWithoutResourceInput",
    });
    t.field("createMany", { type: "PolicyCreateManyResourceInputEnvelope" });
    t.list.field("connect", { type: "PolicyWhereUniqueInput" });
  },
});

export const PolicyUncheckedCreateNestedManyWithoutResourceInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: "PolicyUncheckedCreateNestedManyWithoutResourceInput",
    definition(t) {
      t.list.field("create", { type: "PolicyCreateWithoutResourceInput" });
      t.list.field("connectOrCreate", {
        type: "PolicyCreateOrConnectWithoutResourceInput",
      });
      t.field("createMany", { type: "PolicyCreateManyResourceInputEnvelope" });
      t.list.field("connect", { type: "PolicyWhereUniqueInput" });
    },
  });

export const PolicyUpdateManyWithoutResourceNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUpdateManyWithoutResourceNestedInput",
  definition(t) {
    t.list.field("create", { type: "PolicyCreateWithoutResourceInput" });
    t.list.field("connectOrCreate", {
      type: "PolicyCreateOrConnectWithoutResourceInput",
    });
    t.list.field("upsert", {
      type: "PolicyUpsertWithWhereUniqueWithoutResourceInput",
    });
    t.field("createMany", { type: "PolicyCreateManyResourceInputEnvelope" });
    t.list.field("set", { type: "PolicyWhereUniqueInput" });
    t.list.field("disconnect", { type: "PolicyWhereUniqueInput" });
    t.list.field("delete", { type: "PolicyWhereUniqueInput" });
    t.list.field("connect", { type: "PolicyWhereUniqueInput" });
    t.list.field("update", {
      type: "PolicyUpdateWithWhereUniqueWithoutResourceInput",
    });
    t.list.field("updateMany", {
      type: "PolicyUpdateManyWithWhereWithoutResourceInput",
    });
    t.list.field("deleteMany", { type: "PolicyScalarWhereInput" });
  },
});

export const PolicyUncheckedUpdateManyWithoutResourceNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: "PolicyUncheckedUpdateManyWithoutResourceNestedInput",
    definition(t) {
      t.list.field("create", { type: "PolicyCreateWithoutResourceInput" });
      t.list.field("connectOrCreate", {
        type: "PolicyCreateOrConnectWithoutResourceInput",
      });
      t.list.field("upsert", {
        type: "PolicyUpsertWithWhereUniqueWithoutResourceInput",
      });
      t.field("createMany", { type: "PolicyCreateManyResourceInputEnvelope" });
      t.list.field("set", { type: "PolicyWhereUniqueInput" });
      t.list.field("disconnect", { type: "PolicyWhereUniqueInput" });
      t.list.field("delete", { type: "PolicyWhereUniqueInput" });
      t.list.field("connect", { type: "PolicyWhereUniqueInput" });
      t.list.field("update", {
        type: "PolicyUpdateWithWhereUniqueWithoutResourceInput",
      });
      t.list.field("updateMany", {
        type: "PolicyUpdateManyWithWhereWithoutResourceInput",
      });
      t.list.field("deleteMany", { type: "PolicyScalarWhereInput" });
    },
  });

export const UserCreateNestedOneWithoutAccessLogInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserCreateNestedOneWithoutAccessLogInput",
  definition(t) {
    t.field("create", { type: "UserCreateWithoutAccessLogInput" });
    t.field("connectOrCreate", {
      type: "UserCreateOrConnectWithoutAccessLogInput",
    });
    t.field("connect", { type: "UserWhereUniqueInput" });
  },
});

export const EnumAccessTypeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "EnumAccessTypeFieldUpdateOperationsInput",
  definition(t) {
    t.field("set", { type: "AccessType" });
  },
});

export const UserUpdateOneWithoutAccessLogNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserUpdateOneWithoutAccessLogNestedInput",
  definition(t) {
    t.field("create", { type: "UserCreateWithoutAccessLogInput" });
    t.field("connectOrCreate", {
      type: "UserCreateOrConnectWithoutAccessLogInput",
    });
    t.field("upsert", { type: "UserUpsertWithoutAccessLogInput" });
    t.field("disconnect", { type: "UserWhereInput" });
    t.field("delete", { type: "UserWhereInput" });
    t.field("connect", { type: "UserWhereUniqueInput" });
    t.field("update", {
      type: "UserUpdateToOneWithWhereWithoutAccessLogInput",
    });
  },
});

export const NestedIntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NestedIntFilter",
  definition(t) {
    t.field("equals", { type: "Int" });
    t.list.field("in", { type: "Int" });
    t.list.field("notIn", { type: "Int" });
    t.field("lt", { type: "Int" });
    t.field("lte", { type: "Int" });
    t.field("gt", { type: "Int" });
    t.field("gte", { type: "Int" });
    t.field("not", { type: "NestedIntFilter" });
  },
});

export const NestedStringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NestedStringFilter",
  definition(t) {
    t.field("equals", { type: "String" });
    t.list.field("in", { type: "String" });
    t.list.field("notIn", { type: "String" });
    t.field("lt", { type: "String" });
    t.field("lte", { type: "String" });
    t.field("gt", { type: "String" });
    t.field("gte", { type: "String" });
    t.field("contains", { type: "String" });
    t.field("startsWith", { type: "String" });
    t.field("endsWith", { type: "String" });
    t.field("not", { type: "NestedStringFilter" });
  },
});

export const NestedDateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NestedDateTimeFilter",
  definition(t) {
    t.field("equals", { type: "DateTime" });
    t.list.field("in", { type: "DateTime" });
    t.list.field("notIn", { type: "DateTime" });
    t.field("lt", { type: "DateTime" });
    t.field("lte", { type: "DateTime" });
    t.field("gt", { type: "DateTime" });
    t.field("gte", { type: "DateTime" });
    t.field("not", { type: "NestedDateTimeFilter" });
  },
});

export const NestedStringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NestedStringNullableFilter",
  definition(t) {
    t.field("equals", { type: "String" });
    t.list.field("in", { type: "String" });
    t.list.field("notIn", { type: "String" });
    t.field("lt", { type: "String" });
    t.field("lte", { type: "String" });
    t.field("gt", { type: "String" });
    t.field("gte", { type: "String" });
    t.field("contains", { type: "String" });
    t.field("startsWith", { type: "String" });
    t.field("endsWith", { type: "String" });
    t.field("not", { type: "NestedStringNullableFilter" });
  },
});

export const NestedEnumUserRoleFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NestedEnumUserRoleFilter",
  definition(t) {
    t.field("equals", { type: "UserRole" });
    t.list.field("in", { type: "UserRole" });
    t.list.field("notIn", { type: "UserRole" });
    t.field("not", { type: "NestedEnumUserRoleFilter" });
  },
});

export const NestedIntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NestedIntWithAggregatesFilter",
  definition(t) {
    t.field("equals", { type: "Int" });
    t.list.field("in", { type: "Int" });
    t.list.field("notIn", { type: "Int" });
    t.field("lt", { type: "Int" });
    t.field("lte", { type: "Int" });
    t.field("gt", { type: "Int" });
    t.field("gte", { type: "Int" });
    t.field("not", { type: "NestedIntWithAggregatesFilter" });
    t.field("_count", { type: "NestedIntFilter" });
    t.field("_avg", { type: "NestedFloatFilter" });
    t.field("_sum", { type: "NestedIntFilter" });
    t.field("_min", { type: "NestedIntFilter" });
    t.field("_max", { type: "NestedIntFilter" });
  },
});

export const NestedFloatFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NestedFloatFilter",
  definition(t) {
    t.field("equals", { type: "Float" });
    t.list.field("in", { type: "Float" });
    t.list.field("notIn", { type: "Float" });
    t.field("lt", { type: "Float" });
    t.field("lte", { type: "Float" });
    t.field("gt", { type: "Float" });
    t.field("gte", { type: "Float" });
    t.field("not", { type: "NestedFloatFilter" });
  },
});

export const NestedStringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NestedStringWithAggregatesFilter",
  definition(t) {
    t.field("equals", { type: "String" });
    t.list.field("in", { type: "String" });
    t.list.field("notIn", { type: "String" });
    t.field("lt", { type: "String" });
    t.field("lte", { type: "String" });
    t.field("gt", { type: "String" });
    t.field("gte", { type: "String" });
    t.field("contains", { type: "String" });
    t.field("startsWith", { type: "String" });
    t.field("endsWith", { type: "String" });
    t.field("not", { type: "NestedStringWithAggregatesFilter" });
    t.field("_count", { type: "NestedIntFilter" });
    t.field("_min", { type: "NestedStringFilter" });
    t.field("_max", { type: "NestedStringFilter" });
  },
});

export const NestedDateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NestedDateTimeWithAggregatesFilter",
  definition(t) {
    t.field("equals", { type: "DateTime" });
    t.list.field("in", { type: "DateTime" });
    t.list.field("notIn", { type: "DateTime" });
    t.field("lt", { type: "DateTime" });
    t.field("lte", { type: "DateTime" });
    t.field("gt", { type: "DateTime" });
    t.field("gte", { type: "DateTime" });
    t.field("not", { type: "NestedDateTimeWithAggregatesFilter" });
    t.field("_count", { type: "NestedIntFilter" });
    t.field("_min", { type: "NestedDateTimeFilter" });
    t.field("_max", { type: "NestedDateTimeFilter" });
  },
});

export const NestedStringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NestedStringNullableWithAggregatesFilter",
  definition(t) {
    t.field("equals", { type: "String" });
    t.list.field("in", { type: "String" });
    t.list.field("notIn", { type: "String" });
    t.field("lt", { type: "String" });
    t.field("lte", { type: "String" });
    t.field("gt", { type: "String" });
    t.field("gte", { type: "String" });
    t.field("contains", { type: "String" });
    t.field("startsWith", { type: "String" });
    t.field("endsWith", { type: "String" });
    t.field("not", { type: "NestedStringNullableWithAggregatesFilter" });
    t.field("_count", { type: "NestedIntNullableFilter" });
    t.field("_min", { type: "NestedStringNullableFilter" });
    t.field("_max", { type: "NestedStringNullableFilter" });
  },
});

export const NestedIntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NestedIntNullableFilter",
  definition(t) {
    t.field("equals", { type: "Int" });
    t.list.field("in", { type: "Int" });
    t.list.field("notIn", { type: "Int" });
    t.field("lt", { type: "Int" });
    t.field("lte", { type: "Int" });
    t.field("gt", { type: "Int" });
    t.field("gte", { type: "Int" });
    t.field("not", { type: "NestedIntNullableFilter" });
  },
});

export const NestedEnumUserRoleWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NestedEnumUserRoleWithAggregatesFilter",
  definition(t) {
    t.field("equals", { type: "UserRole" });
    t.list.field("in", { type: "UserRole" });
    t.list.field("notIn", { type: "UserRole" });
    t.field("not", { type: "NestedEnumUserRoleWithAggregatesFilter" });
    t.field("_count", { type: "NestedIntFilter" });
    t.field("_min", { type: "NestedEnumUserRoleFilter" });
    t.field("_max", { type: "NestedEnumUserRoleFilter" });
  },
});

export const NestedEnumActionFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NestedEnumActionFilter",
  definition(t) {
    t.field("equals", { type: "Action" });
    t.list.field("in", { type: "Action" });
    t.list.field("notIn", { type: "Action" });
    t.field("not", { type: "NestedEnumActionFilter" });
  },
});

export const NestedEnumActionWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NestedEnumActionWithAggregatesFilter",
  definition(t) {
    t.field("equals", { type: "Action" });
    t.list.field("in", { type: "Action" });
    t.list.field("notIn", { type: "Action" });
    t.field("not", { type: "NestedEnumActionWithAggregatesFilter" });
    t.field("_count", { type: "NestedIntFilter" });
    t.field("_min", { type: "NestedEnumActionFilter" });
    t.field("_max", { type: "NestedEnumActionFilter" });
  },
});

export const NestedIntNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NestedIntNullableWithAggregatesFilter",
  definition(t) {
    t.field("equals", { type: "Int" });
    t.list.field("in", { type: "Int" });
    t.list.field("notIn", { type: "Int" });
    t.field("lt", { type: "Int" });
    t.field("lte", { type: "Int" });
    t.field("gt", { type: "Int" });
    t.field("gte", { type: "Int" });
    t.field("not", { type: "NestedIntNullableWithAggregatesFilter" });
    t.field("_count", { type: "NestedIntNullableFilter" });
    t.field("_avg", { type: "NestedFloatNullableFilter" });
    t.field("_sum", { type: "NestedIntNullableFilter" });
    t.field("_min", { type: "NestedIntNullableFilter" });
    t.field("_max", { type: "NestedIntNullableFilter" });
  },
});

export const NestedFloatNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NestedFloatNullableFilter",
  definition(t) {
    t.field("equals", { type: "Float" });
    t.list.field("in", { type: "Float" });
    t.list.field("notIn", { type: "Float" });
    t.field("lt", { type: "Float" });
    t.field("lte", { type: "Float" });
    t.field("gt", { type: "Float" });
    t.field("gte", { type: "Float" });
    t.field("not", { type: "NestedFloatNullableFilter" });
  },
});

export const NestedEnumAccessTypeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NestedEnumAccessTypeFilter",
  definition(t) {
    t.field("equals", { type: "AccessType" });
    t.list.field("in", { type: "AccessType" });
    t.list.field("notIn", { type: "AccessType" });
    t.field("not", { type: "NestedEnumAccessTypeFilter" });
  },
});

export const NestedEnumAccessTypeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NestedEnumAccessTypeWithAggregatesFilter",
  definition(t) {
    t.field("equals", { type: "AccessType" });
    t.list.field("in", { type: "AccessType" });
    t.list.field("notIn", { type: "AccessType" });
    t.field("not", { type: "NestedEnumAccessTypeWithAggregatesFilter" });
    t.field("_count", { type: "NestedIntFilter" });
    t.field("_min", { type: "NestedEnumAccessTypeFilter" });
    t.field("_max", { type: "NestedEnumAccessTypeFilter" });
  },
});

export const NestedJsonFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "NestedJsonFilter",
  definition(t) {
    t.field("equals", { type: "Json" });
    t.list.field("path", { type: "String" });
    t.field("string_contains", { type: "String" });
    t.field("string_starts_with", { type: "String" });
    t.field("string_ends_with", { type: "String" });
    t.field("array_contains", { type: "Json" });
    t.field("array_starts_with", { type: "Json" });
    t.field("array_ends_with", { type: "Json" });
    t.field("lt", { type: "Json" });
    t.field("lte", { type: "Json" });
    t.field("gt", { type: "Json" });
    t.field("gte", { type: "Json" });
    t.field("not", { type: "Json" });
  },
});

export const AccessLogCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogCreateWithoutUserInput",
  definition(t) {
    t.field("createdAt", { type: "DateTime" });
    t.field("email", { type: "String" });
    t.field("message", { type: "String" });
    t.nonNull.field("accessType", { type: "AccessType" });
  },
});

export const AccessLogUncheckedCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogUncheckedCreateWithoutUserInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("createdAt", { type: "DateTime" });
    t.field("email", { type: "String" });
    t.field("message", { type: "String" });
    t.nonNull.field("accessType", { type: "AccessType" });
  },
});

export const AccessLogCreateOrConnectWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogCreateOrConnectWithoutUserInput",
  definition(t) {
    t.nonNull.field("where", { type: "AccessLogWhereUniqueInput" });
    t.nonNull.field("create", { type: "AccessLogCreateWithoutUserInput" });
  },
});

export const AccessLogCreateManyUserInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogCreateManyUserInputEnvelope",
  definition(t) {
    t.nonNull.field("data", { type: "AccessLogCreateManyUserInput" });
    t.field("skipDuplicates", { type: "Boolean" });
  },
});

export const PolicyCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyCreateWithoutUserInput",
  definition(t) {
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.nonNull.field("action", { type: "Action" });
    t.nonNull.field("resource", {
      type: "ResourceCreateNestedOneWithoutPoliciesInput",
    });
  },
});

export const PolicyUncheckedCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUncheckedCreateWithoutUserInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.nonNull.field("resourceId", { type: "Int" });
    t.nonNull.field("action", { type: "Action" });
  },
});

export const PolicyCreateOrConnectWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyCreateOrConnectWithoutUserInput",
  definition(t) {
    t.nonNull.field("where", { type: "PolicyWhereUniqueInput" });
    t.nonNull.field("create", { type: "PolicyCreateWithoutUserInput" });
  },
});

export const PolicyCreateManyUserInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyCreateManyUserInputEnvelope",
  definition(t) {
    t.nonNull.field("data", { type: "PolicyCreateManyUserInput" });
    t.field("skipDuplicates", { type: "Boolean" });
  },
});

export const AccessLogUpsertWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogUpsertWithWhereUniqueWithoutUserInput",
  definition(t) {
    t.nonNull.field("where", { type: "AccessLogWhereUniqueInput" });
    t.nonNull.field("update", { type: "AccessLogUpdateWithoutUserInput" });
    t.nonNull.field("create", { type: "AccessLogCreateWithoutUserInput" });
  },
});

export const AccessLogUpdateWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogUpdateWithWhereUniqueWithoutUserInput",
  definition(t) {
    t.nonNull.field("where", { type: "AccessLogWhereUniqueInput" });
    t.nonNull.field("data", { type: "AccessLogUpdateWithoutUserInput" });
  },
});

export const AccessLogUpdateManyWithWhereWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogUpdateManyWithWhereWithoutUserInput",
  definition(t) {
    t.nonNull.field("where", { type: "AccessLogScalarWhereInput" });
    t.nonNull.field("data", { type: "AccessLogUpdateManyMutationInput" });
  },
});

export const AccessLogScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogScalarWhereInput",
  definition(t) {
    t.list.field("AND", { type: "AccessLogScalarWhereInput" });
    t.list.field("OR", { type: "AccessLogScalarWhereInput" });
    t.list.field("NOT", { type: "AccessLogScalarWhereInput" });
    t.field("id", { type: "IntFilter" });
    t.field("createdAt", { type: "DateTimeFilter" });
    t.field("userId", { type: "StringNullableFilter" });
    t.field("email", { type: "StringNullableFilter" });
    t.field("message", { type: "StringFilter" });
    t.field("accessType", { type: "EnumAccessTypeFilter" });
  },
});

export const PolicyUpsertWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUpsertWithWhereUniqueWithoutUserInput",
  definition(t) {
    t.nonNull.field("where", { type: "PolicyWhereUniqueInput" });
    t.nonNull.field("update", { type: "PolicyUpdateWithoutUserInput" });
    t.nonNull.field("create", { type: "PolicyCreateWithoutUserInput" });
  },
});

export const PolicyUpdateWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUpdateWithWhereUniqueWithoutUserInput",
  definition(t) {
    t.nonNull.field("where", { type: "PolicyWhereUniqueInput" });
    t.nonNull.field("data", { type: "PolicyUpdateWithoutUserInput" });
  },
});

export const PolicyUpdateManyWithWhereWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUpdateManyWithWhereWithoutUserInput",
  definition(t) {
    t.nonNull.field("where", { type: "PolicyScalarWhereInput" });
    t.nonNull.field("data", { type: "PolicyUpdateManyMutationInput" });
  },
});

export const PolicyScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyScalarWhereInput",
  definition(t) {
    t.list.field("AND", { type: "PolicyScalarWhereInput" });
    t.list.field("OR", { type: "PolicyScalarWhereInput" });
    t.list.field("NOT", { type: "PolicyScalarWhereInput" });
    t.field("id", { type: "IntFilter" });
    t.field("uuid", { type: "StringFilter" });
    t.field("createdAt", { type: "DateTimeFilter" });
    t.field("updatedAt", { type: "DateTimeFilter" });
    t.field("resourceId", { type: "IntFilter" });
    t.field("action", { type: "EnumActionFilter" });
    t.field("userId", { type: "IntNullableFilter" });
  },
});

export const ResourceCreateWithoutPoliciesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceCreateWithoutPoliciesInput",
  definition(t) {
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
  },
});

export const ResourceUncheckedCreateWithoutPoliciesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceUncheckedCreateWithoutPoliciesInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
  },
});

export const ResourceCreateOrConnectWithoutPoliciesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceCreateOrConnectWithoutPoliciesInput",
  definition(t) {
    t.nonNull.field("where", { type: "ResourceWhereUniqueInput" });
    t.nonNull.field("create", { type: "ResourceCreateWithoutPoliciesInput" });
  },
});

export const UserCreateWithoutPolicyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserCreateWithoutPolicyInput",
  definition(t) {
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.nonNull.field("email", { type: "String" });
    t.field("name", { type: "String" });
    t.field("phoneNumber", { type: "String" });
    t.field("description", { type: "String" });
    t.field("imgUrl", { type: "String" });
    t.field("role", { type: "UserRole" });
    t.nonNull.field("stUserId", { type: "String" });
    t.list.field("permission", { type: "UserPermission" });
    t.field("AccessLog", { type: "AccessLogCreateNestedManyWithoutUserInput" });
  },
});

export const UserUncheckedCreateWithoutPolicyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserUncheckedCreateWithoutPolicyInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.nonNull.field("email", { type: "String" });
    t.field("name", { type: "String" });
    t.field("phoneNumber", { type: "String" });
    t.field("description", { type: "String" });
    t.field("imgUrl", { type: "String" });
    t.field("role", { type: "UserRole" });
    t.nonNull.field("stUserId", { type: "String" });
    t.list.field("permission", { type: "UserPermission" });
    t.field("AccessLog", {
      type: "AccessLogUncheckedCreateNestedManyWithoutUserInput",
    });
  },
});

export const UserCreateOrConnectWithoutPolicyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserCreateOrConnectWithoutPolicyInput",
  definition(t) {
    t.nonNull.field("where", { type: "UserWhereUniqueInput" });
    t.nonNull.field("create", { type: "UserCreateWithoutPolicyInput" });
  },
});

export const ResourceUpsertWithoutPoliciesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceUpsertWithoutPoliciesInput",
  definition(t) {
    t.nonNull.field("update", { type: "ResourceUpdateWithoutPoliciesInput" });
    t.nonNull.field("create", { type: "ResourceCreateWithoutPoliciesInput" });
    t.field("where", { type: "ResourceWhereInput" });
  },
});

export const ResourceUpdateToOneWithWhereWithoutPoliciesInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: "ResourceUpdateToOneWithWhereWithoutPoliciesInput",
    definition(t) {
      t.field("where", { type: "ResourceWhereInput" });
      t.nonNull.field("data", { type: "ResourceUpdateWithoutPoliciesInput" });
    },
  },
);

export const ResourceUpdateWithoutPoliciesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceUpdateWithoutPoliciesInput",
  definition(t) {
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
  },
});

export const ResourceUncheckedUpdateWithoutPoliciesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "ResourceUncheckedUpdateWithoutPoliciesInput",
  definition(t) {
    t.field("id", { type: "IntFieldUpdateOperationsInput" });
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
  },
});

export const UserUpsertWithoutPolicyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserUpsertWithoutPolicyInput",
  definition(t) {
    t.nonNull.field("update", { type: "UserUpdateWithoutPolicyInput" });
    t.nonNull.field("create", { type: "UserCreateWithoutPolicyInput" });
    t.field("where", { type: "UserWhereInput" });
  },
});

export const UserUpdateToOneWithWhereWithoutPolicyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserUpdateToOneWithWhereWithoutPolicyInput",
  definition(t) {
    t.field("where", { type: "UserWhereInput" });
    t.nonNull.field("data", { type: "UserUpdateWithoutPolicyInput" });
  },
});

export const UserUpdateWithoutPolicyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserUpdateWithoutPolicyInput",
  definition(t) {
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("email", { type: "StringFieldUpdateOperationsInput" });
    t.field("name", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("phoneNumber", {
      type: "NullableStringFieldUpdateOperationsInput",
    });
    t.field("description", {
      type: "NullableStringFieldUpdateOperationsInput",
    });
    t.field("imgUrl", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("role", { type: "EnumUserRoleFieldUpdateOperationsInput" });
    t.field("stUserId", { type: "StringFieldUpdateOperationsInput" });
    t.list.field("permission", { type: "UserPermission" });
    t.field("AccessLog", { type: "AccessLogUpdateManyWithoutUserNestedInput" });
  },
});

export const UserUncheckedUpdateWithoutPolicyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserUncheckedUpdateWithoutPolicyInput",
  definition(t) {
    t.field("id", { type: "IntFieldUpdateOperationsInput" });
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("email", { type: "StringFieldUpdateOperationsInput" });
    t.field("name", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("phoneNumber", {
      type: "NullableStringFieldUpdateOperationsInput",
    });
    t.field("description", {
      type: "NullableStringFieldUpdateOperationsInput",
    });
    t.field("imgUrl", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("role", { type: "EnumUserRoleFieldUpdateOperationsInput" });
    t.field("stUserId", { type: "StringFieldUpdateOperationsInput" });
    t.list.field("permission", { type: "UserPermission" });
    t.field("AccessLog", {
      type: "AccessLogUncheckedUpdateManyWithoutUserNestedInput",
    });
  },
});

export const PolicyCreateWithoutResourceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyCreateWithoutResourceInput",
  definition(t) {
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.nonNull.field("action", { type: "Action" });
    t.field("user", { type: "UserCreateNestedOneWithoutPolicyInput" });
  },
});

export const PolicyUncheckedCreateWithoutResourceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUncheckedCreateWithoutResourceInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.nonNull.field("action", { type: "Action" });
    t.field("userId", { type: "Int" });
  },
});

export const PolicyCreateOrConnectWithoutResourceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyCreateOrConnectWithoutResourceInput",
  definition(t) {
    t.nonNull.field("where", { type: "PolicyWhereUniqueInput" });
    t.nonNull.field("create", { type: "PolicyCreateWithoutResourceInput" });
  },
});

export const PolicyCreateManyResourceInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyCreateManyResourceInputEnvelope",
  definition(t) {
    t.nonNull.field("data", { type: "PolicyCreateManyResourceInput" });
    t.field("skipDuplicates", { type: "Boolean" });
  },
});

export const PolicyUpsertWithWhereUniqueWithoutResourceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUpsertWithWhereUniqueWithoutResourceInput",
  definition(t) {
    t.nonNull.field("where", { type: "PolicyWhereUniqueInput" });
    t.nonNull.field("update", { type: "PolicyUpdateWithoutResourceInput" });
    t.nonNull.field("create", { type: "PolicyCreateWithoutResourceInput" });
  },
});

export const PolicyUpdateWithWhereUniqueWithoutResourceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUpdateWithWhereUniqueWithoutResourceInput",
  definition(t) {
    t.nonNull.field("where", { type: "PolicyWhereUniqueInput" });
    t.nonNull.field("data", { type: "PolicyUpdateWithoutResourceInput" });
  },
});

export const PolicyUpdateManyWithWhereWithoutResourceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUpdateManyWithWhereWithoutResourceInput",
  definition(t) {
    t.nonNull.field("where", { type: "PolicyScalarWhereInput" });
    t.nonNull.field("data", { type: "PolicyUpdateManyMutationInput" });
  },
});

export const UserCreateWithoutAccessLogInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserCreateWithoutAccessLogInput",
  definition(t) {
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.nonNull.field("email", { type: "String" });
    t.field("name", { type: "String" });
    t.field("phoneNumber", { type: "String" });
    t.field("description", { type: "String" });
    t.field("imgUrl", { type: "String" });
    t.field("role", { type: "UserRole" });
    t.nonNull.field("stUserId", { type: "String" });
    t.list.field("permission", { type: "UserPermission" });
    t.field("policy", { type: "PolicyCreateNestedManyWithoutUserInput" });
  },
});

export const UserUncheckedCreateWithoutAccessLogInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserUncheckedCreateWithoutAccessLogInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.nonNull.field("email", { type: "String" });
    t.field("name", { type: "String" });
    t.field("phoneNumber", { type: "String" });
    t.field("description", { type: "String" });
    t.field("imgUrl", { type: "String" });
    t.field("role", { type: "UserRole" });
    t.nonNull.field("stUserId", { type: "String" });
    t.list.field("permission", { type: "UserPermission" });
    t.field("policy", {
      type: "PolicyUncheckedCreateNestedManyWithoutUserInput",
    });
  },
});

export const UserCreateOrConnectWithoutAccessLogInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserCreateOrConnectWithoutAccessLogInput",
  definition(t) {
    t.nonNull.field("where", { type: "UserWhereUniqueInput" });
    t.nonNull.field("create", { type: "UserCreateWithoutAccessLogInput" });
  },
});

export const UserUpsertWithoutAccessLogInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserUpsertWithoutAccessLogInput",
  definition(t) {
    t.nonNull.field("update", { type: "UserUpdateWithoutAccessLogInput" });
    t.nonNull.field("create", { type: "UserCreateWithoutAccessLogInput" });
    t.field("where", { type: "UserWhereInput" });
  },
});

export const UserUpdateToOneWithWhereWithoutAccessLogInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserUpdateToOneWithWhereWithoutAccessLogInput",
  definition(t) {
    t.field("where", { type: "UserWhereInput" });
    t.nonNull.field("data", { type: "UserUpdateWithoutAccessLogInput" });
  },
});

export const UserUpdateWithoutAccessLogInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserUpdateWithoutAccessLogInput",
  definition(t) {
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("email", { type: "StringFieldUpdateOperationsInput" });
    t.field("name", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("phoneNumber", {
      type: "NullableStringFieldUpdateOperationsInput",
    });
    t.field("description", {
      type: "NullableStringFieldUpdateOperationsInput",
    });
    t.field("imgUrl", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("role", { type: "EnumUserRoleFieldUpdateOperationsInput" });
    t.field("stUserId", { type: "StringFieldUpdateOperationsInput" });
    t.list.field("permission", { type: "UserPermission" });
    t.field("policy", { type: "PolicyUpdateManyWithoutUserNestedInput" });
  },
});

export const UserUncheckedUpdateWithoutAccessLogInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "UserUncheckedUpdateWithoutAccessLogInput",
  definition(t) {
    t.field("id", { type: "IntFieldUpdateOperationsInput" });
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("email", { type: "StringFieldUpdateOperationsInput" });
    t.field("name", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("phoneNumber", {
      type: "NullableStringFieldUpdateOperationsInput",
    });
    t.field("description", {
      type: "NullableStringFieldUpdateOperationsInput",
    });
    t.field("imgUrl", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("role", { type: "EnumUserRoleFieldUpdateOperationsInput" });
    t.field("stUserId", { type: "StringFieldUpdateOperationsInput" });
    t.list.field("permission", { type: "UserPermission" });
    t.field("policy", {
      type: "PolicyUncheckedUpdateManyWithoutUserNestedInput",
    });
  },
});

export const AccessLogCreateManyUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogCreateManyUserInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("createdAt", { type: "DateTime" });
    t.field("email", { type: "String" });
    t.field("message", { type: "String" });
    t.nonNull.field("accessType", { type: "AccessType" });
  },
});

export const PolicyCreateManyUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyCreateManyUserInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.nonNull.field("resourceId", { type: "Int" });
    t.nonNull.field("action", { type: "Action" });
  },
});

export const AccessLogUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogUpdateWithoutUserInput",
  definition(t) {
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("email", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("message", { type: "StringFieldUpdateOperationsInput" });
    t.field("accessType", { type: "EnumAccessTypeFieldUpdateOperationsInput" });
  },
});

export const AccessLogUncheckedUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogUncheckedUpdateWithoutUserInput",
  definition(t) {
    t.field("id", { type: "IntFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("email", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("message", { type: "StringFieldUpdateOperationsInput" });
    t.field("accessType", { type: "EnumAccessTypeFieldUpdateOperationsInput" });
  },
});

export const AccessLogUncheckedUpdateManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "AccessLogUncheckedUpdateManyWithoutUserInput",
  definition(t) {
    t.field("id", { type: "IntFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("email", { type: "NullableStringFieldUpdateOperationsInput" });
    t.field("message", { type: "StringFieldUpdateOperationsInput" });
    t.field("accessType", { type: "EnumAccessTypeFieldUpdateOperationsInput" });
  },
});

export const PolicyUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUpdateWithoutUserInput",
  definition(t) {
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("action", { type: "EnumActionFieldUpdateOperationsInput" });
    t.field("resource", {
      type: "ResourceUpdateOneRequiredWithoutPoliciesNestedInput",
    });
  },
});

export const PolicyUncheckedUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUncheckedUpdateWithoutUserInput",
  definition(t) {
    t.field("id", { type: "IntFieldUpdateOperationsInput" });
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("resourceId", { type: "IntFieldUpdateOperationsInput" });
    t.field("action", { type: "EnumActionFieldUpdateOperationsInput" });
  },
});

export const PolicyUncheckedUpdateManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUncheckedUpdateManyWithoutUserInput",
  definition(t) {
    t.field("id", { type: "IntFieldUpdateOperationsInput" });
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("resourceId", { type: "IntFieldUpdateOperationsInput" });
    t.field("action", { type: "EnumActionFieldUpdateOperationsInput" });
  },
});

export const PolicyCreateManyResourceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyCreateManyResourceInput",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.nonNull.field("action", { type: "Action" });
    t.field("userId", { type: "Int" });
  },
});

export const PolicyUpdateWithoutResourceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUpdateWithoutResourceInput",
  definition(t) {
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("action", { type: "EnumActionFieldUpdateOperationsInput" });
    t.field("user", { type: "UserUpdateOneWithoutPolicyNestedInput" });
  },
});

export const PolicyUncheckedUpdateWithoutResourceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUncheckedUpdateWithoutResourceInput",
  definition(t) {
    t.field("id", { type: "IntFieldUpdateOperationsInput" });
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("action", { type: "EnumActionFieldUpdateOperationsInput" });
    t.field("userId", { type: "NullableIntFieldUpdateOperationsInput" });
  },
});

export const PolicyUncheckedUpdateManyWithoutResourceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: "PolicyUncheckedUpdateManyWithoutResourceInput",
  definition(t) {
    t.field("id", { type: "IntFieldUpdateOperationsInput" });
    t.field("uuid", { type: "StringFieldUpdateOperationsInput" });
    t.field("createdAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("updatedAt", { type: "DateTimeFieldUpdateOperationsInput" });
    t.field("action", { type: "EnumActionFieldUpdateOperationsInput" });
    t.field("userId", { type: "NullableIntFieldUpdateOperationsInput" });
  },
});

export const AggregateUser = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "AggregateUser",
  definition(t) {
    t.nullable.field("_count", { type: "UserCountAggregateOutputType" });
    t.nullable.field("_avg", { type: "UserAvgAggregateOutputType" });
    t.nullable.field("_sum", { type: "UserSumAggregateOutputType" });
    t.nullable.field("_min", { type: "UserMinAggregateOutputType" });
    t.nullable.field("_max", { type: "UserMaxAggregateOutputType" });
  },
});

export const UserGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "UserGroupByOutputType",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.field("email", { type: "String" });
    t.nullable.field("name", { type: "String" });
    t.nullable.field("phoneNumber", { type: "String" });
    t.nullable.field("description", { type: "String" });
    t.nullable.field("imgUrl", { type: "String" });
    t.field("role", { type: "UserRole" });
    t.field("stUserId", { type: "String" });
    t.nullable.field("permission", { type: "UserPermission" });
    t.nullable.field("_count", { type: "UserCountAggregateOutputType" });
    t.nullable.field("_avg", { type: "UserAvgAggregateOutputType" });
    t.nullable.field("_sum", { type: "UserSumAggregateOutputType" });
    t.nullable.field("_min", { type: "UserMinAggregateOutputType" });
    t.nullable.field("_max", { type: "UserMaxAggregateOutputType" });
  },
});

export const AggregatePolicy = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "AggregatePolicy",
  definition(t) {
    t.nullable.field("_count", { type: "PolicyCountAggregateOutputType" });
    t.nullable.field("_avg", { type: "PolicyAvgAggregateOutputType" });
    t.nullable.field("_sum", { type: "PolicySumAggregateOutputType" });
    t.nullable.field("_min", { type: "PolicyMinAggregateOutputType" });
    t.nullable.field("_max", { type: "PolicyMaxAggregateOutputType" });
  },
});

export const PolicyGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "PolicyGroupByOutputType",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.field("resourceId", { type: "Int" });
    t.field("action", { type: "Action" });
    t.nullable.field("userId", { type: "Int" });
    t.nullable.field("_count", { type: "PolicyCountAggregateOutputType" });
    t.nullable.field("_avg", { type: "PolicyAvgAggregateOutputType" });
    t.nullable.field("_sum", { type: "PolicySumAggregateOutputType" });
    t.nullable.field("_min", { type: "PolicyMinAggregateOutputType" });
    t.nullable.field("_max", { type: "PolicyMaxAggregateOutputType" });
  },
});

export const AggregateResource = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "AggregateResource",
  definition(t) {
    t.nullable.field("_count", { type: "ResourceCountAggregateOutputType" });
    t.nullable.field("_avg", { type: "ResourceAvgAggregateOutputType" });
    t.nullable.field("_sum", { type: "ResourceSumAggregateOutputType" });
    t.nullable.field("_min", { type: "ResourceMinAggregateOutputType" });
    t.nullable.field("_max", { type: "ResourceMaxAggregateOutputType" });
  },
});

export const ResourceGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "ResourceGroupByOutputType",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.nullable.field("_count", { type: "ResourceCountAggregateOutputType" });
    t.nullable.field("_avg", { type: "ResourceAvgAggregateOutputType" });
    t.nullable.field("_sum", { type: "ResourceSumAggregateOutputType" });
    t.nullable.field("_min", { type: "ResourceMinAggregateOutputType" });
    t.nullable.field("_max", { type: "ResourceMaxAggregateOutputType" });
  },
});

export const AggregateAccessLog = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "AggregateAccessLog",
  definition(t) {
    t.nullable.field("_count", { type: "AccessLogCountAggregateOutputType" });
    t.nullable.field("_avg", { type: "AccessLogAvgAggregateOutputType" });
    t.nullable.field("_sum", { type: "AccessLogSumAggregateOutputType" });
    t.nullable.field("_min", { type: "AccessLogMinAggregateOutputType" });
    t.nullable.field("_max", { type: "AccessLogMaxAggregateOutputType" });
  },
});

export const AccessLogGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "AccessLogGroupByOutputType",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("createdAt", { type: "DateTime" });
    t.nullable.field("userId", { type: "String" });
    t.nullable.field("email", { type: "String" });
    t.field("message", { type: "String" });
    t.field("accessType", { type: "AccessType" });
    t.nullable.field("_count", { type: "AccessLogCountAggregateOutputType" });
    t.nullable.field("_avg", { type: "AccessLogAvgAggregateOutputType" });
    t.nullable.field("_sum", { type: "AccessLogSumAggregateOutputType" });
    t.nullable.field("_min", { type: "AccessLogMinAggregateOutputType" });
    t.nullable.field("_max", { type: "AccessLogMaxAggregateOutputType" });
  },
});

export const AggregateAdminSchema = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "AggregateAdminSchema",
  definition(t) {
    t.nullable.field("_count", { type: "AdminSchemaCountAggregateOutputType" });
    t.nullable.field("_avg", { type: "AdminSchemaAvgAggregateOutputType" });
    t.nullable.field("_sum", { type: "AdminSchemaSumAggregateOutputType" });
    t.nullable.field("_min", { type: "AdminSchemaMinAggregateOutputType" });
    t.nullable.field("_max", { type: "AdminSchemaMaxAggregateOutputType" });
  },
});

export const AdminSchemaGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "AdminSchemaGroupByOutputType",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.field("schema", { type: "Json" });
    t.nullable.field("_count", { type: "AdminSchemaCountAggregateOutputType" });
    t.nullable.field("_avg", { type: "AdminSchemaAvgAggregateOutputType" });
    t.nullable.field("_sum", { type: "AdminSchemaSumAggregateOutputType" });
    t.nullable.field("_min", { type: "AdminSchemaMinAggregateOutputType" });
    t.nullable.field("_max", { type: "AdminSchemaMaxAggregateOutputType" });
  },
});

export const UserCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "UserCountOutputType",
  definition(t) {
    t.field("AccessLog", { type: "Int" });
    t.field("policy", { type: "Int" });
  },
});

export const UserCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "UserCountAggregateOutputType",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "Int" });
    t.field("createdAt", { type: "Int" });
    t.field("updatedAt", { type: "Int" });
    t.field("email", { type: "Int" });
    t.field("name", { type: "Int" });
    t.field("phoneNumber", { type: "Int" });
    t.field("description", { type: "Int" });
    t.field("imgUrl", { type: "Int" });
    t.field("role", { type: "Int" });
    t.field("stUserId", { type: "Int" });
    t.field("permission", { type: "Int" });
    t.field("_all", { type: "Int" });
  },
});

export const UserAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "UserAvgAggregateOutputType",
  definition(t) {
    t.nullable.field("id", { type: "Float" });
  },
});

export const UserSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "UserSumAggregateOutputType",
  definition(t) {
    t.nullable.field("id", { type: "Int" });
  },
});

export const UserMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "UserMinAggregateOutputType",
  definition(t) {
    t.nullable.field("id", { type: "Int" });
    t.nullable.field("uuid", { type: "String" });
    t.nullable.field("createdAt", { type: "DateTime" });
    t.nullable.field("updatedAt", { type: "DateTime" });
    t.nullable.field("email", { type: "String" });
    t.nullable.field("name", { type: "String" });
    t.nullable.field("phoneNumber", { type: "String" });
    t.nullable.field("description", { type: "String" });
    t.nullable.field("imgUrl", { type: "String" });
    t.nullable.field("role", { type: "UserRole" });
    t.nullable.field("stUserId", { type: "String" });
  },
});

export const UserMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "UserMaxAggregateOutputType",
  definition(t) {
    t.nullable.field("id", { type: "Int" });
    t.nullable.field("uuid", { type: "String" });
    t.nullable.field("createdAt", { type: "DateTime" });
    t.nullable.field("updatedAt", { type: "DateTime" });
    t.nullable.field("email", { type: "String" });
    t.nullable.field("name", { type: "String" });
    t.nullable.field("phoneNumber", { type: "String" });
    t.nullable.field("description", { type: "String" });
    t.nullable.field("imgUrl", { type: "String" });
    t.nullable.field("role", { type: "UserRole" });
    t.nullable.field("stUserId", { type: "String" });
  },
});

export const PolicyCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "PolicyCountAggregateOutputType",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "Int" });
    t.field("createdAt", { type: "Int" });
    t.field("updatedAt", { type: "Int" });
    t.field("resourceId", { type: "Int" });
    t.field("action", { type: "Int" });
    t.field("userId", { type: "Int" });
    t.field("_all", { type: "Int" });
  },
});

export const PolicyAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "PolicyAvgAggregateOutputType",
  definition(t) {
    t.nullable.field("id", { type: "Float" });
    t.nullable.field("resourceId", { type: "Float" });
    t.nullable.field("userId", { type: "Float" });
  },
});

export const PolicySumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "PolicySumAggregateOutputType",
  definition(t) {
    t.nullable.field("id", { type: "Int" });
    t.nullable.field("resourceId", { type: "Int" });
    t.nullable.field("userId", { type: "Int" });
  },
});

export const PolicyMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "PolicyMinAggregateOutputType",
  definition(t) {
    t.nullable.field("id", { type: "Int" });
    t.nullable.field("uuid", { type: "String" });
    t.nullable.field("createdAt", { type: "DateTime" });
    t.nullable.field("updatedAt", { type: "DateTime" });
    t.nullable.field("resourceId", { type: "Int" });
    t.nullable.field("action", { type: "Action" });
    t.nullable.field("userId", { type: "Int" });
  },
});

export const PolicyMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "PolicyMaxAggregateOutputType",
  definition(t) {
    t.nullable.field("id", { type: "Int" });
    t.nullable.field("uuid", { type: "String" });
    t.nullable.field("createdAt", { type: "DateTime" });
    t.nullable.field("updatedAt", { type: "DateTime" });
    t.nullable.field("resourceId", { type: "Int" });
    t.nullable.field("action", { type: "Action" });
    t.nullable.field("userId", { type: "Int" });
  },
});

export const ResourceCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "ResourceCountOutputType",
  definition(t) {
    t.field("policies", { type: "Int" });
  },
});

export const ResourceCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "ResourceCountAggregateOutputType",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "Int" });
    t.field("createdAt", { type: "Int" });
    t.field("updatedAt", { type: "Int" });
    t.field("_all", { type: "Int" });
  },
});

export const ResourceAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "ResourceAvgAggregateOutputType",
  definition(t) {
    t.nullable.field("id", { type: "Float" });
  },
});

export const ResourceSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "ResourceSumAggregateOutputType",
  definition(t) {
    t.nullable.field("id", { type: "Int" });
  },
});

export const ResourceMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "ResourceMinAggregateOutputType",
  definition(t) {
    t.nullable.field("id", { type: "Int" });
    t.nullable.field("uuid", { type: "String" });
    t.nullable.field("createdAt", { type: "DateTime" });
    t.nullable.field("updatedAt", { type: "DateTime" });
  },
});

export const ResourceMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "ResourceMaxAggregateOutputType",
  definition(t) {
    t.nullable.field("id", { type: "Int" });
    t.nullable.field("uuid", { type: "String" });
    t.nullable.field("createdAt", { type: "DateTime" });
    t.nullable.field("updatedAt", { type: "DateTime" });
  },
});

export const AccessLogCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "AccessLogCountAggregateOutputType",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("createdAt", { type: "Int" });
    t.field("userId", { type: "Int" });
    t.field("email", { type: "Int" });
    t.field("message", { type: "Int" });
    t.field("accessType", { type: "Int" });
    t.field("_all", { type: "Int" });
  },
});

export const AccessLogAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "AccessLogAvgAggregateOutputType",
  definition(t) {
    t.nullable.field("id", { type: "Float" });
  },
});

export const AccessLogSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "AccessLogSumAggregateOutputType",
  definition(t) {
    t.nullable.field("id", { type: "Int" });
  },
});

export const AccessLogMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "AccessLogMinAggregateOutputType",
  definition(t) {
    t.nullable.field("id", { type: "Int" });
    t.nullable.field("createdAt", { type: "DateTime" });
    t.nullable.field("userId", { type: "String" });
    t.nullable.field("email", { type: "String" });
    t.nullable.field("message", { type: "String" });
    t.nullable.field("accessType", { type: "AccessType" });
  },
});

export const AccessLogMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "AccessLogMaxAggregateOutputType",
  definition(t) {
    t.nullable.field("id", { type: "Int" });
    t.nullable.field("createdAt", { type: "DateTime" });
    t.nullable.field("userId", { type: "String" });
    t.nullable.field("email", { type: "String" });
    t.nullable.field("message", { type: "String" });
    t.nullable.field("accessType", { type: "AccessType" });
  },
});

export const AdminSchemaCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "AdminSchemaCountAggregateOutputType",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("createdAt", { type: "Int" });
    t.field("updatedAt", { type: "Int" });
    t.field("schema", { type: "Int" });
    t.field("_all", { type: "Int" });
  },
});

export const AdminSchemaAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "AdminSchemaAvgAggregateOutputType",
  definition(t) {
    t.nullable.field("id", { type: "Float" });
  },
});

export const AdminSchemaSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "AdminSchemaSumAggregateOutputType",
  definition(t) {
    t.nullable.field("id", { type: "Int" });
  },
});

export const AdminSchemaMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "AdminSchemaMinAggregateOutputType",
  definition(t) {
    t.nullable.field("id", { type: "Int" });
    t.nullable.field("createdAt", { type: "DateTime" });
    t.nullable.field("updatedAt", { type: "DateTime" });
  },
});

export const AdminSchemaMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "AdminSchemaMaxAggregateOutputType",
  definition(t) {
    t.nullable.field("id", { type: "Int" });
    t.nullable.field("createdAt", { type: "DateTime" });
    t.nullable.field("updatedAt", { type: "DateTime" });
  },
});

export const CreateManyUserAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "CreateManyUserAndReturnOutputType",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.field("email", { type: "String" });
    t.nullable.field("name", { type: "String" });
    t.nullable.field("phoneNumber", { type: "String" });
    t.nullable.field("description", { type: "String" });
    t.nullable.field("imgUrl", { type: "String" });
    t.field("role", { type: "UserRole" });
    t.field("stUserId", { type: "String" });
    t.nullable.field("permission", { type: "UserPermission" });
  },
});

export const CreateManyPolicyAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "CreateManyPolicyAndReturnOutputType",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.field("resourceId", { type: "Int" });
    t.field("action", { type: "Action" });
    t.nullable.field("userId", { type: "Int" });
    t.field("resource", { type: "Resource" });
    t.nullable.field("user", { type: "User" });
  },
});

export const CreateManyResourceAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "CreateManyResourceAndReturnOutputType",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("uuid", { type: "String" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
  },
});

export const CreateManyAccessLogAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "CreateManyAccessLogAndReturnOutputType",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("createdAt", { type: "DateTime" });
    t.nullable.field("userId", { type: "String" });
    t.nullable.field("email", { type: "String" });
    t.field("message", { type: "String" });
    t.field("accessType", { type: "AccessType" });
    t.nullable.field("user", { type: "User" });
  },
});

export const CreateManyAdminSchemaAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: "CreateManyAdminSchemaAndReturnOutputType",
  definition(t) {
    t.field("id", { type: "Int" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
    t.field("schema", { type: "Json" });
  },
});
