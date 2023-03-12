import { Status } from "./status";
import { VehicleType } from "./vehicleType";

export class Vehicle {
    vehicleID: number;
    vehicleNumber: number;
    vehicleType: VehicleType;
    companyName: String;
    dailyRentalCost: number;
    hourlyRentalCost: number;
    status: Status;

    //getters and setters
    public getVehicleID(): number {
        return this.vehicleID;
    }

    public setVehicleID(vehicleID: number) {
        this.vehicleID = vehicleID;
    }

    public getVehicleNumber(): number {
        return this.vehicleNumber;
    }

    public setVehicleNumber(vehicleNumber: number) {
        this.vehicleNumber = vehicleNumber;
    }

    public getVehicleType(): VehicleType {
        return this.vehicleType;
    }

    public setVehicleType(vehicleType: VehicleType) {
        this.vehicleType = vehicleType;
    }

    public getCompanyName(): String {
        return this.companyName;
    }

    public setCompanyName(companyName: String) {
        this.companyName = companyName;
    }

    public getDailyRentalCost(): number {
        return this.dailyRentalCost;
    }

    public setDailyRentalCost(dailyRentalCost: number) {
        this.dailyRentalCost = dailyRentalCost;
    }

    public getHourlyRentalCost(): number {
        return this.hourlyRentalCost;
    }

    public setHourlyRentalCost(hourlyRentalCost: number) {
        this.hourlyRentalCost = hourlyRentalCost;
    }

    public getStatus(): Status {
        return this.status;
    }

    public setStatus(status: Status) {
        this.status = status;
    }
}

