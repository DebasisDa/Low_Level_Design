"use strict";
exports.__esModule = true;
exports.DigitalOcean = void 0;
var DigitalOcean = /** @class */ (function () {
    function DigitalOcean() {
    }
    /**
     * Create firewall
     */
    DigitalOcean.prototype.createFireWall = function () {
        console.log("Firewall created for provider - Digital ocean");
    };
    /**
     * Update database after create firewall
     */
    DigitalOcean.prototype.updateDatabaseAfterCreateFirewall = function () {
        console.log("Database updated, after creation firewall - Digital ocean");
    };
    return DigitalOcean;
}());
exports.DigitalOcean = DigitalOcean;
