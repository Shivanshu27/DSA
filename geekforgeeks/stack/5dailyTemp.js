// Daily Temperatures
// You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.

// Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

// Example 1:

// Input: temperatures = [30,38,30,36,35,40,28]

// Output: [1,4,1,2,1,0,0]


// In the array [2, 1, 1, 3], we don't perform any pop operations while processing [2, 1, 1] because these elements are already in decreasing order. However, when we reach 3, we pop elements from the stack until the top element of the stack is no longer less than the current element. For each popped element, we compute the difference between the indices and store it in the position corresponding to the popped element.

function dailyTemperatures(temperatures) {
    const n = temperatures.length;
    const result = new Array(n).fill(0); // Initialize result array with zeros
    const stack = []; // Stack to keep track of indices of temperatures

    for (let i = 0; i < n; i++) {
        // While the stack is not empty and the current temperature is greater than the temperature at the index stored at the top of the stack
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const index = stack.pop(); // Pop the index from the stack
            result[index] = i - index; // Calculate the difference and store it in result
        }
        stack.push(i); // Push the current index onto the stack
    }

    return result; // Return the final result array
}
// Example usage:
console.log(dailyTemperatures([30, 38, 30, 36, 35, 40, 28])); // Output: [1, 4, 1, 2, 1, 0, 0]
// Explanation: