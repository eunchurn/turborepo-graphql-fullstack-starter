import { isArray } from "lodash";
/**
 * Recursively replaces all nulls with undefineds.
 * Skips object classes (that have a `.__proto__.constructor`).
 *
 * Unfortunately, until https://github.com/apollographql/apollo-client/issues/2412
 * gets solved at some point,
 * this is the only workaround to prevent `null`s going into the codebase,
 * if it's connected to a Apollo server/client.
 *
 * https://github.com/apollographql/apollo-client/issues/2412#issuecomment-755449680
 */
export type RecursivelyReplaceNullWithUndefined<T> = T extends null
  ? undefined
  : T extends Record<string, unknown>
  ? {
      [K in keyof T]: T[K] extends (infer U)[]
        ? RecursivelyReplaceNullWithUndefined<U>[]
        : RecursivelyReplaceNullWithUndefined<T[K]>;
    }
  : T;
/**
 * If the value is null, replace it with undefined. Otherwise, if the value is an object, recursively
 * call this function on it. Otherwise, return the value.
 * @param {T} obj - T
 * @returns A function that takes an object and returns a new object with all null values replaced with
 * undefined.
 */
export function replaceNullsWithUndefineds<T>(
  obj: T,
): RecursivelyReplaceNullWithUndefined<T> {
  const newObj: any = {};
  if (typeof obj !== "object" || isArray(obj)) return obj as any;
  Object.keys(obj as object).forEach((k) => {
    const value: any = (obj as any)[k];
    newObj[k as keyof T] =
      value === null
        ? undefined
        : value &&
          typeof value === "object" &&
          value.__proto__.constructor === Object
        ? replaceNullsWithUndefineds(value)
        : value;
  });
  return newObj;
}
/**
 * https://stackoverflow.com/questions/62896115/how-to-do-a-conditional-generic-type-that-has-a-value-when-it-is-undefined-but-n
 */
export type RecursivelyReplaceUndefinedWithNull<T> = T extends undefined
  ? null
  : T extends Record<string, unknown>
  ? {
      [K in keyof T]-?: T[K] extends (infer U)[]
        ? RecursivelyReplaceUndefinedWithNull<U>[]
        : RecursivelyReplaceUndefinedWithNull<T[K]>;
    }
  : T;

/**
 * It takes an object and returns a new object with all the undefined values replaced with nulls
 * @param {T} obj - T
 * @returns A function that takes a string and returns a string
 */
export function replaceUndefinedsWithNulls<T>(
  obj: T,
): RecursivelyReplaceUndefinedWithNull<T> {
  const newObj: any = {};
  if (typeof obj !== "object" || isArray(obj)) return obj as any;
  Object.keys(obj as object).forEach((k) => {
    const value: any = (obj as any)[k];
    newObj[k as keyof T] =
      typeof value === "undefined"
        ? null
        : value &&
          typeof value === "object" &&
          value.__proto__.constructor === Object
        ? replaceUndefinedsWithNulls(value)
        : value;
  });
  return newObj;
}
