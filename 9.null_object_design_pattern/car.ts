import { vehicleI } from "./vehicle.interface";

export class Car implements vehicleI {
    vehicleTankCapacity(): number{
        return 50;
    }

    vehicleSeatCapacity(): number{
        return 6;
    }
}