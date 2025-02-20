function strstr(s, x) {
    // Lengths of the strings
    const n = s.length;
    const m = x.length;

    // If x is longer than s, it cannot be a substring
    if (m > n) return -1;

    // Loop through s, up to the point where x could fit
    for (let i = 0; i <= n - m; i++) {
        // Check if the substring of s starting at i matches x
        let j;
        for (j = 0; j < m; j++) {
            if (s[i + j] !== x[j]) {
                break;
            }
        }
        // If we completed the inner loop, we found a match
        if (j === m) return i;
    }

    // If no match was found, return -1
    return -1;
}

// Test cases
console.log(strstr("GeeksForGeeks", "Fr")); // Output: -1
// console.log(strstr("GeeksForGeeks", "For")); // Output: 5
// console.log(strstr("HelloWorld", "World")); // Output: 5
// console.log(strstr("abcdef", "def")); // Output: 3
// console.log(strstr("abcdef", "gh")); // Output: -1
