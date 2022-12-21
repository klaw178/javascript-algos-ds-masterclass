function collectOddValues(arr) {
    let newArr = [];
    if (arr.length == 0) return newArr; // need to return an empty array otherwise it will concat a undefined into the array as it retunrs nothing
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

console.log(collectOddValues([1,2,3,4,5]));

// function returnUndefined() {
//     return;
// }

// console.log([1].concat(returnUndefined()));

// expected output: [1, undefined]

