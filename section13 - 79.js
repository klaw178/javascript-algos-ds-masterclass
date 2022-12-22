// model ans
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > curr; j--) { // if arr[j] < curr, no ned to sort
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = curr; // because j-- after the loop
    }
    return arr;
}

console.log(insertionSort([1, 2, 9, 10, 76, 4]));

// if your data are almost sorted, it is useful
// good at continuously sorting incoming data
