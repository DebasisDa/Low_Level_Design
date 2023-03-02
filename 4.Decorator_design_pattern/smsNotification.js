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
exports.SMSnotification = void 0;
var notificationDecorator_1 = require("./notificationDecorator");
var SMSnotification = /** @class */ (function (_super) {
    __extends(SMSnotification, _super);
    function SMSnotification(obj) {
        return _super.call(this, obj) || this;
    }
    SMSnotification.prototype.sendSMSNotification = function () {
        console.log("Sent SMS Notification .... Done");
    };
    SMSnotification.prototype.sendRealTimeNotification = function () {
        _super.prototype.sendRealTimeNotification.call(this);
        this.sendSMSNotification();
        return;
    };
    return SMSnotification;
}(notificationDecorator_1.notificationDecorator));
exports.SMSnotification = SMSnotification;
