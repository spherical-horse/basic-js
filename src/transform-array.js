const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    const result = [];
    let discardNext = false;
    arr.forEach((element, index) => {
        if (element === '--discard-prev') {
            result.pop();
        } else if (element === '--double-prev') {
            if (index > 0) {
                result.push(arr[index - 1]);
            }
        } else if (element === '--double-next') {
            if (index + 1 > arr.length) {
                result.push(arr[index + 1])
            }
        } else if (element === '--discard-next') {
            discardNext = true;
        } else {
            if (!discardNext) {
                result.push(element);
            } else {
                discardNext = false;
            }
        }
    });
    return result;
};

// console.log(module.exports([1, 2, 3, '--discard-next', 4, 5]));