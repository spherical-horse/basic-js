const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members_array) {
    if (!Array.isArray(members_array)) {
        return false;
    }
    const firstLetters = [];
    members_array.forEach(element => {
        if (typeof(element) === 'string') {
            const firstLetter = element.trim().split('')[0].toUpperCase();
            firstLetters.push(firstLetter);
        }
    });
    return firstLetters.sort().join('');
};