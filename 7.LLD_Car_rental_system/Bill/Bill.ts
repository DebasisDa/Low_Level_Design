import { Reservation } from "../Reservation/Reservation";

export class Bill {
    reservation: Reservation;
    totalBillAmount: number;
    isBillPaid: boolean;

    constructor(reservation: Reservation) {
        this.reservation = reservation;
        this.totalBillAmount = this.computeBillAmount();
        this.isBillPaid = false;
    }

    private computeBillAmount(): number{

        return 100.0;
    }

}
