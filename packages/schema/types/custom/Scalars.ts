// import Upload from "graphql-upload/Upload.mjs";
import {
  BigIntResolver,
  URLResolver,
  UUIDResolver,
  EmailAddressResolver,
  JSONObjectResolver,
  DateResolver,
} from "graphql-scalars";
import { GraphQLError } from "graphql";
import { asNexusMethod, scalarType } from "nexus";
import { dynamicImport } from "tsimportlib";
// import * as FileType from "file-type";
// export const Upload = GraphQLUpload;

/**
 * https://github.com/graphql-nexus/nexus/issues/441#issuecomment-650195982
 * https://github.com/jaydenseric/graphql-upload/blob/e01b5d5541760d529b06c900883c5fa7febcff00/GraphQLUpload.mjs
 */
export const UploadScalar = scalarType({
  name: "Upload",
  asNexusMethod: "upload",
  description: "The `Upload` scalar type represents a file upload.",
  serialize() {
    throw new GraphQLError("Upload serialization unsupported.");
  },
  async parseValue(value) {
    const Upload = (await dynamicImport("graphql-upload/Upload.mjs", module))
      .default as typeof import("graphql-upload/Upload.mjs").default;
    if (value instanceof Upload) return value.promise;
    throw new GraphQLError("Upload value invalid.");
  },
  parseLiteral(node) {
    throw new GraphQLError("Upload literal unsupported.", { nodes: node });
  },
});
export const Date = asNexusMethod(DateResolver, "date");

export const BigInt = asNexusMethod(BigIntResolver, "bigInt");
export const Url = asNexusMethod(URLResolver, "url");
export const UUID = asNexusMethod(UUIDResolver, "uuid");

export const Email = asNexusMethod(EmailAddressResolver, "email");

export const Json = asNexusMethod(JSONObjectResolver, "json");
