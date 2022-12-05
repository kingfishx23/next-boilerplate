import { createLogger, format, transports } from 'winston'
import { consoleFormat } from 'winston-console-format'

import { LoggingWinston } from '@google-cloud/logging-winston'

export const logConfiguration = () => ({
  format: format.combine(
    format.timestamp(),
    format.ms(),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize({ all: true }),
        format.padLevels(),
        consoleFormat({
          showMeta: true,
          metaStrip: ['timestamp', 'service'],
          inspectOptions: {
            depth: Infinity,
            colors: true,
            maxArrayLength: Infinity,
            breakLength: 120,
            compact: Infinity,
          },
        }),
      ),
    }),
    new LoggingWinston(),
  ],
})

export const logger = (MODULE) => {
  const _ = createLogger(logConfiguration())
  return {
    info: (msg, meta) => _.info(`|| ${MODULE} || ${msg}`, meta),
    warn: (msg, meta) => _.warn(`|| ${MODULE} || ${msg}`, meta),
    error: (msg, meta) => _.error(`|| ${MODULE} || ${msg}`, meta),
  }
}
