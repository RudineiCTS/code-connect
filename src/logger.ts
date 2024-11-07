import { Logger } from 'winston'


type LoggerType = Logger | { log: () => void; error: (msg: string) => void; info: (msg: string) => void};

let logger: LoggerType

if (typeof window === 'undefined') {
const { createLogger, transports } = require("winston"); // Importa winston apenas no servidor

  logger = createLogger({
    transports: [
      new transports.File({filename:'combined.log'}),
      new transports.File({ filename: 'error.log', level: 'error'})
    ],
  });
} else {
  logger = {
    log: () => {},
    error: (msg: string) => console.error(msg),
    info: (msg: string) => console.log(msg),
  };
}

export default logger;
