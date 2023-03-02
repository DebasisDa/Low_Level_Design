"use strict";
exports.__esModule = true;
var emailNotification_1 = require("./emailNotification");
var realTimeNotification_1 = require("./realTimeNotification");
var smsNotification_1 = require("./smsNotification");
var notificationobj = new smsNotification_1.SMSnotification(new emailNotification_1.Emailnotification(new realTimeNotification_1.realTimeNotification()));
notificationobj.sendRealTimeNotification();
