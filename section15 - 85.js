// merge function
// arrays in the param have to be sorted
module.exports = {
    merge: function (arr1, arr2) {
        let i = 0;
        let j = 0;
        let mergedArr = [];
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                mergedArr.push(arr1[i]);
                i++;
            } else {
                mergedArr.push(arr2[j]);
                j++;
            }
        }
        if (i === arr1.length) {
            for (j; j < arr2.length; j++) {
                mergedArr.push(arr2[j]);
            }
        } else {
            for (i; i < arr1.length; i++) {
                mergedArr.push(arr1[i]);
            }
        }

        return mergedArr;
    }
}


