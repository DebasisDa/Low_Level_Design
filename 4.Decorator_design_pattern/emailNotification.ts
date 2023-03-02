import { notificationDecorator } from "./notificationDecorator";
import { RealTimeNotification } from "./realTimeNotification.interface";


export class Emailnotification extends notificationDecorator {

    constructor(obj: RealTimeNotification) {
        super(obj);
    }

    sendEmailNotification () {
        console.log("Sent Email Notification .... Done");
    }

    sendRealTimeNotification() {
        super.sendRealTimeNotification();
        this.sendEmailNotification();
        return;
    }
}