import { vehicleI } from "./vehicle.interface";
import { Car } from "./car";
import { Null } from "./null";

export class vehicleFactory {
    getVehicleObject(type): vehicleI {
        if(type == 'CAR'){
            return new Car;
        }
         else {
            return new Null;
        }
    }
}