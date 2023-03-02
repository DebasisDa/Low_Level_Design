"use strict";
exports.__esModule = true;
exports.Upcloud = void 0;
var Upcloud = /** @class */ (function () {
    function Upcloud() {
    }
    /**
     * Create firewall
     */
    Upcloud.prototype.createFireWall = function () {
        console.log("Firewall created for provider - upcloud");
    };
    /**
     * Update database after create firewall
     */
    Upcloud.prototype.updateDatabaseAfterCreateFirewall = function () {
        console.log("Database updated, after creation firewall - upcloud");
    };
    return Upcloud;
}());
exports.Upcloud = Upcloud;
