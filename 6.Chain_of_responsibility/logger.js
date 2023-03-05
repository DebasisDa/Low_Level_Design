"use strict";
exports.__esModule = true;
exports.Logger = void 0;
var Logger = /** @class */ (function () {
    function Logger(next) {
        this.INFO = 1;
        this.DEBUG = 2;
        this.ERROR = 3;
        this.nextLogger = next;
    }
    Logger.prototype.log = function (level, msg) {
        if (this.nextLogger != null) {
            this.nextLogger.log(level, msg);
        }
    };
    return Logger;
}());
exports.Logger = Logger;
