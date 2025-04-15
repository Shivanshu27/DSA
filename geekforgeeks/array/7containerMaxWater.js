// You are given an integer array heights where heights[i] represents the height of the 
// 𝑖
// 𝑡
// ℎ
// i 
// th
//   bar.

// You may choose any two bars to form a container. Return the maximum amount of water a container can store.


function maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxArea = 0;

    while (left < right){
        const width = right -left;
        const height = Math.min(heights[left], heights[right]);
        const area = width * height;
        maxArea = Math.max(maxArea, area);
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}

// Example usage:
const heights = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(heights)); // Output: 49
// Explanation: The container with the most water is between heights[1] (8) and heights[8] (7),
// which has a width of 7 and a height of 7, so the area is 7 * 7 = 49.
// Note: The function uses a two-pointer approach to find the maximum area efficiently.
// The time complexity is O(n), where n is the number of elements in the heights array.
// The space complexity is O(1) since we are using only a constant amount of extra space.