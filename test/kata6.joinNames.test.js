const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
    ).toBe("Bart, Lisa & Maggie");
  });
  test("if string of two names, returns a string with them separated by an ampersand", () => {
    expect(joinNames([{ name: "Bart" }, { name: "Lisa" }])).toBe("Bart & Lisa");
  });
  test("if string is one name, return name", () => {
    expect(joinNames([{ name: "Bart" }])).toBe("Bart");
  });
});
