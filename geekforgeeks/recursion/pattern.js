// Print a sequence of numbers starting with n, without using a loop. Replace n with n - 5, n−5... until n≤0. Then, replace n with n+5, n + 5, n+5 until n regains its initial value. Complete the function pattern(n) which takes n as input and returns a list containing the pattern.

function pattern(n){
    if (n <= 0) {
      return [n];
    }
    return [n].concat(pattern(n - 5)).concat([n]);
  }
  
  console.log(pattern(16)); // [16, 11, 6, 1, -4, 1, 6, 11, 16]
  
  
  // Initial Call:
  
  // pattern(16) is called.
  // Since 16 > 0, it proceeds to the recursive case.
  // Recursive Calls:
  
  // pattern(16) calls pattern(11).
  // pattern(11) calls pattern(6).
  // pattern(6) calls pattern(1).
  // pattern(1) calls pattern(-4).
  // Base Case:
  
  // pattern(-4) is called.
  // Since -4 <= 0, it hits the base case and returns [-4].
  // Returning Up the Call Stack:
  
  // pattern(1) receives the result [-4] from pattern(-4).
  // It concatenates [1] + [-4] + [1] to form [1, -4, 1].
  // pattern(6) receives the result [1, -4, 1] from pattern(1).
  // It concatenates [6] + [1, -4, 1] + [6] to form [6, 1, -4, 1, 6].
  // pattern(11) receives the result [6, 1, -4, 1, 6] from pattern(6).
  // It concatenates [11] + [6, 1, -4, 1, 6] + [11] to form [11, 6, 1, -4, 1, 6, 11].
  // pattern(16) receives the result [11, 6, 1, -4, 1, 6, 11] from pattern(11).
  // It concatenates [16] + [11, 6, 1, -4, 1, 6, 11] + [16] to form [16, 11, 6, 1, -4, 1, 6, 11, 16].