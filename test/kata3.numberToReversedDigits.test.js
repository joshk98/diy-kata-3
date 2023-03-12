const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect((numberToReversedDigits(69))).toEqual([9, 6]);
    expect((numberToReversedDigits(1234))).toEqual([4, 3, 2, 1]);
  });
});