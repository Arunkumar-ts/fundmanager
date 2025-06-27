import { Payment } from "./payment.viewmodel";

export class PaymentData {
  constructor(data) {
    if (typeof data.totalRows !== 'number') throw new TypeError("totalRows must be a number");
    if (!Array.isArray(data.payments)) throw new TypeError("payments must be an array");

    this.totalRows = data.totalRows;
    this.payments = data.payments.map(p => new Payment(p));
  }
}
