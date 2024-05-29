import { BaseError } from "./baseError";

export class UnauthenticatedError extends BaseError {
  constructor(message?: string) {
    super({
      errorCodename: "UNAUTHENTICATED",
      httpStatusCode: 401,
      message: message ?? "Unauthenticated. Please try logging in again.",
    });
  }
}
