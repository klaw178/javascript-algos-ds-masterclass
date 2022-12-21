// write a fucntion call same which accepts two arrays. 
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequencey of values must be the same. 


// my fist try
// correct answer should be true. 
// the reason being is deleting object key will delete all duplicates keys !
function same(arr1, arr2) {
    if (arr1.length != arr2.length) {
        console.log('false as lengths are not the same')
        return false
    }
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i] ** 2
        sum2 += arr2[i]
    }
    if (sum1 != sum2) {
        console.log('false as their sums are not the same')
        return false
    }
    let map = {}
    for (let num of arr2) {
        map[num] = `${num}`
    }
    for (let num of arr1) {
        if (!map[num**2]) {
            console.log('false as theya are not the same')
            return false
        } else {
            delete map[num**2]
        }
    }
    return true
}

console.log(same([1,2,1], [4,4,1]))
console.log(same([1,2,3], [1,9]))
console.log(same([1,2,3], [4,1,9]))
console.log(same([1,2,3,2,5], [9,4,25,4,1]))

// second try 
function same2(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false
    }
    let freqCounter1 = {}
    for (let num of arr1) {
        freqCounter1[num] = (freqCounter1[num] || 0) + 1
    }
    let freqCounter2 = {}
    for (let num of arr2) {
        freqCounter2[num] = (freqCounter2[num] || 0) + 1
    }
    console.log(freqCounter1, freqCounter2)
    for (let num of arr1) {
        if (!freqCounter2[num ** 2]) {
            return false
        }
        if (freqCounter1[num] != freqCounter2[num ** 2]) {
            return false
        }

    }
    return true
}

console.log(same2([1,2,1], [4,4,1]))
console.log(same2([1,2,3], [1,9]))
console.log(same2([1,2,3], [4,1,9]))
console.log(same2([1,2,3,2,5], [9,4,25,4,1]))
console.log(same2([1,2,3,2,5], [9,4,11,4,1]))
// we use object to break down the content of arrays and compare
// this method is O(n) as there are no nested loops and accessing object keys is much quicker O(1)


// brute force
// time complexity is O(n**2) due to the indexOf method

function same3(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i] ** 2)
        if (index == -1) {
            return false
        }
        arr2.splice(index, 1)
        console.log(arr2)
    }
    return true
}   

console.log(same3([1,2,3,2,5], [9,4,25,4,1]))
console.log(same3([1,2,3,2,5], [9,4,11,4,1]))
