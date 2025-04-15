// Valid Parentheses:
// Given a string containing just the characters '(', ')', '{', '}', '[', ']', determine if the input string is valid.

function isValid(s) {
    const stack = [];
    const parenthesesMap = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    for (let char of s) {
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else if (char === ')' || char === '}' || char === ']') {
        if (stack.length === 0 || stack.pop() !== parenthesesMap[char]) {
          return false; // Invalid closing parenthesis
        }
      }
    }
  
    return stack.length === 0; // If the stack is empty, it's valid
  }
  
  // Example usage:
//   const inputString = "([{}])";
  console.log(isValid(inputString)); // Outputs: true