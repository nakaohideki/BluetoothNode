import log4js from "log4js";
import moment from "moment";
import * as url from "url"; //importing all with alias url from the url necessaries package
const { configure, getLogger } = log4js;
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

configure({
	appenders: {
		std: {
			type: "File",
			filepath: __dirname + "/logs",
			layout: { type: "pattern", pattern: "%r [%c] [%p] [%m]" },
			filename: `./logs/${moment().format("YYYY-MM-DD")}.log`,
		},
	},
	categories: { default: { appenders: ["std"], level: "ALL" } },
});
export const logger = getLogger("log");
