"use strict";
exports.__esModule = true;
exports.ReservationStatus = void 0;
var ReservationStatus;
(function (ReservationStatus) {
    ReservationStatus[ReservationStatus["SCHEDULED"] = 0] = "SCHEDULED";
    ReservationStatus[ReservationStatus["INPROGRESS"] = 1] = "INPROGRESS";
    ReservationStatus[ReservationStatus["COMPLETED"] = 2] = "COMPLETED";
    ReservationStatus[ReservationStatus["CANCELLED"] = 3] = "CANCELLED";
})(ReservationStatus = exports.ReservationStatus || (exports.ReservationStatus = {}));
