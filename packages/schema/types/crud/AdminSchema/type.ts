import { objectType } from "nexus";

export const AdminSchema = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: "AdminSchema",
  description: `Admin Schema (for Paljs)`,
  definition(t) {
    t.int("id", { description: `ID` });
    t.field("createdAt", { description: "createdAt", type: "DateTime" });
    t.field("updatedAt", { description: "updatedAt", type: "DateTime" });
    t.json("schema", { description: `Schema` });
  },
});
