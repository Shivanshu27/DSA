// Largest Rectangle In Histogram
// You are given an array of integers heights where heights[i] represents the height of a bar. The width of each bar is 1.

// Return the area of the largest rectangle that can be formed among the bars.

// Note: This chart is known as a histogram.

// Example 1:

// Input: heights = [7,1,7,2,2,4]

// Output: 8


// We can use a stack with a monotonically strictly increasing nature, but instead of storing values, we store indices in the stack and perform operations based on the values at those indices. The top of the stack will represent the smaller bar that we encounter while extending the current bar. To find the left and right boundaries, we perform this algorithm from left to right and vice versa, storing the boundaries. Then, we iterate through the array to find the area for each bar and return the maximum area we get


function largestRectangleArea(heights) {
    const n = heights.length;
    const left = new Array(n).fill(0);
    const right = new Array(n).fill(0);
    const stack = [];
    
    // Calculate left boundaries
    for (let i = 0; i < n; i++) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        left[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(i);
    }
    
    stack.length = 0; // Clear the stack for the next pass
    
    // Calculate right boundaries
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        right[i] = stack.length ? stack[stack.length - 1] : n;
        stack.push(i);
    }
    
    let maxArea = 0;
    
    // Calculate the maximum area
    for (let i = 0; i < n; i++) {
        const width = right[i] - left[i] - 1;
        maxArea = Math.max(maxArea, heights[i] * width);
    }
    
    return maxArea;
}
// Example usage:   
console.log(largestRectangleArea([7, 1, 7, 2, 2, 4])); // Output: 8
// Explanation:
// The largest rectangle can be formed between the heights 7 and 2, with a width of 4 (from index 0 to index 3).
//
// The area is 7 * 4 = 28, which is the maximum area among all rectangles that can be formed in the histogram.
