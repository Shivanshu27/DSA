// Generate Parentheses
// You are given an integer n. Return all well-formed parentheses strings that you can generate with n pairs of parentheses.

// Problem Explanation:
// A well-formed parentheses string means that every opening parenthesis '(' has a corresponding closing parenthesis ')'.
// For example:
// - "()" is valid.
// - "(())" is valid.
// - "(()" is invalid because it has an unmatched '('.
// - "())" is invalid because it has an unmatched ')'.

// The task is to generate all possible valid combinations of parentheses for a given number of pairs `n`.

// Approach:
// - Use a backtracking algorithm to explore all possible combinations of parentheses.
// - Maintain two counters: `open` for the number of '(' used and `close` for the number of ')' used.
// - Ensure that at any point, the number of `close` parentheses does not exceed the number of `open` parentheses (to maintain validity).
// - Stop the recursion when the length of the current string reaches `2 * n` (since each pair contributes 2 characters).

function generateParenthesis(n) {
    const result = []; // Array to store all valid combinations

    // Helper function for backtracking
    function backtrack(current, open, close) {
        // Base case: If the current string length is 2 * n, add it to the result
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        // If the number of open parentheses is less than n, add an open parenthesis
        if (open < n) {
            backtrack(current + '(', open + 1, close);
        }

        // If the number of close parentheses is less than the number of open parentheses, add a close parenthesis
        if (close < open) {
            backtrack(current + ')', open, close + 1);
        }
    }

    // Start the backtracking process with an empty string and 0 open/close parentheses
    backtrack('', 0, 0);

    return result; // Return the list of valid combinations
}

// Example usage:
console.log(generateParenthesis(1)); // Output: ["()"]
// console.log(generateParenthesis(3)); // Output: ["((()))","(()())","(())()","()(())","()()()"]

// Explanation of Example:
// For n = 1:
// - There is only one valid combination: "()".

// For n = 3:
// - The valid combinations are:
//   1. "((()))": All opening parentheses are added first, followed by all closing parentheses.
//   2. "(()())": One closing parenthesis is added after two opening parentheses, followed by the rest.
//   3. "(())()": Two opening parentheses are followed by two closing parentheses, then one more pair.
//   4. "()(())": One opening parenthesis is followed by one closing parenthesis, then the rest.
//   5. "()()()": Alternating opening and closing parentheses.