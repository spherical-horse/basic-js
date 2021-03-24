const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const result = [];
  let discardNext = false;
  arr.forEach((element, index) => {
    console.log(element);
    if (element === '--discard-prev') {
      result[index - 1] = '';
    } else if (element === '--double-prev') {
      if (index > 0) {
        result.push(result[index - 1]);
      }
    } else if (element === '--double-next') {
      if (index + 1 < arr.length) {
        result.push(arr[index + 1])
        // console.log(arr)
      } 
    } else if (element === '--discard-next') {
      discardNext = true;
    } else {
      if (!discardNext) {
        result.push(element);
      } else {
        result.push('');
        discardNext = false;
      }
    }
  });
  const res = result.filter((x) => x !== '' && typeof x !== 'undefined');
  return res;
};

console.log(module.exports([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]));