import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from "@apollo/server/plugin/landingPage/default";
import http from "http";
import { getApp, port } from "./app";
import { schema } from "@repo/schema";
import { context, Context } from "@repo/context";
import { getLogger } from "@repo/logger"

function getPlugins(httpServer: http.Server) {
  const plugins = [ApolloServerPluginDrainHttpServer({ httpServer })];
  // if (process.env.NODE_ENV === "production") {
  //   plugins.push(
  //     ApolloServerPluginLandingPageProductionDefault({
  //       graphRef: process.env.APOLLO_GRAPH_REF,
  //       footer: false,
  //       embed: true,
  //       includeCookies: true,
  //     })
  //   );
  //   return plugins;
  // }
  plugins.push(
    ApolloServerPluginLandingPageLocalDefault({
      footer: false,
      embed: true,
      includeCookies: true,
    })
  );
  return plugins;
}

export async function createServer() {
  const app = await getApp();
  const httpServer = http.createServer(app);
  const plugins = getPlugins(httpServer);
  const server = new ApolloServer<Context>({
    schema,
    introspection: process.env.NODE_ENV !== "production",
    plugins,
    csrfPrevention: true,
  });
  await server.start();
  app.use("/", expressMiddleware(server, { context }));
  return httpServer;
  cleanup();
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: Number(port) }, resolve),
  );
  const { logger } = await getLogger();
  logger.info(`🚀 GraphQL service ready at ${process.env.API_DOMAIN}`);
}

interface ProcessOptions {
  cleanup?: boolean;
  exit?: boolean;
}

async function exitHandler(
  options: ProcessOptions,
  exitCode: NodeJS.ExitListener,
): Promise<void> {
  if (options.cleanup) {
    console.log("😎 clean exit");
  }
  if (exitCode || exitCode === 0) {
    console.log(`🔧 exit code: ${exitCode}`);
    process.exit();
  }
  if (options.exit) {
    console.log(`😵 exit without exitCode`);
    process.exit();
  }
}

/**
 * It's a function that runs when the app is closing, and it's used to close the database connection
 */
export async function cleanup(): Promise<void> {
  process.on("exit", exitHandler.bind(null, { cleanup: true }));
  // catches ctrl+c event
  process.on("SIGINT", exitHandler.bind(null, { exit: true }));
  process.on("SIGTERM", exitHandler.bind(null, { cleanup: true }));
  // catches "kill pid" (for example: nodemon restart)
  process.on("SIGUSR1", exitHandler.bind(null, { exit: true }));
  process.on("SIGUSR2", exitHandler.bind(null, { exit: true }));
  // catches uncaught exceptions
  process.on("uncaughtException", exitHandler.bind(null, { exit: true }));
}
