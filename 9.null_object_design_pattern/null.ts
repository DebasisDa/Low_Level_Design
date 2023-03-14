import { vehicleI } from "./vehicle.interface";

export class Null implements vehicleI {
    vehicleTankCapacity(): number{
        return 0;
    }

    vehicleSeatCapacity(): number{
        return 0;
    }
}