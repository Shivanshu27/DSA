// Kth Largest Element in an Array
// Solved 
// Given an unsorted array of integers nums and an integer k, return the kth largest element in the array.

// By kth largest element, we mean the kth largest element in the sorted order, not the kth distinct element.

// Follow-up: Can you solve it without sorting?

// Example 1:

// Input: nums = [2,3,1,5,4], k = 2

// Output: 4


function findKthLargest(nums, k) {
    // Create a min heap to store the k largest elements
    const minHeap = new MinPriorityQueue({ priority: (a, b) => a - b });

    // Add elements to the min heap
    for (const num of nums) {
        minHeap.enqueue(num);
        if (minHeap.size() > k) {
            minHeap.dequeue();
        }
    }

    // The root of the min heap is the kth largest element
    return minHeap.front().element;
}
// Example usage
const nums = [2, 3, 1, 5, 4];
const k = 2;
console.log(findKthLargest(nums, k)); // Output: 4
// Note: The output order may vary since the problem allows any order of the k largest elements.