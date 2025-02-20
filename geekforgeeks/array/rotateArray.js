function rotateArrCounter(arr, D, N) {
    // Utility function to reverse elements in the array from start to end indices
    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]; // Swapping elements
            start++;
            end--;
        }
    }

    // Ensure D is within the bounds of the array length
    D = D % N;
    
    // Step 1: Reverse the first D elements
    reverse(arr, 0, D - 1);
    
    // Step 2: Reverse the remaining elements
    reverse(arr, D, N - 1);
    
    // Step 3: Reverse the entire array
    reverse(arr, 0, N - 1);
}

// Example usage:
let arr1 = [1, 2, 3, 4, 5];
let N1 = 5, D1 = 2;
rotateArrCounter(arr1, D1, N1);
console.log(arr1);  // Output should be [3, 4, 5, 1, 2]

let arr2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let N2 = 10, D2 = 3;
rotateArrCounter(arr2, D2, N2);
console.log(arr2);  // Output should be [8, 10, 12, 14, 16, 18, 20, 2, 4, 6]




// function rotateArrClock(arr, D, N) {
//     // Utility function to reverse elements in the array from start to end indices
//     function reverse(arr, start, end) {
//         while (start < end) {
//             [arr[start], arr[end]] = [arr[end], arr[start]]; // Swapping elements
//             start++;
//             end--;
//         }
//     }

//     // Ensure D is within the bounds of the array length
//     D = D % N;
    
//     // Step 1: Reverse the first D elements
//     reverse(arr, N-D, N-1);
//     console.log(arr);
    
//     // Step 2: Reverse the remaining elements
//     reverse(arr, 0, D);
//     console.log(arr);
    
//     // Step 3: Reverse the entire array
//     reverse(arr, 0, N - 1);
// }

// // Example usage:
// let arr1 = [1, 2, 3, 4, 5];
// let N1 = 5, D1 = 2;
// rotateArrClock(arr1, D1, N1);
// console.log(arr1);  // Output should be [3, 4, 5, 1, 2]

// let arr2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// let N2 = 10, D2 = 3;
// rotateArrClock(arr2, D2, N2);
// console.log(arr2);  // Output should be [8, 10, 12, 14, 16, 18, 20, 2, 4, 6]
