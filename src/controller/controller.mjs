import { logger } from "./logger.mjs";

export function log(type, device, message) {
	switch (type) {
		case "trace":
			logger.trace(device, message);
			break;

		case "debug":
			logger.debug(device, message);
			break;

		case "info":
			logger.info(device, message);
			break;

		case "warn":
			logger.warn(device, message);
			break;

		case "error":
			logger.error(device, message);
			break;

		case "fatal":
			logger.fatal(device, message);
			break;

		default:
			break;
	}
}
