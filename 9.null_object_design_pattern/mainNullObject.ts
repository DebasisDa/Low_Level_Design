import { vehicleFactory } from "./vehicle.factory";

console.log("==========================START=============================>>>>>>>");
let factoryObj : vehicleFactory = new vehicleFactory();


let obj = factoryObj.getVehicleObject('CAR');
console.log(obj.vehicleSeatCapacity());
console.log(obj.vehicleTankCapacity());

let obj2 = factoryObj.getVehicleObject('BIKE');
console.log(obj2.vehicleSeatCapacity());
console.log(obj2.vehicleTankCapacity());

console.log("===========================END================================>>>>>");