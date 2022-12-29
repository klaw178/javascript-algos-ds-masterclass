const utils = require('./section17 - 100');

const getDigit = utils.getDigit;
const digitCount = utils.digitCount;
const mostDigits = utils.mostDigits;

function radixSort(numArr) {
    let maxDigitCount = mostDigits(numArr);
    for (let k = 0; k < maxDigitCount; k++) {
        let buckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < numArr.length; j++) {
            let digit = getDigit(numArr[j], k);
            buckets[digit].push(numArr[j]);
        }
        numArr = [].concat(...buckets);
    }
    return numArr;

}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]))