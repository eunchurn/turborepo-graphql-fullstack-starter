import { extendType, objectType } from "nexus";

export const UserCustomFieldObjectType = objectType({
  name: "UserCustomFieldObjectType",
  description: "Sample",
  definition(t) {
    t.string("hello");
  },
});

export const ExtendedUser = extendType({
  type: "User",
  definition(t) {
    t.field("customField", {
      type: UserCustomFieldObjectType,
      resolve() {
        return { hello: "world" };
      },
    });
  },
});
