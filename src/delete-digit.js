const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digits = Array.from(String(n), Number);  // Convert integer to array of digits
  let maxNum = 0;
  for (let i = 0; i < digits.length; i++) {
    let numWithoutDigitI = Number(digits.filter((d, j) => j !== i).join(''));
    if (numWithoutDigitI > maxNum) {
      maxNum = numWithoutDigitI;
    }
  }
  return maxNum;
}


module.exports = {
  deleteDigit
};
