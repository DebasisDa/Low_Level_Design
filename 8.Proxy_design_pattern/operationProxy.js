"use strict";
exports.__esModule = true;
exports.OperaionProxy = void 0;
var OperaionProxy = /** @class */ (function () {
    function OperaionProxy(obj) {
        this.operaion = obj;
    }
    OperaionProxy.prototype.sub = function (value1, valu2) {
        if (value1 < valu2)
            throw new Error('First value should greater then second value.');
        return this.operaion.sub(value1, valu2);
    };
    return OperaionProxy;
}());
exports.OperaionProxy = OperaionProxy;
