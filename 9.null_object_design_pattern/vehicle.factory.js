"use strict";
exports.__esModule = true;
exports.vehicleFactory = void 0;
var car_1 = require("./car");
var null_1 = require("./null");
var vehicleFactory = /** @class */ (function () {
    function vehicleFactory() {
    }
    vehicleFactory.prototype.getVehicleObject = function (type) {
        if (type == 'CAR') {
            return new car_1.Car;
        }
        else {
            return new null_1.Null;
        }
    };
    return vehicleFactory;
}());
exports.vehicleFactory = vehicleFactory;
