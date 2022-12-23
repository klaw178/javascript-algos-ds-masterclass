const utils = require('./section15 - 85');
const merge = utils.merge;

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let m = Math.floor(arr.length / 2);
    let l = mergeSort(arr.slice(0, m));
    let r = mergeSort(arr.slice(m));
    return merge(l, r);
}

console.log(mergeSort([10, 24, 76, 73]));