const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (!sampleActivity) {
        return false;
    }
    if (typeof(sampleActivity) !== 'string') {
        return false;
    }
    n = parseFloat(sampleActivity);
    if (isNaN(n)) {
        return false;
    }
    if (n <= 0 || n > MODERN_ACTIVITY) {
        return false;
    }
    const k = 0.693 / HALF_LIFE_PERIOD;
    return Math.ceil(Math.log(MODERN_ACTIVITY / n) / k);
};