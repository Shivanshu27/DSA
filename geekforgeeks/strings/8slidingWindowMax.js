// Sliding Window Maximum
// You are given an array of integers nums and an integer k. There is a sliding window of size k that starts at the left edge of the array. The window slides one position to the right until it reaches the right edge of the array.

// Problem Explanation:
// The task is to find the maximum element in every sliding window of size `k` as it moves from the left to the right of the array.
// For example, given nums = [1,2,1,0,4,2,6] and k = 3, the sliding windows and their maximums are:
// Window position            Max
// ---------------           -----
// [1  2  1] 0  4  2  6        2
//  1 [2  1  0] 4  2  6        2
//  1  2 [1  0  4] 2  6        4
//  1  2  1 [0  4  2] 6        4
//  1  2  1  0 [4  2  6]       6

// Approach:
// - Use a deque (double-ended queue) to efficiently keep track of indices of elements in the current window.
// - The deque will store indices in decreasing order of the corresponding values in the array. This ensures that the maximum element of the current window is always at the front of the deque.

// What is a deque?
// - A deque (double-ended queue) is a data structure that allows insertion and deletion from both ends (front and back).
// - In this problem, the deque is used to store indices of elements in the array. It helps efficiently manage the maximum element in the current sliding window.

// Why use a deque?
// - The deque allows us to efficiently remove elements that are no longer in the window and maintain the order of potential maximum elements.
// - This ensures that we can find the maximum element in O(1) time for each window, resulting in an overall time complexity of O(n).

function maxSlidingWindow(nums, k) {
    if (nums.length === 0) return []; // Handle edge case where the input array is empty
    const result = []; // Array to store the maximums for each window
    const deque = []; // Deque to store indices of potential maximum elements

    for (let i = 0; i < nums.length; i++) {
        // Remove elements not in the current window
        if (deque.length && deque[0] < i - k + 1) {
            deque.shift(); // Remove the front element if it's outside the window
        }

        // Remove elements smaller than the current element from the back of the deque
        // These elements can never be the maximum for the current or future windows
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Add the current element's index to the deque
        deque.push(i);

        // If the window has reached size k, add the maximum element (at the front of the deque) to the result
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result; // Return the list of maximums for each window
}

// Example usage:
console.log(maxSlidingWindow([1, 2, 1, 0, 4, 2, 6], 3)); // Output: [2, 2, 4, 4, 6]

// Explanation of Algorithm:
// 1. Initialize an empty deque and an empty result array.
// 2. Iterate through the array:
//    - Remove indices from the front of the deque if they are outside the current window (i - k + 1).
//    - Remove indices from the back of the deque if their corresponding values are smaller than the current element (nums[i]).
//    - Add the current index to the back of the deque.
//    - If the window size is at least k (i >= k - 1), add the value at the front of the deque (nums[deque[0]]) to the result array.
// 3. Return the result array containing the maximums for each window.