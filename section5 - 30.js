// multiple  pointer
// avoid nested loop
// usually useful when finding pairs or a set of values fufiling special conditions

function sumZero(arr) {
    if (arr.length == 0 || arr.length == 1) {
        return undefined
    }

    let i = 0
    let j = arr.length - 1

    while (i < j) {
        if (arr[i] + arr[j] > 0) {
            j -= 1
        } else if (arr[i] + arr[j] < 0) {
            i += 1
        } else return [arr[i], arr[j]]
    }
    return undefined
}

console.log(sumZero([-4,-3,-2,-1,0,2,3]))
console.log(sumZero([-4,-3,-2,-1,0]))