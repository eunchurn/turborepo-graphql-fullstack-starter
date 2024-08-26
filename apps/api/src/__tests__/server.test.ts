import supertest from "supertest";
import { describe, it, expect } from "vitest";
import { createServer } from "../server";

describe("server", () => {
  it("status check returns 200", async () => {
    await supertest(await createServer())
      .get("/status")
      .expect(200)
      .then((res) => {
        expect(res.body.ok).toBe(true);
      });
  });

  it("message endpoint says hello", async () => {
    await supertest(await createServer())
      .get("/message/world")
      .expect(200)
      .then((res) => {
        expect(res.body.message).toBe("hello world");
      });
  });
});
