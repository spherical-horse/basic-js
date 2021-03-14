const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

    calculateDepth(arr, depth = 1) {
        if (depth === 1) {
            this.counters = [];
        }
        this.counters.push(depth);
        arr.forEach(element => {
            if (Array.isArray(element)) {
                this.calculateDepth(element, depth + 1);
            }
        });
        const result = Math.max.apply(null, this.counters);
        return result;
    }
};

// const test = new module.exports();
// console.log(test.calculateDepth([1, 2, 3, [4, 5]]));