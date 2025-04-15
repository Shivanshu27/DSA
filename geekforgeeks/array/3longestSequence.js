// Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.


// time complexity: O(n^2)

function longestConsecutive(nums) {
    let res = 0;
    const store = new Set(nums);

    for (let num of nums) {
        let streak = 0, curr = num;
        while (store.has(curr)) {
            streak++;
            curr++;
        }
        res = Math.max(res, streak);
    }
    return res;
}

// explain time complexity
// The time complexity of the above code is O(n^2) because for each element in the array, we may potentially check all subsequent elements in the worst case.
// In the worst case, if all elements are consecutive, we will check each element n times, leading to a total of n * n = O(n^2) operations.


// Example usage:
const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums)); // Output: 4 (The longest consecutive sequence is [1, 2, 3, 4])

// time complexity: O(n)
function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let longestStreak = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) { // Check if it's the start of a sequence
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

// Example usage:
const nums2 = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums2)); // Output: 4 (The longest consecutive sequence is [1, 2, 3, 4])
// time complexity: O(n)
// explain time complexity for different steps involved in above
// The time complexity of the optimized code is O(n) because:
// 1. Creating a Set from the input array takes O(n) time.
// 2. The outer loop iterates through each unique number in the Set, which takes O(n) time.
// 3. The inner while loop checks for consecutive numbers, but each number is only checked once, leading to a total of O(n) checks across all iterations.
// Therefore, the overall time complexity is O(n) + O(n) + O(n) = O(n).
// The space complexity is also O(n) due to the storage of elements in the Set.
// The space complexity of the optimized code is O(n) because we are using a Set to store the unique elements from the input array.
// This Set can potentially store all n elements in the worst case, leading to a space complexity of O(n).