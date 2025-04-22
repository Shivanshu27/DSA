// Kth Largest Element in a Stream
// Design a class to find the kth largest integer in a stream of values, including duplicates. E.g. the 2nd largest from [1, 2, 3, 3] is 3. The stream is not necessarily sorted.

// Implement the following methods:

// constructor(int k, int[] nums) Initializes the object given an integer k and the stream of integers nums.
// int add(int val) Adds the integer val to the stream and returns the kth largest integer in the stream.
// Example 1:

// Input:
// ["KthLargest", [3, [1, 2, 3, 3]], "add", [3], "add", [5], "add", [6], "add", [7], "add", [8]]

// Output:
// [null, 3, 3, 3, 5, 6]

// Explanation:
// KthLargest kthLargest = new KthLargest(3, [1, 2, 3, 3]);
// kthLargest.add(3);   // return 3
// kthLargest.add(5);   // return 3
// kthLargest.add(6);   // return 3
// kthLargest.add(7);   // return 5
// kthLargest.add(8);   // return 6

// A heap is a specialized binary tree-based data structure that satisfies the heap property:
// - In a max heap, for any given node, the value of the node is greater than or equal to the values of its children.
// - In a min heap, for any given node, the value of the node is less than or equal to the values of its children.
// Heaps are commonly used for priority queues, where the highest (or lowest) priority element is accessed in constant time.
// They are also used in algorithms like heap sort and for efficiently finding the kth largest or smallest element in a collection.

// Time Complexity:
// - Insertion into a heap takes O(log n) time because the heap needs to maintain its structure after adding an element.
// - Deletion (or removal of the root) also takes O(log n) for the same reason.
// - Accessing the root element (min or max) takes O(1) time.
// In this implementation, we use a min heap to efficiently track the kth largest element in the stream.



function add(val) {
    this.nums.push(val);
    this.nums.sort((a, b) => b - a);
    return this.nums[this.k - 1];
}


/**
 * const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        // Initialize a min heap to store the k largest elements.
        // The smallest element in the heap (the root) will always be the kth largest element in the stream.
        this.minHeap = new MinPriorityQueue();
        this.k = k;

        // Add all elements from the initial stream to the heap.
        for (const num of nums) {
            this.minHeap.enqueue(num);
        }

        // If the heap size exceeds k, remove the smallest element to maintain only the k largest elements.
        while (this.minHeap.size() > k) {
            this.minHeap.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        // Add the new value to the heap.
        this.minHeap.enqueue(val);

        // If the heap size exceeds k, remove the smallest element to maintain the k largest elements.
        if (this.minHeap.size() > this.k) {
            this.minHeap.dequeue();
        }

        // The root of the heap is the kth largest element.
        return this.minHeap.front();
    }
}



// Time Complexity of the KthLargest class:
// 1. Constructor:
//    - Adding each element from the initial array `nums` to the heap takes O(log k) time per element.
//    - For `n` elements in `nums`, this results in O(n log k).
//    - Additionally, maintaining the heap size by removing extra elements takes O(log k) per removal.
//    - Overall, the constructor has a time complexity of O(n log k), where `n` is the size of `nums` and `k` is the heap size.
//
// 2. add(val) method:
//    - Adding a new value to the heap takes O(log k) time.
//    - If the heap size exceeds `k`, removing the smallest element also takes O(log k) time.
//    - Therefore, the `add` method has a time complexity of O(log k).
//
// Space Complexity:
// - The heap stores at most `k` elements, so the space complexity is O(k).
// - Additional space is used for the input array `nums`, but this is not part of the class's internal storage.