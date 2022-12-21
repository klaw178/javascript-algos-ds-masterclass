// coding exercise 3: sameFrequency

// comparing two lookup tables by changing them to JSON strings, checking if the values are the same

function sameFrequency(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();
    let lookup = {};
    for (let char of str1) {
        if (lookup[char]) {
            lookup[char]++;
        } else {
            lookup[char] = 1;
        };
    };
    console.log(lookup);
    let lookup2 = {};
    for (let char of str2) {
        if (lookup2[char]) {
            lookup2[char]++;
        } else {
            lookup2[char] = 1;
        };
    };
    console.log(lookup2);
    if (JSON.stringify(lookup) !== JSON.stringify(lookup2)) {
        return false;
    };
    return true;
};

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));

// model answer

function sameFrequency2(num1, num2) {
    if (num1 == num2) {
        return true;
    }
    let str1 = num1.toString();
    let str2 = num2.toString();
    if (str1.length !== str2.length) {
        return false;
    }
    let lookup = {};
    for (let char of str1) {
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
    }
    for (let i = 0; i < str2.length; i++) {
        if (!lookup[str2[i]]) {
            return false;
        } else {
            lookup[str2[i]] -= 1;
        }
    }
    return true;
};

// coding exercise 4: areThereDuplicates

// model answers

// frequency counter

function areThereDuplicates() {
    let collection = {};
    for (let i = 0; i < arguments.length; i++) {
        collection[arguments[i]] ? collection[arguments[i]]++ : collection[arguments[i]] = 1;
    };
    console.log(collection);
    for (let key in collection) {
        if (collection[key] > 1) return true;
    };
    return false;
};

console.log(areThereDuplicates('a', 'b', 'c', 'a'))

// multiple pointer

function areThereDuplicates2(...args) {
    args.sort((a, b) => a > b ? 1 : -1); // sorting algo depends, this will also sort string, while a > b wont!
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
};

console.log(areThereDuplicates2('a', 'b', 'c', 'a'));

// coding exercises 5: averagePair

function averagePair(arr, val) {
    if (arr.length == 0) return false;
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        if ((arr[l] + arr[r]) / 2 == val) {
            return true;
        } else if ((arr[l] + arr[r]) / 2 > val) {
            r--;
        } else l++
    };
    return false;
};

console.log(averagePair([1, 2, 3], 2.5))

// coding exercises 6: isSubsequence

function isSubsequence(str1, str2) {
    if (str2.length < str1.length) return false;
    if (str1.length == 0) return true;
    let i = 0;
    for (let char of str2) {
        console.log(str1[i], char);
        if (str1[i] == char) {
            i++;
        };
    };
    if (i == str1.length) {
        return true;
    } else return false;
};

console.log(isSubsequence('sing', 'sting'));

// coding exercise 7: maxSubarraySum

function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;
    let currMax = 0;
    for (let i = 0; i < num; i++) {
        currMax += arr[i];
    };
    let i = 0;
    let tempMax = currMax;
    for (let j = num - 1; j < arr.length; j++) {
        console.log('before', tempMax, currMax, arr[j + 1], arr[i]);
        tempMax = tempMax + arr[j + 1] - arr[i];
        if (tempMax > currMax) {
            currMax = tempMax;
        };
        i++;
        console.log('after', tempMax, currMax, i);
    };
    return currMax;
};

// coding exercise 8: minSubArrayLen

function minSubArrayLen(nums, target) {
    if (nums.length == 0) return 0;
    let i = 0;
    let j = 0;
    let tempSum = nums[i];
    let minLenArr = [];
    while (i < nums.length) {
        if (tempSum >= target) {
            let minLen = j - i + 1;
            if (minLen == 1) {
                return 1;
            } else {
                minLenArr.push(minLen);
            };
            tempSum -= nums[i];
            i++;
        } else {
            if (j < nums.length) {
                j++;
                tempSum += nums[j];
            } else {
                i++;
            }
        };
    };
    minLenArr.sort((a, b) => a - b);
    console.log(minLenArr);
    if (minLenArr.length == 0) {
        return 0;
    } else return minLenArr[0];
};

// coding exercise 9: findLongestSubstring

function findLongestSubstring(s) {

}
