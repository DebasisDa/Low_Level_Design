import { Logger } from "./logger";

export class debugLogger extends Logger {

    constructor(next: Logger | null) {
        super(next);
    }

    log(level, msg) {
        if (level == this.DEBUG) {
            console.log("Debug log :: ", msg);
        } else {
            if(this.nextLogger != null){
            this.nextLogger.log(level, msg);
            }
        }
    }
}