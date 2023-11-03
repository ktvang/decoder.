// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function isAlphabetValid(alphabet) {
    if (!alphabet || alphabet.length !== 26) return false;
    const uniqueChars = new Set();
    for (let char of alphabet) {
      if (uniqueChars.has(char)) return false;
      uniqueChars.add(char);
    }
    return true;
  }

  function substitution(input, alphabet, encode = true) {
    if (!isAlphabetValid(alphabet)) return false;

    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let char of input.toLowerCase()) {
      if (char === ' ') {
        result += ' ';
      } else {
        const index = encode ? standardAlphabet.indexOf(char) : alphabet.indexOf(char);
        if (index !== -1) {
          result += encode ? alphabet[index] : standardAlphabet[index];
        }
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

