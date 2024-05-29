import morgan, { TokenIndexer } from "morgan";
import { Request, Response } from "express";
import { defaultsDeep, isEmpty } from "lodash";
import chalk from "ansis";

async function getFormatMaker() {
  const {
    blue,
    blueBright,
    magentaBright,
    magenta,
    cyanBright,
    greenBright,
    redBright,
    cyan,
    italic,
    bold,
  } = chalk;
  const formatMaker = (
    tokens: TokenIndexer<Request, Response>,
    req: Request,
    res: Response
  ) => {
    const { query, variables, operationName } = req.body;
    const queryText = (
      JSON.stringify(
        query && query.replace(/(\r\n|\n|\r)/gm, "").replace(/\s\s+/g, " ")
      ) || ""
    )
      .replace(/"/g, ``)
      .replace(/\\/g, `"`);
    const restLogger = [
      blueBright(`${tokens.method(req, res)}`),
      magentaBright(`${tokens.status(req, res)}`),
      cyanBright(`${tokens.url(req, res)}`),
      tokens.res(req, res, "content-length"),
      "-",
      greenBright(`${tokens["response-time"](req, res)} ms`),
      redBright(`@ ${tokens.date(req, res)}`),
    ].join(" ");
    const graphLogger = [
      blueBright(`${tokens.method(req, res)}`),
      magentaBright(`${tokens.status(req, res)}`),
      cyanBright(`${tokens.url(req, res)}`),
      tokens.res(req, res, "content-length"),
      "-",
      greenBright(`${tokens["response-time"](req, res)} ms`),
      redBright(`@ ${tokens.date(req, res)}`),
      italic(cyan(`\nGraphQL:`)),
      bold(magenta(" \n Operation Name:")),
      blue(`${operationName}`),
      bold(magenta("\n Query:")),
      blue(queryText),
      bold(magenta("\n Variables:")),
      blue(`${JSON.stringify(variables)}`),
      // hex("#34ACE0")(`${tokens.method(req, res)}`),
      // hex("#ffb142").bold(`${tokens.status(req, res)}`),
      // hex("#ff5252").bold(`${tokens.url(req, res)}`),
      // tokens.res(req, res, "content-length"),
      // "-",
      // hex("#2ed573").bold(`${tokens["response-time"](req, res)} ms`),
      // hex("#f78fb3").bold(`@ ${tokens.date(req, res)}`),
      // hex("#9b59b6").italic(`\nGraphQL:`),
      // hex("#f39c12").bold(" \nOperation Name:"),
      // blue(`${operationName}`),
      // hex("#f39c12").bold(" \nQuery:"),
      // blue(queryText),
      // hex("#f39c12").bold("\nVariables:"),
      // blue(`${JSON.stringify(variables)}`),
    ].join(" ");
    return isEmpty(query) ? restLogger : graphLogger;
  };
  return formatMaker;
}

const prodOption = {
  skip: (req: Request) => {
    const isHealthCheck = req.path === "/health";
    const isOptionsMethod = req.method === "OPTIONS";
    const defReq = defaultsDeep(req, { body: { operationName: null } });
    const { operationName } = defReq.body;
    const operationNameSkip =
      operationName === "IntrospectionQuery" || operationName === "undefined";
    const url = `${req.get("host") + req.originalUrl}`;
    return (
      url.indexOf("/.well-known") > -1 ||
      operationNameSkip ||
      isOptionsMethod ||
      isHealthCheck
    );
  },
};

const devOption = {
  skip: (req: Request) => {
    const isHealthCheck = req.path === "/health";
    const isOptionsMethod = req.method === "OPTIONS";
    const defReq = defaultsDeep(req, { body: { operationName: null } });
    const { operationName } = defReq.body;
    const operationNameSkip =
      operationName === "IntrospectionQuery" || operationName === "undefined";
    const url = `${req.get("host") + req.originalUrl}`;
    return (
      url.indexOf("/.well-known") > -1 ||
      operationNameSkip ||
      isOptionsMethod ||
      isHealthCheck
    );
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getGraphQLLogger(): Promise<any> {
  const formatMaker = await getFormatMaker();
  const prod = morgan(formatMaker, prodOption);
  const dev = morgan(formatMaker, devOption);
  return { prod, dev };
}
