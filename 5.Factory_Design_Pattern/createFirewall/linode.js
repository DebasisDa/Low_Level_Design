"use strict";
exports.__esModule = true;
exports.Linode = void 0;
var Linode = /** @class */ (function () {
    function Linode() {
    }
    /**
     * Create firewall
     */
    Linode.prototype.createFireWall = function () {
        console.log("Firewall created for provider - linode");
    };
    /**
     * Update database after create firewall
     */
    Linode.prototype.updateDatabaseAfterCreateFirewall = function () {
        console.log("Database updated, after creation firewall - linode");
    };
    return Linode;
}());
exports.Linode = Linode;
