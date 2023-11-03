// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function isShiftValid(shift) {
    return shift !== 0 && shift >= -25 && shift <= 25;
  }

  function caesar(input, shift, encode = true) {
    if (!isShiftValid(shift)) return false;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    input = input.toLowerCase();

    for (let char of input) {
      if (char === ' ') {
        result += ' ';
      } else if (alphabet.includes(char)) {
        const currentIndex = alphabet.indexOf(char);
        let newIndex = currentIndex + (encode ? shift : -shift);

        if (newIndex < 0) {
          newIndex += 26;
        } else if (newIndex >= 26) {
          newIndex -= 26;
        }
        result += alphabet[newIndex];
      } else {
        result += char;
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
