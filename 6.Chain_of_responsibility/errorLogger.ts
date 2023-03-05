import { Logger } from "./logger";

export class errorLogger extends Logger {

    constructor(next: Logger | null) {
        super(next);
    }

    log(level, msg) {
        if (level == this.ERROR) {
            console.log("Error log :: ", msg);
        } else {
            if(this.nextLogger != null){
            this.nextLogger.log(level, msg);
            }
        }
    }
}