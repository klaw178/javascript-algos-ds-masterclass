const self = module.exports = {
    getDigit: function (num, i) {
        return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
    },
    digitCount: function (num) {
        if (num === 0) return 1;
        return Math.floor(Math.log10(Math.abs(num))) + 1;
    },
    mostDigits: function (arr) {
        let maxDigits = 0;
        for (let num of arr) {
            maxDigits = Math.max(maxDigits, self.digitCount(num));
        }
        return maxDigits;
    }
}