// client/app/domain/trade/Trade.js

"use strict";

export class Trade {
  constructor(_date, _amount, _price) {
    if (!_date) throw new Error("Date is required");
    if (_amount === null || _amount === undefined)
      throw new Error("Amount is required");
    if (!Number.isInteger(_amount))
      throw new Error("Amount should be an integer number");
    if (_amount < 0) throw new Error("Amount should be a positive number");
    if (_amount === 0) throw new Error("Amount must be greater than zero");
    if (_price === null || _price === undefined)
      throw new Error("Price is required");
    if (_price < 0) throw new Error("Price should be a positive number");
    if (_price === 0) throw new Error("Price must be greater than zero");

    Object.assign(this, { _amount, _price });
    this._date = new Date(_date.getTime());
    Object.freeze(this);
  }

  get volume() {
    return this._amount * this._price;
  }

  get date() {
    return new Date(this._date.getTime());
  }

  get amount() {
    return this._amount;
  }

  get price() {
    return this._price;
  }
}
