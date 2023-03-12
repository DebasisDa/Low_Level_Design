import { PaymentMode } from "./PaymentMode";

export class PaymentDetails {
    paymentId: number;
    amountPaid: number;
    dateOfPayment: Date;
    isRefundable: boolean;
    paymentMode: PaymentMode;

}
