// Evaluate Reverse Polish Notation
// You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.

// Return the integer that represents the evaluation of the expression.

// The operands may be integers or the results of other operations.
// The operators include '+', '-', '*', and '/'.
// Assume that division between integers always truncates toward zero.

function evalRPN(tokens) {
    const stack = [];
    const operators = new Set(['+', '-', '*', '/']);

    for (const token of tokens) {
        if (operators.has(token)) {
            const b = stack.pop();
            const a = stack.pop();
            let result;

            switch (token) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = Math.trunc(a / b); // Truncate towards zero
                    break;
            }
            stack.push(result);
        } else {
            stack.push(parseInt(token, 10));
        }
    }

    return stack[0];
}

// Example usage:
console.log(evalRPN(["2", "1", "+", "3", "*"])); // Output: 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // Output: 6
console.log(evalRPN(["10", "6", "9", "3", "/", "-", "*"])); // Output: 70