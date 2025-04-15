// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// time complexity: O(n^2) - brute force

function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
            return true;
        }
        }
    }
    return false;
}


function containsDuplicate(nums) {
    const filtered = nums.filter((num, index) => nums.indexOf(num) !== index);
    return filtered.length > 0;
}

// explain the code using filter
// The function containsDuplicate checks if there are any duplicate values in the given array nums.
// It uses the filter method to create a new array filtered that contains only the elements of nums that have an index different from their first occurrence.
// The indexOf method is used to find the first occurrence of each element in nums.
// If the length of the filtered array is greater than 0, it means there are duplicates in nums, and the function returns true.
// Otherwise, it returns false.
// The time complexity of this approach is O(n^2) because for each element in nums, the indexOf method is called, which takes O(n) time.



// time complexity: O(n) - using hash set
function containsDuplicate(nums) {
    const set = new Set();
    for (const num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }
    return false;
}

function containsDuplicate(nums) {
    const set = new Set(nums);
    console.log(set);
    return set.size !== nums.length;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true

// explain the code using hash set
// The function containsDuplicate checks if there are any duplicate values in the given array nums.
// It uses a Set to store unique elements.
// The for...of loop iterates through each element num in nums.
// If the Set already contains num, it means there is a duplicate, and the function returns true.
// If num is not in the Set, it is added to the Set.
// If the loop completes without finding any duplicates, the function returns false.
// The time complexity of this approach is O(n) because each insertion and lookup in the Set takes O(1) time on average. 



function containsDuplicate(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
}

// explain the code using sort
// The function containsDuplicate checks if there are any duplicate values in the given array nums.
// It first sorts the array in ascending order using the sort method.
// After sorting, it iterates through the sorted array and checks if any adjacent elements are equal.
// If it finds two adjacent elements that are equal, it means there is a duplicate, and the function returns true.
// If the loop completes without finding any duplicates, the function returns false.
// The time complexity of this approach is O(n log n) due to the sorting step, and the space complexity is O(1) if the sorting is done in place.


function containsDuplicate(nums) {
    const map = new Map();
    for (const num of nums) {
        if (map.has(num)) {
            return true;
        }
        map.set(num, true);
    }
    return false;
}
// explain the code using map
// The function containsDuplicate checks if there are any duplicate values in the given array nums.
// It uses a Map to store unique elements.
// The for...of loop iterates through each element num in nums.
// If the Map already contains num, it means there is a duplicate, and the function returns true.
// If num is not in the Map, it is added to the Map with a value of true.
// If the loop completes without finding any duplicates, the function returns false.
// The time complexity of this approach is O(n) because each insertion and lookup in the Map takes O(1) time on average.
// The space complexity is O(n) because we are storing up to n unique elements in the Map.
// The function containsDuplicate checks if there are any duplicate values in the given array nums.
