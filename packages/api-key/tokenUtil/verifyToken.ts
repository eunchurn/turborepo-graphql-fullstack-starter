import { createDecipheriv } from "node:crypto";
import payloadValidator from "./validator";

/**
 * It takes a token and a secret key, splits the token into two parts, decrypts the secret key using
 * the token's private key, and then validates the decrypted secret key against the token's payload
 * @param {string} token - The token you want to verify
 * @param {string} secretKey - The secret key that you get from the API.
 * @returns The payload is being returned.
 */
export function verifyToken(privateKey: string, token: string) {
  try {
    const [secretKey, appKey] = token.split(".");
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
