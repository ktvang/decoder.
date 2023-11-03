const { expect } = require('chai');
const { substitution } = require('../src/substitution');

describe('substitution()', () => {
  it('should encode a message using a valid alphabet', () => {
    const customAlphabet = 'qwertyuiopasdfghjklzxcvbnm';
    expect(substitution('message', customAlphabet)).to.equal('dtllqut'); 
  });

  it('should decode a message using a valid alphabet', () => {
    const customAlphabet = 'xoyqmcgrukswaflnthdjpzibev'; 
    expect(substitution('rmwwlrm', customAlphabet, false)).to.equal('hellohe'); 
  });

  it('should return false for an invalid alphabet (length not 26)', () => {
    expect(substitution('message', 'short')).to.equal(false);
  });

  it('should return false for an alphabet with non-unique characters', () => {
    expect(substitution('message', 'abcabcabcabcabcabcabcabcyz')).to.equal(false);
  });

  it('should handle spaces and maintain them', () => {
    const customAlphabet = 'xoyqmcgrukswaflnthdjpzibev';
    expect(substitution('hello world', customAlphabet)).to.equal('rmwwl ilhwq');
  });
});