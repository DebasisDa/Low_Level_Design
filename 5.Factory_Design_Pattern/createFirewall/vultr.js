"use strict";
exports.__esModule = true;
exports.Vultr = void 0;
var Vultr = /** @class */ (function () {
    function Vultr() {
    }
    /**
     * Create firewall
     */
    Vultr.prototype.createFireWall = function () {
        console.log("Firewall created for provider - vultr");
    };
    /**
     * Update database after create firewall
     */
    Vultr.prototype.updateDatabaseAfterCreateFirewall = function () {
        console.log("Database updated, after creation firewall - vultr");
    };
    return Vultr;
}());
exports.Vultr = Vultr;
