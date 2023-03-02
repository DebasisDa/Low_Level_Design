import { iPhonePublisher } from "./publisher/iPhonePublisher.publisher";
import { subscriber } from "./subscriber/subscriber";

//Object creation
const iPhonePublisherObj = new iPhonePublisher() 
const subscriberObj1 = new subscriber("Debasis Das");
const subscriberObj2 = new subscriber("Suraj Rout");
const subscriberObj3 = new subscriber("Helal Abbas");

//subscripe
iPhonePublisherObj.subscriber(subscriberObj1);
iPhonePublisherObj.subscriber(subscriberObj2);

iPhonePublisherObj.updateStock(10);
