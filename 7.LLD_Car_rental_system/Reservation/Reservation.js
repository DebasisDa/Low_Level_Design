"use strict";
exports.__esModule = true;
exports.Reservation = void 0;
var ReservationStatus_1 = require("./ReservationStatus");
var ReservationType_1 = require("./ReservationType");
var Reservation = /** @class */ (function () {
    function Reservation() {
    }
    Reservation.prototype.createReserve = function (user, vehicle) {
        //generate new id
        this.reservationId = 12232;
        this.user = user;
        this.vehicle = vehicle;
        this.reservationType = ReservationType_1.ReservationType.DAILY;
        this.reservationStatus = ReservationStatus_1.ReservationStatus.SCHEDULED;
        return this.reservationId;
    };
    return Reservation;
}());
exports.Reservation = Reservation;
