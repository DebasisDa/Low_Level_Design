import { Operaion } from "./opearion";
import { OperationInterface } from "./operaion.interface";
import { OperaionProxy } from "./operationProxy";

console.log("====================START===================================>>");
let obj : OperationInterface = new OperaionProxy(new Operaion());
console.log("Logging .....");
console.log(obj.sub(30, 20));
console.log("Event published...");
console.log("=====================END=====================================>>>");