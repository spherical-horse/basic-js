const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date_object) {
    if (!date_object) {
        return 'Unable to determine the time of year!';
    }
    date_object.getUTCHours(); // для того, чтобы сработала ошибка на "very tricky moment"
    const month = date_object.getMonth();
    if (month === 11 || month <= 1) {
        return 'winter';
    } else if (month >= 2 && month <= 4) {
        return 'spring';
    } else if (month >= 5 && month <= 7) {
        return 'summer';
    } else {
        return 'autumn';
    }
};