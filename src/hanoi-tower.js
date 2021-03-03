const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const movesToSolve = 2 ** disksNumber - 1;
    const secondsToSolve = Math.floor(movesToSolve * 3600 / turnsSpeed);
    return {
        turns: movesToSolve,
        seconds: secondsToSolve
    }
};