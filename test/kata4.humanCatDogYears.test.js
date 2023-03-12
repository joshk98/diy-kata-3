const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  test("returns an array of three numbers in human, cat, and dog years respectively when passed human years", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
    expect(humanCatDogYears(0)).toEqual([0, 0, 0]);
  });
});
