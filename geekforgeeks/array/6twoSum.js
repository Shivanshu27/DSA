//     Two Sum:
//     Given an array of integers and a target sum, find two numbers in the array that add up to the target sum.

function sum(nums, target){
    let output=[];
    for (let i=0; i<nums.length-1;i++){
        for (j=i+1; j<nums.length;j++){
            console.log(nums[i]+nums[j])
            if (target=== nums[i]+nums[j]){
            return [i,j]
            }
        }
    }
}


function findTwoNumbersWithSum(nums, target) {
    const numMap = new Map(); // Using a map to store encountered numbers
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // Check if the complement exists in the map
        if (numMap.has(complement)) {
            return [complement, nums[i]]; // Found the pair
            return [numMap.get(complement), i]; // Found the indices
        }
        
        // Add the current number to the map
        numMap.set(nums[i], i);
    }
    
    return null; // No valid pair found
}

const nums = [2, 7, 11, 15];
const targetSum = 9;
const result = findTwoNumbersWithSum(nums, targetSum);

if (result) {
    console.log(`The two numbers are ${result[0]} and ${result[1]}.`);
} else {
    console.log(`No two numbers add up to the target sum.`);
}

// time complexity is O(n) and space complexity is O(n)
// reason is that we are using a map to store the numbers we have seen so far, and we are only iterating through the array once. We use the map to check if the complement of the current number exists in the map, which is an O(1) operation. Therefore, the overall time complexity is O(n). The space complexity is also O(n) because we are storing the numbers in the map.


// Given an array of integers numbers that is sorted in non-decreasing order.

// Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

// There will always be exactly one valid solution.

// Your solution must use 
// 𝑂
// (
// 1
// )
// O(1) additional space.

function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1]; // Return 1-indexed positions
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return []; // No solution found
}

const numbers = [2, 7, 11, 15];
const target = 9;
const result2 = twoSum(numbers, target);
if (result2.length > 0) {
    console.log(`The indices are ${result2[0]} and ${result2[1]}.`);
}
else {
    console.log(`No two numbers add up to the target sum.`);
}
// time complexity is O(n) and space complexity is O(1)



// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

// The output should not contain any duplicate triplets. You may return the output and the triplets in any order.


function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b); // Sort the array in ascending order

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
                while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}
const nums1 = [-1, 0, 1, 2, -1, -4];     
const result3 = threeSum(nums1);
if (result3.length > 0) {
    console.log(`The triplets are ${JSON.stringify(result3)}.`);
}
else {
    console.log(`No triplets found that sum to zero.`);
}
// time complexity is O(n^2) and space complexity is O(1)
// Given an integer array nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].

function twoSumSorted(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) {
            return [nums[left], nums[right]]; // Return the pair
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return null; // No valid pair found
}

const nums2 = [3, 2, 4, 1];
const targetSum2 = 6;
const result4 = twoSumSorted(nums2, targetSum2);

if (result4) {
    console.log(`The two numbers are ${result4[0]} and ${result4[1]}.`);
} else {
    console.log(`No two numbers add up to the target sum.`);
}

// Time complexity: O(n log n) for sorting + O(n) for two-pointer traversal = O(n log n)
// Space complexity: O(1) (in-place sorting if allowed, otherwise O(n) for sorting)