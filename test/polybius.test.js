const { expect } = require('chai');
const { polybius } = require('../src/polybius');

describe('polybius()', () => {
  it("should convert both i/j to 42 when encoding", () => {
    const actual = polybius("jimmy", true);
    const expected = "4242232345"
    expect(actual).to.equal(expected);
  });
  it("should convert 42 to i/j when decoding", () => {
    const actual = polybius("4242232345", false);
    const expected = "ijijmmy";
    expect(actual).to.equal(expected);
  });
  it("ignore capital letters", () => {
    const actual = polybius("jimmy", true);
    const expected = "4242232345";
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces in messages", () => {
    const actual = polybius("Maintain spaces", true);
    const expected = "2311423344114233 345311315134";
    expect(actual).to.equal(expected);
  });
});

//Different test format since other was not working for me. 