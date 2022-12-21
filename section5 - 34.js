// divide and conquer
// we divide a set of data into smaller chunks and then repeat a process of the subsets

// example: binary search 
// given a sorted array, write a function called search, 
// that accepts a value and returns the index of where the value passed
// to the function is located. if the value is not found, return -1

function search(arr, num) {
    let min = 0
    let max = arr.length - 1
    while (min <= max) {
        let mid = Math.floor((min + max)/2)
        console.log(min, mid, max)
        if (arr[mid] == num) {
            console.log(mid)
            return mid
        } else if (arr[mid] > num) {
            max = mid - 1
        } else min = mid + 1;
    }
    console.log(-1)
    return -1
}

search([1,2,3,4,5,6], 4)
search([1,2,3,4,5,6], 6)
search([1,2,3,4,5,6], 11)


// time complexity O(logn)
