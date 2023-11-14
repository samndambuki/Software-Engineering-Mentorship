const { reverseInteger } = require("./solution");

describe("reverse integer", () => {
  it("should reverse a positive integer", () => {
    const result = reverseInteger(500);
    expect(result).toBe(5);
  });

  it("should reverse a negative integer", () => {
    const result = reverseInteger(-56);
    expect(result).toBe(-65);
  });

  it("should handle a negative integer ending with zero", () => {
    const result = reverseInteger(-90);
    expect(result).toBe(-9);
  });
});
