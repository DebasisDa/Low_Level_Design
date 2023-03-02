"use strict";
exports.__esModule = true;
exports.iPhonePublisher = void 0;
var iPhonePublisher = /** @class */ (function () {
    function iPhonePublisher() {
        this.subsriberLists = [];
        this.iphoneStock = 0;
    }
    iPhonePublisher.prototype.subscriber = function (obj) {
        this.subsriberLists.push(obj);
    };
    iPhonePublisher.prototype.unSubscribe = function () {
    };
    iPhonePublisher.prototype.updateStock = function (data) {
        var _this = this;
        if (this.iphoneStock == 0 && data >= 1) {
            this.iphoneStock = data;
            this.subsriberLists.map(function (ele) {
                ele.notify(_this);
            });
        }
        else {
            this.iphoneStock = data;
        }
        return;
    };
    return iPhonePublisher;
}());
exports.iPhonePublisher = iPhonePublisher;
