// We have N persons sitting on a round table. Any person can do a handshake with any other person.

//      1
// 2         3
//      4

// Handshake with 2-3 and 1-4 will cause cross.

// In how many ways these N people can make handshakes so that no two handshakes cross each other. N would be even. 

function countHandshakes(n) {
    if (n === 0) return 1;
    let result = 0;
    for (let i = 0; i < n; i += 2) {
        result += countHandshakes(i) * countHandshakes(n - 2 - i);
    }
    return result;
}

// Example usage:
console.log(countHandshakes(4)); // Output: 2
console.log(countHandshakes(6)); // Output: 5
console.log(countHandshakes(8)); // Output: 14
console.log(countHandshakes(10)); // Output: 42
