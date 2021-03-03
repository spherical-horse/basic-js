const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    try {
        if (typeof(str) === 'object') {
            str = '' + str;
        } else {
            str = str.toString();
        }
    } catch (err) {
        if (str === null) {
            str = 'null';
        }
    }
    if (!options) {
        return '';
    } else {
        if (!options.repeatTimes) {
            options.repeatTimes = 1;
        }
        if (!options.separator) {
            options.separator = '+';
        }
        if (!options.additionSeparator) {
            options.additionSeparator = '|';
        }
        if (!options.additionRepeatTimes) {
            options.additionRepeatTimes = 0;
        }
        try {
            if (typeof(options.addition) === 'object') {
                str = '' + str;
            } else {
                options.addition = options.addition.toString();
            }
        } catch (err) {
            if (options.addition === null) {
                options.addition = 'null';
            }
        }
        if (options.addition === null) {
            options.addition = 'null';
        }
    }
    let substringAsArray = [];
    for (let i = 0; i < options.additionRepeatTimes; i++) {
        substringAsArray.push(options.addition);
    }
    if (options.additionRepeatTimes === 0) {
        substringAsArray = [options.addition];
    }
    const substring = str + substringAsArray.join(options.additionSeparator);
    const strAsArray = [];
    for (let i = 0; i < options.repeatTimes; i++) {
        strAsArray.push(substring);
    }
    return strAsArray.join(options.separator);
};