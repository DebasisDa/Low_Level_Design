"use strict";
exports.__esModule = true;
var debugLogger_1 = require("./debugLogger");
var errorLogger_1 = require("./errorLogger");
var infoLogger_1 = require("./infoLogger");
var loggerObj = new infoLogger_1.infoLogger(new debugLogger_1.debugLogger(new errorLogger_1.errorLogger(null)));
loggerObj.log(1, "Info log");
loggerObj.log(2, "Debug log");
loggerObj.log(3, "Error log");
