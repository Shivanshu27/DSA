// Given two sorted arrays of distinct integers arr1 and arr2. Each array may have some elements in common with the other array. Find the maximum sum of a path from the beginning of any array to the end of any of the two arrays. We can switch from one array to another array only at the common elements. Both the arrays are sorted.

// Note: Only one repeated value is considered in the valid path sum.

// Examples : 

// Input: arr1 = [2, 3, 7, 10, 12] , arr2 = [1, 5, 7, 8]
// Output: 35
// Explanation: The path will be 1+5+7+10+12= 35 , where 1 , 5 comes from arr2 and then 7 is common so we can switch to another array arr1 and add
// 10 , 12 to it too .


function maxPathSum(arr1, arr2) {
    // code here
    let sum1 = 0;
    let sum2 = 0;
    let i = 0;
    let j = 0;
    let n = arr1.length;
    let m = arr2.length;
    let result = 0;
    while (i < n && j < m) {
        if (arr1[i] < arr2[j]) {
            sum1 += arr1[i++];
        } else if (arr1[i] > arr2[j]) {
            sum2 += arr2[j++];
        } else {
            result += Math.max(sum1, sum2) + arr1[i];
            sum1 = 0;
            sum2 = 0;
            i++;
            j++;
        }
    }
    while (i < n) {
        sum1 += arr1[i++];
    }
    while (j < m) {
        sum2 += arr2[j++];
    }
    result += Math.max(sum1, sum2); 
    return result;
}


console.log(maxPathSum([2, 3, 7, 10, 12], [1, 5, 7, 8])) // 35