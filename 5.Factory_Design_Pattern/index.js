"use strict";
exports.__esModule = true;
var do_1 = require("./createFirewall/do");
var linode_1 = require("./createFirewall/linode");
var upcloud_1 = require("./createFirewall/upcloud");
var vultr_1 = require("./createFirewall/vultr");
console.log("Start.......");
var cloudProviderFirewall = /** @class */ (function () {
    function cloudProviderFirewall() {
    }
    cloudProviderFirewall.prototype.createObj = function (value) {
        switch (value) {
            case 'linode':
                return new linode_1.Linode();
            case 'vultr':
                return new vultr_1.Vultr();
            case 'upcloud':
                return new upcloud_1.Upcloud();
            default:
                return new do_1.DigitalOcean;
        }
    };
    return cloudProviderFirewall;
}());
//start
var cloudObj = new cloudProviderFirewall();
var obj = cloudObj.createObj('linode');
obj.createFireWall();
obj.updateDatabaseAfterCreateFirewall();
