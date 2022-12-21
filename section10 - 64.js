function naiveStringSearch(str, subStr) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let j = 0;
        while (j < subStr.length) {
            if (str[i + j] !== subStr[j]) break;
            j++;
        }
        if (j == subStr.length) count++;
    }
    console.log(count);
}

naiveStringSearch('lorie loled', 'pop');
naiveStringSearch('lorie loled', 'lol');