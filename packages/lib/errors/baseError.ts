import { v4 as uuidV4 } from "uuid";

interface DefaultPayload {
  $errorId: string;
}

export interface BaseErrorConstructorArgs {
  /**
   * UPPER_SNAKE_CASE.
   */
  errorCodename: string;

  /**
   * General Error message.
   */
  message: string;

  /**
   * REST endpoints errors.
   */
  httpStatusCode: number;

  /**
   * Extra data
   */
  payload?: Record<string, any>;

  /**
   * 3rd party errors.
   */
  originalError?: Error;
}
/**
 * - https://www.dannyguo.com/blog/how-to-fix-instanceof-not-working-for-custom-errors-in-typescript/
 * - https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
 */
export class BaseError extends Error {
  readonly errorId: string;
  readonly httpStatusCode: number;
  readonly payload: Readonly<DefaultPayload> & Record<string, any>;
  readonly errorCodename: string;
  readonly originalError?: Error;

  constructor(args: BaseErrorConstructorArgs) {
    super(args.message);

    // Tracing on backend logs
    this.errorId = uuidV4();

    this.errorCodename = args.errorCodename;
    this.httpStatusCode = args.httpStatusCode;
    this.payload = {
      ...args.payload,
      $errorId: this.errorId,
    };
    this.originalError = args.originalError;
    this.stack = `ErrorID: ${this.errorId}\n${this.stack}`;

    if (this.originalError) {
      this.stack += `\n${this.originalError.stack}`;
    }
  }
}
