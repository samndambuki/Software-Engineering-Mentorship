const { sumNumbers } = require("./solution");

describe("sumNumbers", () => {
  it("should return 0 if the string is empty", () => {
    const string = "";
    const expectedSum = 0;
    const actualSum = sumNumbers(string);
    expect(actualSum).toEqual(expectedSum);
  });
});
