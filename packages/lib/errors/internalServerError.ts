import { BaseError } from "./baseError";

export class InternalServerError extends BaseError {
  constructor(message: string, originalError?: Error) {
    super({
      errorCodename: "INTERNAL_SERVER_ERROR",
      httpStatusCode: 500,
      message,
      originalError,
    });
  }
}
