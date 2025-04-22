// Search in Rotated Sorted Array
// You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:

// [3,4,5,6,1,2] if it was rotated 4 times.
// [1,2,3,4,5,6] if it was rotated 6 times.
// Given the rotated sorted array nums and an integer target, return the index of target within nums, or -1 if it is not present.

// You may assume all elements in the sorted rotated array nums are unique,

// A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?

// Example 1:

// Input: nums = [3,4,5,6,1,2], target = 1

// Output: 4


function search(nums, target) {
    let left = 0; // Start of the search range
    let right = nums.length - 1; // End of the search range

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Middle index

        if (nums[mid] === target) {
            return mid; // Target found, return its index
        }

        // Check if the left half is sorted
        if (nums[left] <= nums[mid]) {
            // If target is in the left half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // Search in the left half
            } else {
                left = mid + 1; // Search in the right half
            }
        } else { // Right half is sorted
            // If target is in the right half
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1; // Search in the right half
            } else {
                right = mid - 1; // Search in the left half
            }
        }
    }

    return -1; // Target not found, return -1
}