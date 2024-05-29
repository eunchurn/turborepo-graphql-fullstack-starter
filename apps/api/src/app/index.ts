import express, { type Express } from "express";
import morgan from "morgan";
import cors from "cors";
import { getGraphQLLogger } from "@repo/logger";

export const port = process.env.PORT || "8000";

export const getApp = async (): Promise<Express> => {
  const { prod, dev } = await getGraphQLLogger();
  const graphQLLogger = process.env.NODE_ENV === "production" ? prod : dev;
  const app = express();
  app
    .disable("x-powered-by")
    // .use(morgan("dev"))
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(cors())
    .get("/message/:name", (req, res) => {
      return res.json({ message: `hello ${req.params.name}` });
    })
    .get("/status", (_, res) => {
      return res.json({ ok: true });
    });
  app.use(graphQLLogger);
  return app;
};
