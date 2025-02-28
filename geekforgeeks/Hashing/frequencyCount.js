// You are given an array arr[] containing positive integers. The elements in the array arr[] range from 1 to n (where n is the size of the array), and some numbers may be repeated or absent. Your task is to count the frequency of all numbers in the range 1 to n and return an array of size n such that result[i] represents the frequency of the number i (1-based indexing).

function frequencyCount(arr) {
    let n = arr.length;
    let result = Array(n).fill(0);
    console.log(result);
    for (let i = 0; i < n; i++) {
        result[arr[i] - 1]++;
        console.log(result);
    }
    return result;
}

// Time complexity: O(n)
// Space complexity: O(n)
console.log(frequencyCount([2, 3, 3, 2, 5])); // [0, 2, 2, 0, 1]


// use hash map

// function frequencyCount(arr) {
//     let n = arr.length;
//     let result = Array(n).fill(0);
//     let map = {};
//     for (let i = 0; i < n; i++) {
//         map[arr[i]] = map[arr[i]] + 1 || 1;
//     }
//     for (let i = 0; i < n; i++) {
//         result[i] = map[i + 1] || 0;
//     }
//     return result;
// }

// // Time complexity: O(n)
// // Space complexity: O(n)

// console.log(frequencyCount([2, 3, 3, 2, 5])); // [0, 2, 2, 0, 1]
// console.log(frequencyCount([1, 2, 3, 4, 5])); // [1, 1, 1, 1, 1]