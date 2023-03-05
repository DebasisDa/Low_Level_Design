"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.infoLogger = void 0;
var logger_1 = require("./logger");
var infoLogger = /** @class */ (function (_super) {
    __extends(infoLogger, _super);
    function infoLogger(next) {
        return _super.call(this, next) || this;
    }
    infoLogger.prototype.log = function (level, msg) {
        if (level == this.INFO) {
            console.log("Info log :: ", msg);
        }
        else {
            if (this.nextLogger != null) {
                this.nextLogger.log(level, msg);
            }
        }
    };
    return infoLogger;
}(logger_1.Logger));
exports.infoLogger = infoLogger;
