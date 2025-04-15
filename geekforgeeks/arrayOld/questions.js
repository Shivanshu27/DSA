

// Of course! Here are some interview questions related to arrays that you might find helpful:



//     Maximum Subarray:
//     Find the contiguous subarray with the largest sum in an array of integers.

function findMaxSubarraySum(nums) {
    let maxEndingHere = nums[0]; // Initialize with the first element
    let maxSoFar = nums[0]; // Initialize with the first element
    
    for (let i = 1; i < nums.length; i++) {
        console.log(nums[i])
        // Update maxEndingHere with the larger of the current number and the sum of previous maxEndingHere and current number
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        console.log(maxEndingHere)
        
        // Update maxSoFar with the larger of the current maxSoFar and maxEndingHere
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
        console.log(maxSoFar)
    }
    
    return maxSoFar;
}

const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = findMaxSubarraySum(nums1);
console.log(`The maximum subarray sum is: ${maxSum}`);



//     Rotate Array:
//     Rotate an array to the right by a given number of steps.



//     Merge Intervals:
//     Given a collection of intervals, merge any overlapping intervals.

function mergeIntervals(intervals) {
    if (!intervals.length) {
        return [];
    }

    // Sort the intervals by their start times
    intervals.sort((a, b) => a[0] - b[0]);

    // Initialize the result array with the first interval
    const result = [intervals[0]];

    // Iterate through the sorted intervals
    for (let i = 1; i < intervals.length; i++) {
        // Get the last interval in the result array
        const lastInterval = result[result.length - 1];
        const currentInterval = intervals[i];

        // Check if the current interval overlaps with the last interval
        if (currentInterval[0] <= lastInterval[1]) {
            // Merge the intervals by updating the end time of the last interval
            lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
        } else {
            // If they don't overlap, add the current interval to the result array
            result.push(currentInterval);
        }
    }

    return result;
}

// Example usage:
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const mergedIntervals = mergeIntervals(intervals);

console.log(mergedIntervals); // Output: [[1, 6], [8, 10], [15, 18]]

//     Find the Missing Number:
//     Given an array containing numbers from 0 to n with one number missing, find the missing number.

function findMissingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    
    return expectedSum - actualSum;
}

const nums4 = [0, 1, 3, 4, 5];
const missingNumber = findMissingNumber(nums4);
console.log(`The missing number is: ${missingNumber}`); // Output: The missing number is: 2


//     Kth Largest Element:
//     Find the kth largest element in an unsorted array.

// 5. Trapping Rain Water
// Problem: Given an array height representing an elevation map, compute how much water it can trap.


function trap(height) {
    if (height.length === 0) {
        return 0;
    }

    let left = 0; // Pointer to the left end of the elevation map
    let right = height.length - 1; // Pointer to the right end of the elevation map
    let leftMax = 0; // Maximum height encountered from the left
    let rightMax = 0; // Maximum height encountered from the right
    let waterTrapped = 0; // Total water trapped

    // Traverse the elevation map until the two pointers meet
    while (left < right) {
        if (height[left] < height[right]) {
            // If the current height at the left pointer is less than the current height at the right pointer
            if (height[left] >= leftMax) {
                // Update the maximum height encountered from the left
                leftMax = height[left];
            } else {
                // Add the difference between leftMax and the current height to the total water trapped
                waterTrapped += leftMax - height[left];
            }
            // Move the left pointer to the right
            left++;
        } else {
            // If the current height at the right pointer is less than or equal to the current height at the left pointer
            if (height[right] >= rightMax) {
                // Update the maximum height encountered from the right
                rightMax = height[right];
            } else {
                // Add the difference between rightMax and the current height to the total water trapped
                waterTrapped += rightMax - height[right];
            }
            // Move the right pointer to the left
            right--;
        }
    }

    return waterTrapped;
}

// Example usage:
const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// const result = trap(height);

// console.log(result); // Output: 6





function partition(nums, left, right) {
    const pivot = nums[right];
    let partitionIndex = left;
    
    for (let i = left; i < right; i++) {
        if (nums[i] >= pivot) {
            // Swap elements at partitionIndex and i
            [nums[i], nums[partitionIndex]] = [nums[partitionIndex], nums[i]];
            partitionIndex++;
        }
    }
    
    // Swap pivot with element at partitionIndex
    [nums[right], nums[partitionIndex]] = [nums[partitionIndex], nums[right]];
    
    return partitionIndex;
}

