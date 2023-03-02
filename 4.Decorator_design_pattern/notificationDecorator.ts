import { RealTimeNotification } from "./realTimeNotification.interface";

export class notificationDecorator implements RealTimeNotification {
    obj: RealTimeNotification;

    constructor(obj: RealTimeNotification) {
        this.obj = obj;
    }

    sendRealTimeNotification() {
        this.obj.sendRealTimeNotification();
    }
}