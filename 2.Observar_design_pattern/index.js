"use strict";
exports.__esModule = true;
var iPhonePublisher_publisher_1 = require("./publisher/iPhonePublisher.publisher");
var subscriber_1 = require("./subscriber/subscriber");
//Object creation
var iPhonePublisherObj = new iPhonePublisher_publisher_1.iPhonePublisher();
var subscriberObj1 = new subscriber_1.subscriber("Debasis Das");
var subscriberObj2 = new subscriber_1.subscriber("Suraj Rout");
var subscriberObj3 = new subscriber_1.subscriber("Helal Abbas");
//subscripe
iPhonePublisherObj.subscriber(subscriberObj1);
iPhonePublisherObj.subscriber(subscriberObj2);
iPhonePublisherObj.updateStock(10);
