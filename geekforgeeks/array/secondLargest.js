// second largest number in an array

function getSecondLargest(nums) {
    // Complete the function
    let largest = nums[0];
    let secondLargest = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        } else if (nums[i] > secondLargest && nums[i] < largest) {
            secondLargest = nums[i];
        }
    }
    return secondLargest;
}

// Time complexity: O(n)
// Space complexity: O(1)

// Test case
console.log(getSecondLargest([2, 3, 6, 6, 5])); // 5