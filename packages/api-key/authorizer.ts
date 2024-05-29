import { Request } from "express";
import { verifyApiKey } from "./verifyApiKey";
import dayjs from "dayjs";

/**
 * It verifies the API key and secret in the request headers, and returns true if they are valid
 * @param {Request} request - The request object from the Exress App.
 * @returns A function that takes a request and returns a boolean.
 */
export function authorizer(request: Request) {
  try {
    const appKey = request.headers["x-api-key"];
    const appSecret = request.headers["x-api-secret"];
    if (typeof appKey !== "string" || typeof appSecret !== "string")
      return false;

    const { appId, expiredAt } = verifyApiKey(
      process.env.API_SECRET,
      appKey,
      appSecret,
    );
    if (!appId) return false;
    if (dayjs(expiredAt) < dayjs()) return false;
    return true;
  } catch (e) {
    return false;
  }
}
