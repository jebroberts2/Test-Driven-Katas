const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });

  it("Returns the string if the number is greater than the length of the string", () => {
    expect(wrap("kirsten", 10)).to.equal("kirsten");
  });

  it("Returns 2 strings if the length of the string is *slightly* longer than the number", () => {
    expect(wrap("kirsten likes dogs", 10)).to.equal("kirsten \nlikes dogs");
  });

  it("Splits strings at word boundaries", () => {
    expect(wrap("abc def ghi jkl", 10)).to.equal("abc def \nghi jkl");
  });

  it("Correctly splits strings that are much longer than the number passed in", () => {
    expect(
      wrap(
        "Four score and seven years ago, our fathers blah blah blah blah blah",
        20
      )
    ).to.equal(
      "Four score and seven \nyears ago, our \nfathers blah blah \nblah blah blah"
    );
  });
});
