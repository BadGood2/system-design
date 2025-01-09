let arr = [0,1,7,4,4,5]

// Given a 0-indexed integer array nums of size n and two integers lower and upper, return the number of fair pairs.

// A pair (i, j) is fair if:

// 0 <= i < j < n, and
// lower <= nums[i] + nums[j] <= upper
 

// Example 1:

// Input: nums = [0,1,7,4,4,5], lower = 3, upper = 6
// Output: 6
// Explanation: There are 6 fair pairs: (0,3), (0,4), (0,5), (1,3), (1,4), and (1,5).
// Example 2:

// Input: nums = [1,7,9,2,5], lower = 11, upper = 11
// Output: 1
// Explanation: There is a single fair pair: (2,3).


function fairPairs(arr: number[], lower: number, upper: number){
    let totalPairs = 0
    let distinctArr = arr

    
    distinctArr.sort((a: number, b: number) => a - b)

    let l = 0, r= distinctArr.length - 1, l1 = 0, r1 = distinctArr.length - 1
    for(let i = 0;i<distinctArr.length;i++){
        let upperBoundIndex, lowerBoundIndex
        l = i + 1
        l1 = i + 1

        // find lowerbound
        while(l <= r){
            let mid = Math.floor((l + r) / 2)
            if(distinctArr[mid] + distinctArr[i] >= lower){
                r = mid - 1
            }
            else{
                l = mid + 1
            }
        }
        lowerBoundIndex = l

        while(l1 <= r1){
            let mid = Math.floor((l1 + r1) / 2)
            if(distinctArr[mid] + distinctArr[i] <= upper){
                l1 = mid + 1
            }
            else{
                r1 = mid - 1
            }
        }
        upperBoundIndex = l1
        
        if(lowerBoundIndex < 0 || upperBoundIndex < 0) continue
        
        totalPairs += (upperBoundIndex - lowerBoundIndex)
        r= distinctArr.length - 1
        r1 = distinctArr.length - 1

    }
    return totalPairs
}

console.log(fairPairs(arr, 3, 6))