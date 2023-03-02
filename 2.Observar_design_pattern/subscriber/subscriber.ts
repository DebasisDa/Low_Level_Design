import { subscriberInterface } from "./subscriber.interface";

export class subscriber implements subscriberInterface{
    userName;

    constructor(name){
        this.userName = name;
    }
    notify(obj){
        console.log("Email notify to "+this.userName +' ----> '+ obj.constructor.name 
        +'  -->  '+ obj.iphoneStock);
    }
}