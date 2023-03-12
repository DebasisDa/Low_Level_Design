import { Operaion } from "./opearion";
import { OperationInterface } from "./operaion.interface";

export class OperaionProxy implements OperationInterface {
    operaion : Operaion;

    constructor(obj:Operaion){
        this.operaion = obj;
    }

    sub(value1, valu2){
        if(value1 < valu2) throw new Error('First value should greater then second value.');
        return this.operaion.sub(value1, valu2);
    }
}