import { debugLogger } from "./debugLogger";
import { errorLogger } from "./errorLogger";
import { infoLogger } from "./infoLogger";
import { Logger } from "./logger";

let loggerObj: Logger   = new infoLogger( new debugLogger(new errorLogger(null)));
loggerObj.log(1, "Info log");
loggerObj.log(2, "Debug log");
loggerObj.log(3, "Error log");