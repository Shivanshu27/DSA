// Non-Cyclical Number
// A non-cyclical number is an integer defined by the following algorithm:

// Given a positive integer, replace it with the sum of the squares of its digits.
// Repeat the above step until the number equals 1, or it loops infinitely in a cycle which does not include 1.
// If it stops at 1, then the number is a non-cyclical number.
// Given a positive integer n, return true if it is a non-cyclical number, otherwise return false.

function isNonCyclical(n) {
    const seen = new Set();
    
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = sumOfSquares(n);
    }
    
    return n === 1;
}

function sumOfSquares(num) {
    let sum = 0;
    
    while (num > 0) {
        const digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    
    return sum;
}


// Example usage:
console.log(isNonCyclical(19)); // Output: true
console.log(isNonCyclical(2));  // Output: false