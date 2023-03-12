"use strict";
exports.__esModule = true;
exports.VehicleRentalSystem = void 0;
var VehicleRentalSystem = /** @class */ (function () {
    function VehicleRentalSystem(stores, users) {
        this.storeList = stores;
        this.userList = users;
    }
    VehicleRentalSystem.prototype.getStore = function (location) {
        //based on location, we will filter out the Store from storeList.
        return this.storeList[0];
    };
    return VehicleRentalSystem;
}());
exports.VehicleRentalSystem = VehicleRentalSystem;
