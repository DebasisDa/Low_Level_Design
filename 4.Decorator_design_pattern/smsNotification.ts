import { notificationDecorator } from "./notificationDecorator";
import { RealTimeNotification } from "./realTimeNotification.interface";


export class SMSnotification extends notificationDecorator {

    constructor(obj: RealTimeNotification) {
        super(obj);
    }

    sendSMSNotification () {
        console.log("Sent SMS Notification .... Done");
    }

    sendRealTimeNotification() {
        super.sendRealTimeNotification();
        this.sendSMSNotification();
        return;
    }
}