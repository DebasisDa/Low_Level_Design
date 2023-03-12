"use strict";
exports.__esModule = true;
exports.Bill = void 0;
var Bill = /** @class */ (function () {
    function Bill(reservation) {
        this.reservation = reservation;
        this.totalBillAmount = this.computeBillAmount();
        this.isBillPaid = false;
    }
    Bill.prototype.computeBillAmount = function () {
        return 100.0;
    };
    return Bill;
}());
exports.Bill = Bill;
