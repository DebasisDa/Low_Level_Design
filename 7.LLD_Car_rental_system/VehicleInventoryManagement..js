"use strict";
exports.__esModule = true;
exports.VehicleInventoryManagement = void 0;
var VehicleInventoryManagement = /** @class */ (function () {
    function VehicleInventoryManagement(vehicles) {
        this.vehicles = vehicles;
    }
    VehicleInventoryManagement.prototype.getVehicles = function () {
        //filtering
        return this.vehicles;
    };
    VehicleInventoryManagement.prototype.setVehicles = function (vehicles) {
        this.vehicles = vehicles;
    };
    return VehicleInventoryManagement;
}());
exports.VehicleInventoryManagement = VehicleInventoryManagement;
