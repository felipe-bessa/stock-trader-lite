// client/tests/Trade.test.js

import { Trade } from "../app/domain/trade/Trade.js";

describe("Trade Model", () => {
  const date = new Date(2026, 2, 10); // 10 de Março de 2026
  const amount = 10;
  const price = 150.0;

  it("should require a valid date (cannot be null or undefined)", () => {
    expect(() => new Trade(null, amount, price)).toThrow("Date is required");
    expect(() => new Trade(undefined, amount, price)).toThrow(
      "Date is required"
    );
  });

  it("should require a valid amount (cannot be null, undefined or negative number)", () => {
    expect(() => new Trade(date, 1.5, price)).toThrow(
      "Amount should be an integer number"
    );
    expect(() => new Trade(date, -1, price)).toThrow(
      "Amount should be a positive number"
    );
    expect(() => new Trade(date, 0, price)).toThrow(
      "Amount must be greater than zero"
    );
    expect(() => new Trade(date, null, price)).toThrow("Amount is required");
    expect(() => new Trade(date, undefined, price)).toThrow(
      "Amount is required"
    );
  });

  it("should require a valid price (cannot be null, undefined or negative number)", () => {
    expect(() => new Trade(date, amount, -1)).toThrow(
      "Price should be a positive number"
    );
    expect(() => new Trade(date, amount, 0)).toThrow(
      "Price must be greater than zero"
    );
    expect(() => new Trade(date, amount, null)).toThrow("Price is required");
    expect(() => new Trade(date, amount, undefined)).toThrow(
      "Price is required"
    );
  });

  it("should calculate the volume correctly as a read-only property", () => {
    const trade = new Trade(date, amount, price);
    expect(trade.volume).toBe(1500.0);

    trade.volume = 9999;
    trade._volume = 9999;
    expect(trade.volume).toBe(1500.0);
  });

  it("should not be able to change a Trade state (Immutability)", () => {
    const trade = new Trade(date, amount, price);
    expect(Object.isFrozen(trade)).toBeTruthy();
  });

  it("should be protected against external date mutation (Immutability)", () => {
    const dayTrade = new Date(2020, 4, 30);
    const trade = new Trade(dayTrade, amount, price);
    dayTrade.setDate(25);
    expect(trade.date.getDate()).toBe(30);
  });

  it("should not allow internal date mutation via getter (Immutability)", () => {
    const trade = new Trade(date, amount, price);
    trade.date.setDate(25);
    expect(trade.date.getDate()).toBe(10);
  });

  it("should not be able to change a Trade amount (Immutability)", () => {
    const trade = new Trade(date, amount, price);

    trade.amount = 2;
    trade._amount = 2;

    expect(trade.amount).toBe(amount);
  });

  it("should not be able to change a Trade price (Immutability)", () => {
    const trade = new Trade(date, amount, price);

    trade.price = 3.14;
    trade._price = 3.14;

    expect(trade.price).toBe(price);
  });
});