function quickselect(nums, left, right, k) {
    if (left <= right) {
        const pivotIndex = partition(nums, left, right);
        
        if (pivotIndex === k) {
            return nums[pivotIndex];
        } else if (pivotIndex < k) {
            return quickselect(nums, pivotIndex + 1, right, k);
        } else {
            return quickselect(nums, left, pivotIndex - 1, k);
        }
    }
}

function findKthLargest(nums, k) {
    // Convert k to the 0-based index for quickselect
    const kIndex = nums.length - k;
    
    return quickselect(nums, 0, nums.length - 1, kIndex);
}

const nums6 = [3, 2, 1, 5, 4];
const k = 2;
const kthLargest = findKthLargest(nums6, k);
console.log(`The ${k}th largest element is: ${kthLargest}`); // Output: The 2th largest element is: 4


//     Majority Element:
//     Find the element that appears more than n/2 times in an array.

function findMajorityElement(nums) {
    let candidate = nums[0];
    let count = 1;
    
    for (let i = 1; i < nums.length; i++) {
        console.log(count)
        if (count === 0) {
            candidate = nums[i];
            count = 1;
        } else if (nums[i] === candidate) {
            console.log(nums[i])
            count++;
        } else {
            count--;
        }
    }
    
    return candidate;
}

const nums7  = [2, 2, 1, 1, 1, 1, 2, 2, 1, 3, 2, 3, 2, 3, 2];
const majorityElement = findMajorityElement(nums);
console.log(`The majority element is: ${majorityElement}`); // Output: The majority element is: 2



function findMostFrequent(arr) {
    if (arr.length === 0) {
      return null; // Return null for an empty array
    }
  
    const elementCount = {}; // Create an object to store element counts
  
    let maxElement = arr[0]; // Initialize max element to the first element
    let maxCount = 1; // Initialize max count to 1 (for the first element)
  
    for (let i = 0; i < arr.length; i++) {
      const currentElement = arr[i];
  
      if (elementCount[currentElement] === undefined) {
        elementCount[currentElement] = 1;
      } else {
        elementCount[currentElement]++;
        if (elementCount[currentElement] > maxCount) {
          maxElement = currentElement;
          maxCount = elementCount[currentElement];
        }
      }
    }
  
    return maxElement;
  }
  
  const myArray = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  const mostFrequent = findMostFrequent(myArray);
  
  console.log(mostFrequent); // Output: 4 (since 4 appears most frequently)
  


//     Stock Buy and Sell:
//     Find the maximum profit that can be obtained by buying and selling stocks.

//     Pascal's Triangle:
//     Generate Pascal's Triangle up to a given number of rows.

//     Set Matrix Zeroes:
// // Of course! Here are some interview questions related to arrays that you might find helpful:

//     Two Sum:
//     Given an array of integers and a target sum, find two numbers in the array that add up to the target sum.

//     Maximum Subarray:
//     Find the contiguous subarray with the largest sum in an array of integers.

//     Product of Array Except Self:
//     Given an array of integers, return an array where each element is the product of all the elements of the original array except the one at that index.

//     Rotate Array:
//     Rotate an array to the right by a given number of steps.

//     Merge Intervals:
//     Given a collection of intervals, merge any overlapping intervals.

//     Find the Missing Number:
//     Given an array containing numbers from 0 to n with one number missing, find the missing number.

//     Kth Largest Element:
//     Find the kth largest element in an unsorted array.

//     Majority Element:
//     Find the element that appears more than n/2 times in an array.

//     Stock Buy and Sell:
//     Find the maximum profit that can be obtained by buying and selling stocks.

//     Pascal's Triangle:
//     Generate Pascal's Triangle up to a given number of rows.

//     Set Matrix Zeroes:
//     Given a matrix, set all rows and columns to zero if any element in that row or column is zero.

//     Sort Colors:
//     Given an array containing only 0s, 1s, and 2s, sort the array in-place.

//     Valid Sudoku:
//     Determine if a 9x9 Sudoku board is valid.

//     Container With Most Water:
//     Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

//     Next Permutation:
//     Implement the next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
