import winston from "winston";
import chalk from "ansis";

const { printf } = winston.format;

export async function getLogger() {
  const { yellow, magenta, redBright, greenBright } = chalk;
  const logFormat = printf((info) => {
    if (info.level === "info") {
      return `${greenBright.inverse.bold(` ${info.level} `)}: ${yellow(
        info.message,
      )}`;
    }
    if (info.level === "error") {
      return `${redBright.inverse.bold(` ${info.level} `)}: ${yellow(
        info.message,
      )}`;
    }
    return `${magenta.inverse.bold(` ${info.level} `)}: ${yellow(
      info.message,
    )}`;
  });

  const logger = winston.createLogger({
    format: logFormat,
    transports: [new winston.transports.Console()],
  });

  const stream = {
    write: (message: string) => {
      return logger.info(`${yellow.inverse.bold(" APP ")} ${message}`);
    },
  };
  return { logger, stream };
}

// export { logger, stream };
