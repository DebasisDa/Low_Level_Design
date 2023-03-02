var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    EmailNotification.prototype.sendNotification = function () {
        console.log("Send notification to email");
    };
    return EmailNotification;
}());
var RealTimeNotification = /** @class */ (function () {
    function RealTimeNotification() {
    }
    RealTimeNotification.prototype.sendNotification = function () {
        console.log("Send notification to browser using socket I/O");
    };
    return RealTimeNotification;
}());
var MobileNotification = /** @class */ (function () {
    function MobileNotification() {
    }
    MobileNotification.prototype.sendNotification = function () {
        console.log("Send notification to user mobile via message");
    };
    return MobileNotification;
}());
var WhatsappNotification = /** @class */ (function () {
    function WhatsappNotification() {
    }
    WhatsappNotification.prototype.sendNotification = function () {
        console.log("Send notification to user whatsapp");
    };
    return WhatsappNotification;
}());
var NotificationClass = /** @class */ (function () {
    function NotificationClass(strategy) {
        this.strategy = strategy;
    }
    NotificationClass.prototype.setSrategy = function (strategy) {
        this.strategy = strategy;
    };
    NotificationClass.prototype.notification = function () {
        this.strategy.sendNotification();
    };
    return NotificationClass;
}());
var notificationObj = new NotificationClass(new EmailNotification);
notificationObj.notification();
