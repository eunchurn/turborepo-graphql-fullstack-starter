import { createDecipheriv } from "crypto";
import payloadValidator from "./validator";

/**
 * It decrypts the secret key using the private key and app key
 * @param {string} privateKey - The private key that was generated when the app was created.
 * @param {string} appKey - The app key that you received from the API.
 * @param {string} secretKey - The secret key that you received from the API.
 * @returns The secret key
 */
export function verifyApiKey(
  privateKey: string,
  appKey: string,
  secretKey: string,
) {
  try {
    const secretKeyDecoded = Buffer.from(secretKey, "base64").toString("ascii");
    const decryptor = createDecipheriv("aes-256-cbc", privateKey, appKey);
    const payloadString = `${decryptor.update(
      secretKeyDecoded,
      "base64",
      "utf8",
    )}${decryptor.final("utf8")}`;
    const payload = payloadValidator(payloadString);
    return payload;
  } catch (e) {
    throw new Error("Token validation failed");
  }
}
