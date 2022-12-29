module.exports = {
    pivot: function (arr, start = 0, end = arr.length - 1) {
        // p = pivot, the value
        let p = arr[start];
        // i = current pivot index
        let i = start;

        for (let j = start + 1; j < arr.length; j++) {
            if (arr[j] < p) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[start], [arr[i]]] = [arr[i], [arr[start]]];
        return i;
    }
}
