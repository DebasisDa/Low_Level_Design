"use strict";
exports.__esModule = true;
exports.subscriber = void 0;
var subscriber = /** @class */ (function () {
    function subscriber(name) {
        this.userName = name;
    }
    subscriber.prototype.notify = function (obj) {
        console.log("Email notify to " + this.userName + ' ----> ' + obj.constructor.name
            + '  -->  ' + obj.iphoneStock);
    };
    return subscriber;
}());
exports.subscriber = subscriber;
