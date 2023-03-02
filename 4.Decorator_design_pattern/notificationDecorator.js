"use strict";
exports.__esModule = true;
exports.notificationDecorator = void 0;
var notificationDecorator = /** @class */ (function () {
    function notificationDecorator(obj) {
        this.obj = obj;
    }
    notificationDecorator.prototype.sendRealTimeNotification = function () {
        this.obj.sendRealTimeNotification();
    };
    return notificationDecorator;
}());
exports.notificationDecorator = notificationDecorator;
