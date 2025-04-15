// You are given an array non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.

// Return the maximum area of water that can be trapped between the bars.

function trap(height) {
    let left = 0;
    let right = height.length - 1;
    let maxLeft = 0;
    let maxRight = 0;
    let waterTrapped = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            maxLeft = Math.max(maxLeft, height[left]);
            waterTrapped += maxLeft - height[left];
            left++;
        } else {
            maxRight = Math.max(maxRight, height[right]);
            waterTrapped += maxRight - height[right];
            right--;
        }
    }

    return waterTrapped;
}
// Example usage:   
const height = [0,1,0,2,1,0,1,3,2,1,2,1];
const result = trap(height);
console.log(`The maximum area of water that can be trapped is ${result}.`); // Output: 6
// Explanation: The water can be trapped between the bars, and the total area is 6 units.
// Note: The function uses a two-pointer approach to find the maximum area efficiently.
// The time complexity is O(n), where n is the number of elements in the height array.
// The space complexity is O(1) since we are using only a constant amount of extra space.


// use time complexity is O(n) and space complexity is O(n)
// contruct a new array to store the max left and right 
// and calculate the water trapped at each index

function trap(height) {
    const n = height.length;
    if (n === 0) return 0;

    const leftMax = new Array(n);
    const rightMax = new Array(n);

    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    let waterTrapped = 0;
    for (let i = 0; i < n; i++) {
        waterTrapped += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return waterTrapped;
}

// Example usage:
const height1 = [0,1,0,2,1,0,1,3,2,1,2,1];
const result1 = trap(height1);    
console.log(`The maximum area of water that can be trapped is ${result}.`); // Output: 6
// Explanation: The water can be trapped between the bars, and the total area is 6 units.
// Note: The function uses a two-pointer approach to find the maximum area efficiently.
// The time complexity is O(n), where n is the number of elements in the height array.
// The space complexity is O(n) since we are using two additional arrays to store the left and right max heights.
// The space complexity can be reduced to O(1) by using two pointers to keep track of the left and right max heights.