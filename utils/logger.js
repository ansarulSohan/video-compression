import winston from "winston";
import "winston-mongodb";

const mongoFormat = winston.format.combine(

    winston.format.timestamp(),
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.uncolorize(),
)

const consoleFormat = winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(({ timestamp, level, message, ...meta }) => {
        const metaString = Object.keys(meta).length
            ? `\n${JSON.stringify(meta, null, 2)}`
            : "";
        return `[${timestamp}] ${level}: ${message}${metaString}`;
    })
);

const logger = winston.createLogger({
    level: process.env.NODE_ENV === "development" ? "debug" : "info",
    transports: [
        new winston.transports.Console(
            {
                level: "info",
                format: consoleFormat,
            }
        ),
        new winston.transports.MongoDB({
            level: "error",
            db: process.env.MONGO_URL,
            collection: "error_logs",
            format: mongoFormat,
        }),
        new winston.transports.MongoDB({
            level: "info",
            db: process.env.MONGO_URL,
            collection: "info_logs",
            format: mongoFormat,
        })
    ]
})

export default logger;