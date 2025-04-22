// K Closest Points to Origin
// You are given an 2-D array points where points[i] = [xi, yi] represents the coordinates of a point on an X-Y axis plane. You are also given an integer k.

// Return the k closest points to the origin (0, 0).

// The distance between two points is defined as the Euclidean distance (sqrt((x1 - x2)^2 + (y1 - y2)^2)).

// You may return the answer in any order.

function kClosest(points, k) {
    // Create a max heap to store the k closest points
    const maxHeap = new MaxPriorityQueue({ priority: (a, b) => b[0] - a[0] });

    // Calculate the distance for each point and add it to the heap
    for (const point of points) {
        const distance = Math.sqrt(point[0] ** 2 + point[1] ** 2);
        maxHeap.enqueue([distance, point]);
        if (maxHeap.size() > k) {
            maxHeap.dequeue();
        }
    }

    // Extract the k closest points from the heap
    const result = [];
    while (maxHeap.size() > 0) {
        result.push(maxHeap.dequeue()[1]);
    }

    return result;
}
// Example usage
const points = [[1, 3], [-2, 2], [5, 8], [0, 1]];
const k = 2;
console.log(kClosest(points, k)); // Output: [[1, 3], [0, 1]]
// Note: The output order may vary since the problem allows any order of the k closest points.


// Input:

// Step-by-Step Execution:

// Calculate Distances:

// [1, 3]: (\sqrt{1^2 + 3^2} = \sqrt{10} \approx 3.16)
// [-2, 2]: (\sqrt{(-2)^2 + 2^2} = \sqrt{8} \approx 2.83)
// [5, 8]: (\sqrt{5^2 + 8^2} = \sqrt{89} \approx 9.43)
// [0, 1]: (\sqrt{0^2 + 1^2} = \sqrt{1} = 1.0)
// Heap Operations:

// Add [3.16, [1, 3]] → Heap: [[3.16, [1, 3]]]
// Add [2.83, [-2, 2]] → Heap: [[3.16, [1, 3]], [2.83, [-2, 2]]]
// Add [9.43, [5, 8]] → Heap exceeds size k, remove [9.43, [5, 8]].
// Add [1.0, [0, 1]] → Heap: [[3.16, [1, 3]], [2.83, [-2, 2]], [1.0, [0, 1]]], remove [3.16, [1, 3]].
// Final Heap:

// Heap contains [[2.83, [-2, 2]], [1.0, [0, 1]]].
// Extract Results:

// Result: [[-2, 2], [0, 1]].


// // use min heap to solve the problem
// function kClosest(points, k) {
//     // Create a min heap to store the k closest points
//     const minHeap = new MinPriorityQueue({ priority: (a, b) => a[0] - b[0] });

//     // Calculate the distance for each point and add it to the heap
//     for (const point of points) {
//         const distance = Math.sqrt(point[0] ** 2 + point[1] ** 2);
//         minHeap.enqueue([distance, point]);
//         if (minHeap.size() > k) {
//             minHeap.dequeue();
//         }
//     }

//     // Extract the k closest points from the heap
//     const result = [];
//     while (minHeap.size() > 0) {
//         result.push(minHeap.dequeue()[1]);
//     }

//     return result;
// }
// // Example usage
// const points = [[1, 3], [-2, 2], [5, 8], [0, 1]];
// const k = 2;
// console.log(kClosest(points, k)); // Output: [[1, 3], [0, 1]]
