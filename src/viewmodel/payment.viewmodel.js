import { Member } from "./member.viewmodel";

export class Payment {
  constructor(data) {
    if (typeof data.payment_id !== 'number') throw new TypeError("payment_id must be a number");
    if (typeof data.amount !== 'number') throw new TypeError("amount must be a number");
    if (typeof data.member_id !== 'number') throw new TypeError("member_id must be a number");
    if (typeof data.transaction_id !== 'string') throw new TypeError("transaction_id must be a string");
    if (typeof data.status !== 'string') throw new TypeError("status must be a string");
    if (typeof data.is_delete !== 'boolean') throw new TypeError("is_delete must be a boolean");
    if (typeof data.created_on !== 'string') throw new TypeError("created_on must be a string");
    if (data.updated_on !== null && typeof data.updated_on !== 'string') {
      throw new TypeError("updated_on must be a string or null");
    }
    if (typeof data.member !== 'object') throw new TypeError("member must be an object");

    this.payment_id = data.payment_id;
    this.amount = data.amount;
    this.member_id = data.member_id;
    this.transaction_id = data.transaction_id;
    this.status = data.status;
    this.is_delete = data.is_delete;
    this.created_on = data.created_on;
    this.updated_on = data.updated_on;
    this.member = new Member(data.member);
  }
}
