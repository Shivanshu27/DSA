// You are given two strings s1 and s2.

// Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.

// Both strings only contain lowercase letters.

// We use a sliding window approach on s2 with a fixed window size equal to the length of s1. 
// To track the current window, we maintain a running frequency count of characters in s2. 
// This frequency count represents the characters in the current window. 
// At each step, if the frequency count matches that of s1, we return true.


function checkInclusion(s1, s2) {
    // If s1 is longer than s2, it's impossible for s2 to contain a permutation of s1
    if (s1.length > s2.length) return false;

    // Initialize frequency arrays for s1 and the current window in s2
    const s1Count = Array(26).fill(0); // Frequency count for characters in s1
    const s2Count = Array(26).fill(0); // Frequency count for the current window in s2

    // Populate the frequency arrays for s1 and the first window of s2
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++; // Increment count for s1
        s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++; // Increment count for the first window in s2
    }

    // Check if the frequency arrays match for the first window
    if (s1Count.toString() === s2Count.toString()) return true;

    // Slide the window over s2, one character at a time
    for (let i = s1.length; i < s2.length; i++) {
        // Add the new character to the current window
        s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        // Remove the character that is no longer in the window
        s2Count[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]--;

        // Check if the updated frequency arrays match
        if (s1Count.toString() === s2Count.toString()) return true;
    }

    // If no matching window is found, return false
    return false;
}


// Example usage:
console.log(checkInclusion("ab", "eidbaooo")); // true


// time complexity: O(n)
// space complexity: O(1) since the size of the frequency count arrays is constant (26 for lowercase letters)