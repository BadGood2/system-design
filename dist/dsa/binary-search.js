"use strict";
let arr = [0, 1, 7, 4, 4, 5];
function fairPairs(arr, lower, upper) {
    let totalPairs = 0;
    let distinctArr = arr;
    distinctArr.sort((a, b) => a - b);
    let l = 0, r = distinctArr.length - 1, l1 = 0, r1 = distinctArr.length - 1;
    for (let i = 0; i < distinctArr.length; i++) {
        let upperBoundIndex, lowerBoundIndex;
        l = i + 1;
        l1 = i + 1;
        // find lowerbound
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (distinctArr[mid] + distinctArr[i] >= lower) {
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
        lowerBoundIndex = l;
        while (l1 <= r1) {
            let mid = Math.floor((l1 + r1) / 2);
            if (distinctArr[mid] + distinctArr[i] <= upper) {
                l1 = mid + 1;
            }
            else {
                r1 = mid - 1;
            }
        }
        upperBoundIndex = l1;
        if (lowerBoundIndex < 0 || upperBoundIndex < 0)
            continue;
        totalPairs += (upperBoundIndex - lowerBoundIndex);
        r = distinctArr.length - 1;
        r1 = distinctArr.length - 1;
    }
    return totalPairs;
}
console.log(fairPairs(arr, 3, 6));
