const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('arr parameter must be an instance of the Array!');
  }

  const result = [];
  let discardNext = false;
  let discardPrev = false;
  let doubleNext = false;
  let doublePrev = false;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (discardNext) {
      discardNext = false;
      continue;
    }

    if (discardPrev) {
      if (result.length > 0) {
        result.pop();
      }
      discardPrev = false;
    }

    if (doubleNext) {
      doubleNext = false;
      if (i + 1 < arr.length) {
        result.push(current, arr[i + 1]);
      }
    } else if (doublePrev) {
      doublePrev = false;
      if (result.length > 0) {
        result.push(result[result.length - 1]);
      }
    } else {
      if (current === '--discard-next') {
        discardNext = true;
      } else if (current === '--discard-prev') {
        discardPrev = true;
      } else if (current === '--double-next') {
        doubleNext = true;
      } else if (current === '--double-prev') {
        doublePrev = true;
      } else {
        result.push(current);
      }
    }
  }

  return result;
}


module.exports = {
  transform
};
