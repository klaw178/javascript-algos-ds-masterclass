// coding exercise 15: reverse

function reverse(str) {
    let reversedStr = '';
    if (str.length === 0) return '';
    reversedStr += str[str.length - 1];
    reversedStr += reverse(str.slice(0, -1));
    return reversedStr;
}

// cleaner version
// function reverse(str){
// 	if(str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }

// console.log(reverse('awesome'));

// coding exercise 16: isPalindrome

function isPalindrome(str) {
    function reverse(str) {
        let reversedStr = '';
        if (str.length === 0) return '';
        reversedStr += str[str.length - 1];
        reversedStr += reverse(str.slice(0, -1));
        return reversedStr;
    }
    return str == reverse(str);
}

// coding exercise 17: someRecursive

const isOdd = val => val % 2 !== 0;
function someRecursive(arr, callback) {
    let isCallback;
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true;
    isCallback = someRecursive(arr.slice(1), callback);
    return isCallback;
}
// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4, 6, 8, 9], isOdd)) // true
// console.log(someRecursive([4, 6, 8], isOdd)) // false
// console.log(someRecursive([4, 6, 8], val => val > 10)) // false

// coding exercise 18: flatten

function flatten(arr) {
    let flatArr = [];
    function flat(list) {
        if (list.length === 0) return;
        if (Array.isArray(list[0])) {
            flat(list[0]);
        } else flatArr.push(list[0]);
        flat(list.slice(1));
    }
    flat(arr);
    return flatArr;
}

// console.log(flatten([1, 2, 3, [4, 5]]));
// console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

// coding exercise 19: capitalizeFirst

function capitalizeFirst(arr) {
    let capArr = [];
    if (arr.length === 0) return capArr;
    let capStr = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
    capArr[0] = capStr;
    capArr = capArr.concat(capitalizeFirst(arr.slice(1)));
    return capArr;
}

// console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']

// coding exercise 20: nestedEvenSum

function nestedEvenSum(obj) {
    // add whatever parameters you deem necessary - good luck!
    let sum = 0;
    function count(nestedObj) {
        for (let key in nestedObj) {
            let item = nestedObj[key];
            if (typeof item === 'object') {
                count(nestedObj[key]);
            }
            if (typeof item === 'number') {
                if (item % 2 === 0) sum += item;
            }
        }
    }
    count(obj);
    return sum;
}


let obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

let obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

//   console.log(nestedEvenSum(obj1)); // 6
//   console.log(nestedEvenSum(obj2)); // 10

// coding exercise 21: capitalizeWords

function capitalizeWords(arr) {
    let capArr = [];
    if (arr.length === 0) return capArr;
    let capStr = arr[0].toUpperCase();
    capArr[0] = capStr;
    capArr = capArr.concat(capitalizeWords(arr.slice(1)));
    return capArr;
}

// console.log(capitalizedWords(['i', 'am', 'learning', 'recursion'])); // ['I', 'AM', 'LEARNING', 'RECURSION']

// coding exercise 22: stringifyNumbers



// coding exercise 23: collectStrings

function collectStrings(obj) {
    let strArr = [];
    function check(nestedObj) {
        for (let key in nestedObj) {
            let item = nestedObj[key];
            if (typeof item === 'object') {
                check(nestedObj[key]);
            }
            if (typeof item === 'string') {
                strArr.push(item);
            }
        }
    }
    check(obj);
    return strArr;
}

// collectStrings(obj); // ["foo", "bar", "baz"])

