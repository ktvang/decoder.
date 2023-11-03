const { expect } = require('chai');
const { caesar } = require('../src/caesar');

describe('caesar()', () => {
  it('should encode a message with a valid positive shift', () => {
    const shift = 3;
    expect(caesar('message', shift)).to.equal('phvvdjh'); 
  });

  it('should decode a message with a valid negative shift', () => {
    const shift = 3;
    expect(caesar('phvvdjh', shift, false)).to.equal('message'); 
  });

  it('should return false for an invalid shift (shift = 0)', () => {
    const shift = 0;
    expect(caesar('message', shift)).to.equal(false); 
  });

  it('should return false for an invalid shift (shift < -25)', () => {
    const shift = -26;
    expect(caesar('message', shift)).to.equal(false); 
  });

  it('should return false for an invalid shift (shift > 25)', () => {
    const shift = 26;
    expect(caesar('message', shift)).to.equal(false); 
  });

  it('should maintain spaces and non-alphabetic characters', () => {
    const shift = 3;
    expect(caesar('hello world!', shift)).to.equal('khoor zruog!'); 
  });
});