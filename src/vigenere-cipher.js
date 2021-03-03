const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

    constructor(isDirectMachine) {
        if (isDirectMachine === true || isDirectMachine === undefined) {
            this.isDirectMachine = true;
        } else {
            this.isDirectMachine = false;
        }
        this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }

    getExtendedKey(keyString, length, messageString) {
        const extendedStringAsArray = [];
        while (extendedStringAsArray.length < messageString.length) {
            for (let i = 0; i < keyString.length; i++) {
                extendedStringAsArray.push(keyString[i]);
                if (extendedStringAsArray.length === messageString.length) {
                    break;
                }
            }
        }
        let bias = 0;
        const result = [];
        for (let i = 0; i < messageString.length; i++) {
            if (this.ord(messageString[i]) >= 65 && this.ord(messageString[i]) <= 90) {
                result.push(extendedStringAsArray[i - bias]);
            } else {
                result.push(messageString[i]);
                bias = bias + 1;
            }
        }
        return result;
    }

    ord(char) {
        return char.toUpperCase().charCodeAt(0);
    }

    getExtendedKeyIndexes(keyString, length, messageString) {
        const keys = this.getExtendedKey(keyString, length, messageString);
        const result = [];
        keys.forEach(key => {
            result.push(this.alphabet.indexOf(key.toUpperCase()));
        });
        return result;
    };

    getCharIndex(char) {
        if (this.ord(char) >= 65 && this.ord(char) <= 90) {
            return this.alphabet.indexOf(char.toUpperCase());
        } else {
            return char;
        }
    }

    getCharByIndex(index) {
        if (typeof(index) !== 'string') {
            return this.alphabet[index];
        } else {
            return index;
        }
    }

    sumMod26(x, y) {
        return (x + y + 26) % 26;
    }

    subtrMod26(x, y) {
        if (x >= y) {
            return x - y;
        } else {
            return x - y + 26;
        }
    }

    encrypt(messageString, keyString) {
        const messageArray = messageString.split('');
        const extendedKeyIndexes = this.getExtendedKeyIndexes(keyString, messageArray.length, messageString);
        const encryptedIndexes = [];
        const encryptedChars = [];
        messageArray.forEach((char, index) => {
            const charIndex = this.getCharIndex(char);
            if (this.ord(char) >= 65 && this.ord(char) <= 90) {
                encryptedIndexes.push(this.sumMod26(charIndex, extendedKeyIndexes[index]));
            } else {
                encryptedIndexes.push(char);
            }
        });
        encryptedIndexes.forEach((index, idx) => {
            const char = this.getCharByIndex(index);
            if (char) {
                encryptedChars.push(char);
            } else {
                encryptedChars.push(messageString[idx]);
            }
        });
        if (this.isDirectMachine) {
            return encryptedChars.join('');
        } else {
            return encryptedChars.reverse().join('');
        }
    }

    decrypt(messageString, keyString) {
        const extendedKeyArray = this.getExtendedKey(keyString, messageString.length, messageString);
        const messageArray = messageString.split('');
        const resultIndexes = [];
        messageArray.forEach((item, index) => {
            const messageCharIndex = this.getCharIndex(item);
            const keyCharIndex = this.getCharIndex(extendedKeyArray[index]);
            if (typeof(messageCharIndex) != 'string') {
                resultIndexes.push(this.subtrMod26(messageCharIndex, keyCharIndex));
            } else {
                resultIndexes.push(item);
            }
        });
        const result = [];
        resultIndexes.forEach(item => {
            if (typeof(item) !== 'string') {
                result.push(this.getCharByIndex(item));
            } else {
                result.push(item);
            }
        });
        if (this.isDirectMachine) {
            return result.join('');
        } else {
            return result.reverse().join('');
        }
    }
}

module.exports = VigenereCipheringMachine;