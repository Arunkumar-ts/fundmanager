export class Member {
  constructor(data) {
    if (typeof data.member_id !== 'number') throw new TypeError("member_id must be a number");
    if (typeof data.member_name !== 'string') throw new TypeError("member_name must be a string");
    if (typeof data.email !== 'string') throw new TypeError("email must be a string");
    if (data.phone_no !== null && typeof data.phone_no !== 'string') {
      throw new TypeError("phone_no must be a string or null");
    }
    if (typeof data.is_delete !== 'boolean') throw new TypeError("is_delete must be a boolean");
    if (typeof data.created_on !== 'string') throw new TypeError("created_on must be a string");
    if (data.updated_on !== null && typeof data.updated_on !== 'string') {
      throw new TypeError("updated_on must be a string or null");
    }

    this.member_id = data.member_id;
    this.member_name = data.member_name;
    this.email = data.email;
    this.phone_no = data.phone_no;
    this.is_delete = data.is_delete;
    this.created_on = data.created_on;
    this.updated_on = data.updated_on;
  }
}
