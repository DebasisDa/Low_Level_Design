"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.getUserId = function () {
        return this.userId;
    };
    User.prototype.setUserId = function (userId) {
        this.userId = userId;
    };
    User.prototype.getUserName = function () {
        return this.userName;
    };
    User.prototype.setUserName = function (userName) {
        this.userName = userName;
    };
    User.prototype.getDrivingLicense = function () {
        return this.drivingLicense;
    };
    User.prototype.setDrivingLicense = function (drivingLicense) {
        this.drivingLicense = drivingLicense;
    };
    return User;
}());
exports.User = User;
