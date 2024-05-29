import { createServer } from "./server";
import { getLogger } from "@repo/logger";
import { port } from "@/app";

const main = async () => {
  const server = await createServer();
  await new Promise((resolve) => {
    server.listen(port, () => resolve(true));
  });
  const { logger } = await getLogger();
    logger.info(`🚀 GraphQL service ready at ${process.env.API_DOMAIN}`);
};

main();
