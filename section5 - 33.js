// sliding window pattern
// looking of subset of data, in continuous way, and we store the subset in a variable

// brute force try
function maxSubArraySum(arr, n) {
    if (n > arr.length) {
        console.log(null)
        return null
    }
    let max = -Infinity
    for (let i = 0; i < arr.length - n + 1; i++) {
        let temp = 0
        for (let j = 0; j < n; j++) {
            temp += arr[j + i]
        }
        if (temp > max) {
            max = temp
        }
        console.log('temp: ', temp, 'max is: ', max)
    }
    return max
}

// maxSubArraySum([1,2,5,2,8,1,5],2)
// maxSubArraySum([1,2,5,2,8,1,5],4)
// maxSubArraySum([4,2,1,6],1)
// maxSubArraySum([],4)

// nested loop, it is O(n**2)

// implementing sliding window patter
function maxSubArraySum2(arr, n) {
    if (arr.length < n) {
        console.log(null)
        return null
    }
    let max = 0
    for (let i = 0; i < n; i++) {
        max += arr[i]
    }
    let temp = max
    for (let i = n; i < arr.length; i++) {
        temp = temp + arr[i] - arr[i - n] // add the current element, eliminate the oldest element
        if (temp > max) { // can also write max = Math.max(max, temp)
            max = temp
        }
        console.log('temp is: ', temp, 'max is: ', max)
    }
    return max
}

maxSubArraySum2([1,2,5,2,8,1,5],2)
maxSubArraySum2([1,2,5,2,8,1,5],4)
maxSubArraySum2([4,2,1,6],1)
maxSubArraySum2([],4)