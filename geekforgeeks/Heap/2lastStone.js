// Last Stone Weight
// You are given an array of integers stones where stones[i] represents the weight of the ith stone.

// We want to run a simulation on the stones as follows:

// At each step we choose the two heaviest stones, with weight x and y and smash them togethers
// If x == y, both stones are destroyed
// If x < y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// Continue the simulation until there is no more than one stone remaining.

// Return the weight of the last remaining stone or return 0 if none remain.

// Example 1:

// Input: stones = [2,3,6,2,4]

// Output: 1

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

function lastStoneWeight(stones) {
            // Create a max heap to store the stones
            const maxHeap = new MaxPriorityQueue();

            // Add all stones to the max heap
            for (const stone of stones) {
                maxHeap.enqueue(stone);
            }
        
            // Continue smashing stones until there is one or no stone left
            while (maxHeap.size() > 1) {
                const stone1 = maxHeap.dequeue();
                const stone2 = maxHeap.dequeue();
        
                if (stone1 !== stone2) {
                    maxHeap.enqueue(stone1 - stone2);
                }
            }
        
            // If there is one stone left, return its weight; otherwise, return 0
            return maxHeap.size() === 0 ? 0 : maxHeap.dequeue();
            }


// Example usage
const stones = [2, 3, 6, 2, 4];
console.log(lastStoneWeight(stones)); // Output: 1