// You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

// Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

// Your solution must run in 
// 𝑂
// (
// 𝑙
// 𝑜
// 𝑔
// 𝑛
// )
// O(logn) time.


function search(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid; // Target found, return its index
        } else if (nums[mid] < target) {
            start = mid + 1; // Search in the right half
        } else {
            end = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found, return -1
}
// Example usage:
console.log(search([-1, 0, 3, 5, 9, 12], 9)); // Output: 4


// time complexity: O(log n) -- explain 
// - The algorithm divides the search space in half with each iteration, leading to logarithmic time complexity.
// - In the worst case, the number of iterations is proportional to log base 2 of the size of the input array.
// - This is because each iteration eliminates half of the remaining elements from consideration.
// - The logarithmic time complexity is efficient for large datasets, making binary search a preferred choice for searching in sorted arrays.
// - The algorithm is efficient because it reduces the search space by half with each iteration.
// - This is in contrast to linear search, which has a time complexity of O(n) and checks each element one by one.
// space complexity: O(1)




let data = [10, 15, 18, 34, 67,70,89];
let start = 0;
let end = data.length - 1;
let find = 15;
let position = undefined;
function recursiveBinarySearch(data, start, end, find) {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (data[mid] === find) {
    return mid;
  } else if (data[mid] < find) {
    return recursiveBinarySearch(data, mid + 1, end, find);
  } else {
    return recursiveBinarySearch(data, start, mid - 1, find);
  }
}
position = recursiveBinarySearch(data, start, end, find);
if (position === -1) {
  console.log("Element not found");
}
else {
  console.log("Element found at index: " + position);
}



