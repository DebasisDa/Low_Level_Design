import { RealTimeNotification } from "./realTimeNotification.interface";

export class realTimeNotification implements RealTimeNotification {
    sendRealTimeNotification() {
        console.log("Sent Real Time Notification .... Done");
    }
}