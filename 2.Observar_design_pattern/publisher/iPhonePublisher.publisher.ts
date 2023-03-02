import { subscriberInterface } from "../subscriber/subscriber.interface";
import { publisher } from "./publisher.interface";

export class iPhonePublisher implements publisher {
    subsriberLists : subscriberInterface[] = [];
    iphoneStock;

    constructor() {
        this.iphoneStock = 0;
    }

    subscriber(obj: subscriberInterface): void {
        this.subsriberLists.push(obj);
    }

    unSubscribe(): void {

    }

    updateStock(data): void {
        if(this.iphoneStock == 0 && data >= 1){
            this.iphoneStock = data;
            this.subsriberLists.map((ele) => {
                ele.notify(this);
            })
        } else {
            this.iphoneStock = data;
        }
        return;
    }
}