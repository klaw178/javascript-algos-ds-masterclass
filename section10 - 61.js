function binarySearch(arr, val) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (val < arr[m]) {
            r = m - 1;
        } else if (val > arr[m]) {
            l = m + 1;
        } else if (val == arr[m]) {
            return m;
        }
    }
    return - 1;
}

binarySearch([1, 2, 3, 4, 5], 5);