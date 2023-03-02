import { Emailnotification } from "./emailNotification";
import { realTimeNotification } from "./realTimeNotification";
import { RealTimeNotification } from "./realTimeNotification.interface";
import { SMSnotification } from "./smsNotification";

const notificationobj  = new SMSnotification(  new Emailnotification (new  realTimeNotification()));
notificationobj.sendRealTimeNotification();