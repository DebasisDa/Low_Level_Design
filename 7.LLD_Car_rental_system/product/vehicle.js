"use strict";
exports.__esModule = true;
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    //getters and setters
    Vehicle.prototype.getVehicleID = function () {
        return this.vehicleID;
    };
    Vehicle.prototype.setVehicleID = function (vehicleID) {
        this.vehicleID = vehicleID;
    };
    Vehicle.prototype.getVehicleNumber = function () {
        return this.vehicleNumber;
    };
    Vehicle.prototype.setVehicleNumber = function (vehicleNumber) {
        this.vehicleNumber = vehicleNumber;
    };
    Vehicle.prototype.getVehicleType = function () {
        return this.vehicleType;
    };
    Vehicle.prototype.setVehicleType = function (vehicleType) {
        this.vehicleType = vehicleType;
    };
    Vehicle.prototype.getCompanyName = function () {
        return this.companyName;
    };
    Vehicle.prototype.setCompanyName = function (companyName) {
        this.companyName = companyName;
    };
    Vehicle.prototype.getDailyRentalCost = function () {
        return this.dailyRentalCost;
    };
    Vehicle.prototype.setDailyRentalCost = function (dailyRentalCost) {
        this.dailyRentalCost = dailyRentalCost;
    };
    Vehicle.prototype.getHourlyRentalCost = function () {
        return this.hourlyRentalCost;
    };
    Vehicle.prototype.setHourlyRentalCost = function (hourlyRentalCost) {
        this.hourlyRentalCost = hourlyRentalCost;
    };
    Vehicle.prototype.getStatus = function () {
        return this.status;
    };
    Vehicle.prototype.setStatus = function (status) {
        this.status = status;
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
