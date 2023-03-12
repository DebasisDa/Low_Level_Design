import { Vehicle } from "./product/vehicle";

export class VehicleInventoryManagement {
    vehicles: Vehicle[];

    constructor(vehicles: Vehicle[]) {
        this.vehicles = vehicles;
    }

    public getVehicles(): Vehicle[] {
        //filtering
        return this.vehicles;
    }

    public setVehicles(vehicles: Vehicle[]) {
        this.vehicles = vehicles;
    }
}

