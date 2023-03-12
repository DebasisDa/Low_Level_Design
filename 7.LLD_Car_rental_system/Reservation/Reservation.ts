import { Location } from "../Location";
import { Vehicle } from "../product/vehicle";
import { User } from "../User";
import { ReservationStatus } from "./ReservationStatus";
import { ReservationType } from "./ReservationType";

export class Reservation {
    reservationId: number;
    user: User;
    vehicle: Vehicle;
    bookingDate: Date;
    dateBookedFrom: Date;
    dateBookedTo: Date;
    fromTimeStamp: number;
    toTimeStamp: number;
    pickUpLocation: Location;
    dropLocation: Location;
    reservationType: ReservationType;
    reservationStatus: ReservationStatus;
    location: Location;

    public createReserve(user: User, vehicle: Vehicle): number{

        //generate new id
        this.reservationId = 12232;
        this.user=user;
        this.vehicle=vehicle;
        this.reservationType = ReservationType.DAILY;
        this.reservationStatus = ReservationStatus.SCHEDULED;
        return this.reservationId;
    }

    // CRUD operations

}
