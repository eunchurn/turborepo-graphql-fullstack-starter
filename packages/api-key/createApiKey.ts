import { createHmac, randomBytes, createCipheriv } from "crypto";

export enum Env {
  dev = "development",
  prod = "production",
}

type EnvValue = `${Env}`;
export interface Payload {
  serviceName: string;
  appId: string;
  env: EnvValue;
  /**
   * @TJS-format date
   */
  issuedAt: Date;
  /**
   * @TJS-format date
   */
  expiredAt: Date;
  /**
   * Project ID
   */
  projectId?: string;
}

/**
 * It takes a private key and a payload, and returns an appKey and a secretKey
 * @param {string} privateKey - The private key that you can find in your account settings.
 * @param {Payload} payload - This is the data that you want to encrypt.
 * @returns An object with two keys, appKey and secretKey.
 */
export function createApiKey(privateKey: string, payload: Payload) {
  const key = randomBytes(16);
  const appKey = createHmac("sha256", privateKey)
    .update(key)
    .digest("hex")
    .substring(0, 16);
  const cipher = createCipheriv("aes-256-cbc", Buffer.from(privateKey), appKey);
  const encrypted = cipher.update(JSON.stringify(payload));
  const secretBuffer = Buffer.concat([encrypted, cipher.final()]).toString(
    "base64",
  );
  const secretKey = Buffer.from(secretBuffer, "utf8").toString("base64");
  return { appKey, secretKey };
}
