const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1, counters = []) {
        counters.push(depth);
        // console.log(counters);
        arr.forEach(element => {
            if (Array.isArray(element)) {
                this.calculateDepth(element, depth + 1, counters);
            }
        });
        return Math.max.apply(null, counters);
    }
};

const test = new module.exports();
// console.log(test.calculateDepth([1, 2, 3, [4, 5]]));