export const isEmpty = (obj: any) =>
  [Object, Array].includes((obj || {}).constructor) &&
  !Object.entries(obj || {}).length;

export const isNil = (value: any): value is null | undefined => {
  return value == null;
};

/**
 * Checks if value is undefined.
 *
 * @param value The value to check.
 * @return Returns true if value is undefined, else false.
 */
export const isUndefined = (value: any) => {
  return value === undefined;
};

/**
 * Checks if value is null.
 *
 * @param value The value to check.
 * @return Returns true if value is null, else false.
 */
export const isNull = (value: any): value is null => {
  return value === null;
};

type Omit = <T extends object, K extends [...(keyof T)[]]>(
  obj: T,
  ...keys: K
) => {
  [K2 in Exclude<keyof T, K[number]>]: T[K2];
};

/**
 * Omit TypeScript function
 * https://stackoverflow.com/a/53968837
 * @param obj
 * @param keys
 * @returns
 */
export const omit: Omit = (obj, ...keys) => {
  const ret = {} as {
    [K in keyof typeof obj]: (typeof obj)[K];
  };
  let key: keyof typeof obj;
  for (key in obj) {
    if (!keys.includes(key)) {
      ret[key] = obj[key];
    }
  }
  return ret;
};

type Falsey = null | undefined | false | "" | 0 | 0n;
/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
export const compact = <T>(array: ArrayLike<T | Falsey>): T[] => {
  let index = -1;
  const length = array === null ? 0 : array.length;
  let resIndex = 0;
  const result: T[] = [];

  while (++index < length) {
    const value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
};
