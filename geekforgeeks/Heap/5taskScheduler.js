// Task Scheduler
// You are given an array of CPU tasks tasks, where tasks[i] is an uppercase english character from A to Z. You are also given an integer n.

// Each CPU cycle allows the completion of a single task, and tasks may be completed in any order.

// The only constraint is that identical tasks must be separated by at least n CPU cycles, to cooldown the CPU.

// Return the minimum number of CPU cycles required to complete all tasks.

// Example 1:

// Input: tasks = ["X","X","Y","Y"], n = 2

// Output: 5
// Explanation: A possible sequence is: X -> Y -> idle -> X -> Y.





class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let count = new Array(26).fill(0);
        for (let task of tasks) {
            count[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        }

        let maxHeap = new MaxPriorityQueue();
        for (let i = 0; i < 26; i++) {
            if (count[i] > 0) maxHeap.push(count[i]);
        }

        let time = 0;
        let q = new Queue(); 

        while (maxHeap.size() > 0 || q.size() > 0) {
            time++;

            if (maxHeap.size() > 0) {
                let cnt = maxHeap.pop() - 1; 
                if (cnt !== 0) {
                    q.push([cnt, time + n]); 
                }
            }

            if (q.size() > 0 && q.front()[1] === time) {
                maxHeap.push(q.pop()[0]);
            }
        }

        return time;
    }
}






class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const count = new Array(26).fill(0);
        for (const task of tasks) {
            count[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        }

        const maxf = Math.max(...count);
        let maxCount = 0;
        for (const i of count) {
            if (i === maxf) {
                maxCount++;
            }
        }

        const time = (maxf - 1) * (n + 1) + maxCount;
        return Math.max(tasks.length, time);
    }
}





const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

function leastIntervals(tasks, n) {
    // Count the frequency of each task
    const taskCount = {};
    for (const task of tasks) {
        taskCount[task] = (taskCount[task] || 0) + 1;
    }

    // Create a max heap to store the tasks by their frequency
    const maxHeap = new MaxPriorityQueue();
    for (const [task, count] of Object.entries(taskCount)) {
        maxHeap.enqueue([task, count], count); // Use count as the priority
    }

    let intervals = 0;

    while (maxHeap.size() > 0) {
        const temp = [];
        let i = 0;

        // Process up to n + 1 tasks
        while (i <= n) {
            if (maxHeap.size() === 0 && temp.length === 0) {
                break; // No more tasks to process
            }
            if (maxHeap.size() > 0) {
                const [task, count] = maxHeap.dequeue(); // Fix: Directly use the dequeued value
                intervals++;
                if (count > 1) {
                    temp.push([task, count - 1]);
                }
            } else {
                intervals++; // Add idle time for this cycle
            }
            i++;
        }

        // Re-add the tasks to the heap after processing
        for (const item of temp) {
            maxHeap.enqueue(item, item[1]); // Use updated count as priority
        }
    }

    return intervals;
}

// Example usage
const tasks = ["X", "X", "Y", "Y"];
const n = 2;
console.log(leastIntervals(tasks, n)); // Output: 5



