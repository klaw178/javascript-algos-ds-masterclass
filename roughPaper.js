// function findLongestSubstring(s) {
//     if (s.length <= 1) return s.length;
//     let i = 0;
//     let j = 1;
//     let lookup = {};
//     let tempLen;
//     let longestLen = 1;
//     lookup[s[i]] = 1;
//     while (i < s.length) {
//         if (!lookup[s[j]]) {
//             lookup[s[j]] = 1;
//             tempLen = j - i + 1;
//             if (j + 1 < s.length) j++;
//             if (tempLen > longestLen) {
//                 longestLen = tempLen;
//             }
//         } else {
//             delete lookup[s[i]];
//             i++;
//         }
//     }
//     return longestLen;
// }

// console.log(findLongestSubstring("thisishowwedoit"));

// function findLongestSubstring(str) {
//   if (str.length === 0) {
//       return 0;
//   }
//   let lookup = {};
//   let start = 0;
//   let curr = 1;
//   let len = 1;
//   let tempLen;
//   lookup[str[start]] = str[start];
//   while (curr < str.length) {
//       if (!lookup[str[curr]]) {
//           lookup[str[curr]] = str[curr];
//           curr += 1;
//       } else {
//           delete lookup[str[start]];
//           start += 1;
//       }
//       tempLen = curr - start;
//       if (tempLen > len) {
//           len = tempLen;
//       }
//       console.log(`start: ${start}, curr: ${curr}`)
//       console.log(lookup)
//   }
//   console.log(len);
//   return len;
// }

// findLongestSubstring('thisisawesome')

function stringifyNumbers(obj) {
    let newObj = {
        ...obj
    };
    // add whatever parameters you deem necessary - good luck!
    function parse(nestedObj) {
        for (let key in nestedObj) {
            let item = nestedObj[key];
            if (typeof item === 'object') {
                parse(nestedObj[key]);
            }
            if (typeof item === 'number') {
                let str = item.toString();
                nestedObj[key] = str;
            }
        }
    }
    parse(newObj);
    console.log(newObj);
    return newObj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj);
console.log(obj);
