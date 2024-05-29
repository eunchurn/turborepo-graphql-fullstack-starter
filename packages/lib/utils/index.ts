export const isEmpty = (
  value: string | undefined | null | any | any[] | never[]
): value is undefined =>
  value === undefined || value === null || value === "" || value.length === 0;

export * from "./rbac";
export * from "./userPermission";
export * from "./digestMessage";
