  function is_balanced(s) {
    const stack = [];

    for (let char of s) {
        if (char === '(') {
            stack.push(char); // Push opening parenthesis onto the stack
        } else if (char === ')') {
            if (stack.length === 0) {
                return false; // Unmatched closing parenthesis
            }
            stack.pop(); // Pop the matching opening parenthesis
        }
    }

    return stack.length === 0; // Check if all parentheses are matched
}

// time complexity is O(n) where n is the length of the string s
// space complexity is O(n) where n is the length of the string s


// Example usage:
console.log(is_balanced("(()())")); // Output: true
console.log(is_balanced("(()"));    // Output: false
console.log(is_balanced(")("));     // Output: false



// def is_balanced(s: str) -> bool:
//     stack = []

//     for char in s:
//         if char == '(':
//             stack.append(char)  # Push opening parenthesis onto the stack
//         elif char == ')':
//             if not stack:
//                 return False  # Unmatched closing parenthesis
//             stack.pop()  # Pop the matching opening parenthesis

//     return len(stack) == 0  # Check if all parentheses are matched

// # Example usage:
// print(is_balanced("(()())"))  # Output: True
// print(is_balanced("(()"))     # Output: False
// print(is_balanced(")("))      # Output: False


function validBraces(braces) {
    const stack = [];
    const pairs= {
        "(":")",
        "[":"]",
        "{":"}"
    }

    // use a for loop to iterate through the braces
    // use for of loop to iterate through the string
    for (let char of braces){
        if(pairs[char]){
            stack.push(char); 
            // console.log(stack) 
        }else{
            const last= stack.pop();
            if(pairs[last]!==char){
                return false;
            }            
        }
    }    
    
    return stack.length === 0; // if stack is empty, braces are balanced
  }

  console.log(validBraces("(){}[]"))

  // time complexity is O(n) where n is the length of the string braces
  // space complexity is O(n) where n is the length of the string braces
  

function is_balanced(str) {
    const stack = [];
    
    for (let char of str) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')' && stack.length !== 0 && stack[stack.length - 1] === '(') {            
            stack.pop();
        } else if (char === ')') {
            return false;
        }
    }
    
    return stack.length === 0;
}

console.log(is_balanced("(()())"));




// let test = "(()())";
// console.log("Testing: ", test);

// function is_balanced(str) {
//     const stack = [];
    
//     for (let char of str) {
//         if (char === '(' || char === '{' || char === '[') {
//             stack.push(char);
//         } else if (char === ')' && stack.length !== 0 && stack[stack.length - 1] === '(') {
//             stack.pop();
//         } else if (char === '}' && stack.length !== 0 && stack[stack.length - 1] === '{') {
//             stack.pop();
//         } else if (char === ']' && stack.length !== 0 && stack[stack.length - 1] === '[') {
//             stack.pop();
//         } else if (char === ')' || char === '}' || char === ']') {
//             return false;
//         }
//     }
    
//     return stack.length === 0;
// }

// // Test cases with console.log to see each step
// console.log(is_balanced("(()())")); // Should output: true
// console.log(is_balanced("(()")); // Should output: false
// console.log(is_balanced(")(")); // Should output: false
// console.log(is_balanced("{[()]}")); // Should output: true
// console.log(is_balanced("{[(])}")); // Should output: false
// console.log(is_balanced("{[}")); // Should output: false