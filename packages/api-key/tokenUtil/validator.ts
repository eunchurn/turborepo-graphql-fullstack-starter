/* tslint:disable */
// generated by typescript-json-validator
import { inspect } from "node:util";
import Ajv, { ValidateFunction } from "ajv";
import addFormats from "ajv-formats";
import schema from "ajv/dist/refs/json-schema-draft-06.json";
import { Payload } from "./createToken";
export const ajv = new Ajv({
  allErrors: true,
  coerceTypes: false,
  useDefaults: true,
});

ajv.addMetaSchema(schema);
addFormats(ajv);

export type { Payload };
export const PayloadSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    email: {
      type: "string",
    },
    permission: {
      type: "string",
    },
    projectId: {
      type: "string",
    },
  },
  required: ["email", "permission", "projectId"],
  type: "object",
};
export type ValidateFn<T> = ((data: unknown) => data is T) &
  Pick<ValidateFunction, "errors">;
export const isPayload = ajv.compile(PayloadSchema) as ValidateFn<Payload>;
export default function validate(value: string): Payload {
  const payload = JSON.parse(value);
  if (isPayload(payload)) {
    return payload;
  } else {
    throw new Error(
      ajv.errorsText(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        isPayload.errors!.filter((e: any) => e.keyword !== "if"),
        { dataVar: "Payload" }
      ) +
        "\n\n" +
        inspect(payload)
    );
  }
}
