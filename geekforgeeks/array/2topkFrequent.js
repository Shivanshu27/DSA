// Given an integer array nums and an integer k, return the k most frequent elements within the array.

function topKFrequent(nums, k) {
    // Create a frequency map to count occurrences of each number
    const frequencyMap = {};
    for (const num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
    // Create an array of unique numbers
    const uniqueNumbers = Object.keys(frequencyMap);
    // Sort the unique numbers based on their frequency in descending order
    uniqueNumbers.sort((a, b) => frequencyMap[b] - frequencyMap[a]);
    // Return the top k frequent elements
    return uniqueNumbers.slice(0, k).map(Number);
}

// Example usage:
const nums = [1, 1, 1,1, 3, 4, 3, 4, 3];
const k = 2;
console.log(topKFrequent(nums, k)); // Output: [1, 2]

// explain time complexity
// The time complexity of this solution is O(n log n), where n is the number of unique elements in the input array.
// The space complexity is O(n) as well, since we are storing the frequency map and the unique numbers array, which can both grow linearly with the number of unique elements in the input array.


// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// use bucket sort algorithm

function topKFrequent(nums, k) {
    const frequencyMap = new Map();
    // Create a bucket array where index represents frequency
    const bucket = Array.from({ length: nums.length + 1 }, () => []);
  
    // Count the frequency of each number
    for (const num of nums) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
  
    // Place numbers into buckets based on their frequencies
    for (const [num, freq] of frequencyMap.entries()) {
      bucket[freq].push(num);
    }
  
    const result = [];
    
    // Collect the top k frequent elements
    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
      if (bucket[i].length > 0) {
        result.push(...bucket[i]);
      }
    }
  
    return result.slice(0, k);
  }
  
  
  // Example usage:
//   const nums = [1, 1, 1, 2, 2, 3];
//   const k = 2;
//   console.log(topKFrequent(nums, k)); // Output: [1, 2]