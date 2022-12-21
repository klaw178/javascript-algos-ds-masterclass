// naive version
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

// console.log(bubbleSort([37, 45, 29, 8]));
// first: j + 1 will eventually out of index
// second: too many unnecessary loops

// better version
// because of the way bubble sort works 
// the largest item should have already sorted to the end
// by this we can reduce the number of loops by manipulating the loop
function betterBubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            // i starts at then end and j starts at the beginning
            // this is possible as the larger number will always be sorted first
            // j keeps getting smaller because i starts from the end 
            // which means fewer loops
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

// console.log(betterBubbleSort([6, 1, 2, 3, 4, 5]));
// still not optimized as the loop will continue to run 
// even the swap stops in the middle

// optimized version
function optimizedBubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        let swaps = false;
        for (let j = 0; j < i - 1; j++) {
            // i starts at then end and j starts at the beginning
            // this is possible as the larger number will always be sorted first
            // j keeps getting smaller because i starts from the end 
            // which means fewer loops
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swap = true;
            }
        }
        if (!swaps) break;
    }

    return arr;
}

console.log(optimizedBubbleSort([6, 1, 2, 3, 4, 5]));