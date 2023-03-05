export abstract class Logger {
    INFO = 1;
    DEBUG = 2;
    ERROR = 3;

    nextLogger: Logger| null;
    constructor(next: Logger | null) {
        this.nextLogger = next;
    }

    log(level, msg) {
        if (this.nextLogger != null) {
            this.nextLogger.log(level, msg);
        }
    }

}