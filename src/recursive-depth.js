const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1) {
        // console.log(arr);
        arr.forEach(element => {
            if (Array.isArray(element)) {
                this.calculateDepth(element, depth + 1);
            } else {
                return depth;
            }
        });
        // return depth;
    }
};

const test = new module.exports();
console.log(test.calculateDepth([1, 2, 3, [4, 5]]));