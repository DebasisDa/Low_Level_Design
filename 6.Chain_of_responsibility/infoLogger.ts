import { Logger } from "./logger";

export class infoLogger extends Logger {

    constructor(next: Logger | null) {
        super(next);
    }

    log(level, msg) {
        if (level == this.INFO) {
            console.log("Info log :: ", msg);
        } else {
            if(this.nextLogger != null){
            this.nextLogger.log(level, msg);
            }
        }
    }
}