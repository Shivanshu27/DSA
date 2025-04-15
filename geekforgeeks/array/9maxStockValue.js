// You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.
// You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.
// Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

function maxProfit(prices) {
    // Initialize minPrice to Infinity to ensure any price in the array will be smaller.
    let minPrice = Infinity;
    // Initialize maxProfit to 0 since no profit can be negative.
    let maxProfit = 0;

    // Iterate through each price in the array.
    for (const price of prices) {
        // Update minPrice to the smallest price encountered so far.
        minPrice = Math.min(minPrice, price);
        // Calculate the profit if we sell at the current price and update maxProfit if it's higher.
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    // Return the maximum profit found.
    return maxProfit;
}

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
const result = maxProfit(prices);
console.log(`The maximum profit is ${result}.`); // Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.
// Note: The function uses a single pass to find the minimum price and maximum profit.
// The time complexity is O(n), where n is the number of days.
// The space complexity is O(1) since we are using only a constant amount of extra space.