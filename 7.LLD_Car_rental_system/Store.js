"use strict";
exports.__esModule = true;
exports.Store = void 0;
var Reservation_1 = require("./Reservation/Reservation");
var VehicleInventoryManagement_1 = require("./VehicleInventoryManagement.");
var Store = /** @class */ (function () {
    function Store() {
        this.reservations = [];
    }
    Store.prototype.getVehicles = function (vehicleType) {
        return this.inventoryManagement.getVehicles();
    };
    //addVehicles, update vehicles, use inventory management to update those.
    Store.prototype.setVehicles = function (vehicles) {
        this.inventoryManagement = new VehicleInventoryManagement_1.VehicleInventoryManagement(vehicles);
    };
    Store.prototype.createReservation = function (vehicle, user) {
        var reservation = new Reservation_1.Reservation();
        reservation.createReserve(user, vehicle);
        this.reservations.push(reservation);
        return reservation;
    };
    Store.prototype.completeReservation = function (reservationID) {
        //take out the reservation from the list and call complete the reservation method.
        return true;
    };
    return Store;
}());
exports.Store = Store;
