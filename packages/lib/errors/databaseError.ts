import { BaseError, BaseErrorConstructorArgs } from "./baseError";

type DatabaseErrorConstructorArgs = Omit<
  BaseErrorConstructorArgs,
  "errorCodename"
>;

export class DatabaseError extends BaseError {
  constructor(args: DatabaseErrorConstructorArgs) {
    super({
      ...args,
      errorCodename: "DATABASE_ERROR",
    });
  }
}
