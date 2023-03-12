import { Location } from "./Location";
import { Vehicle } from "./product/vehicle";
import { VehicleType } from "./product/vehicleType";
import { Reservation } from "./Reservation/Reservation";
import { User } from "./User";
import { VehicleInventoryManagement } from "./VehicleInventoryManagement.";

export class Store {
    storeId: number;
    inventoryManagement : VehicleInventoryManagement;
    storeLocation: Location;
    reservations: Reservation[]


    constructor(){
        this.reservations = [];
    }
    public getVehicles(vehicleType: VehicleType): Vehicle[] {
        return this.inventoryManagement.getVehicles();
    }


    //addVehicles, update vehicles, use inventory management to update those.
    public setVehicles (vehicles: Vehicle[]) {
    this.inventoryManagement = new VehicleInventoryManagement(vehicles);
}

    public createReservation(vehicle: Vehicle, user: User): Reservation{
    let reservation: Reservation = new Reservation();
    reservation.createReserve(user, vehicle);
    this.reservations.push(reservation);
    return reservation;
}

    public completeReservation(reservationID: number): boolean {
    //take out the reservation from the list and call complete the reservation method.
    return true;
}

    //update reservation
}
