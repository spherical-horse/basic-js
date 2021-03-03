const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats_array) {
    count = 0;
    cats_array.forEach(element => {
        element.forEach(item => {
            if (item === '^^') {
                count = count + 1;
            }
        })
    });
    return count;
};