// Minimum Window Substring
// Given two strings s and t, return the shortest substring of s such that every character in t, including duplicates, is present in the substring. If such a substring does not exist, return an empty string "".

// You may assume that the correct output is always unique.

// Example 1:

// Input: s = "OUZODYXAZV", t = "XYZ"

// Output: "YXAZ"


// We can use a dynamically sized sliding window approach on s. We iterate through s while maintaining a window. If the current window contains at least the frequency of characters from t, we update the result and shrink the window until it is valid.

// We should ensure that we maintain the result substring and only update it if we find a shorter valid substring. Additionally, we need to keep track of the result substring's length so that we can return an empty string if no valid substring is found.

function minWindow(s, t) {
    if (t.length > s.length) return ""; // If t is longer than s, return empty string

    const sCount = Array(128).fill(0); // Frequency count for characters in s
    const tCount = Array(128).fill(0); // Frequency count for characters in t

    // Populate frequency count for t
    for (let char of t) {
        tCount[char.charCodeAt(0)]++;
    }

    let left = 0; // Left pointer for the sliding window
    let right = 0; // Right pointer for the sliding window
    let minLength = Infinity; // Minimum length of the valid substring found
    let minSubstring = ""; // Result substring

    while (right < s.length) {
        // Expand the window by including the character at the right pointer
        sCount[s[right].charCodeAt(0)]++;
        right++;

        // Check if the current window contains all characters from t
        while (isValid(sCount, tCount)) {
            // Update the result if the current window is smaller
            if (right - left < minLength) {
                minLength = right - left;
                minSubstring = s.substring(left, right);
            }

            // Shrink the window from the left
            sCount[s[left].charCodeAt(0)]--;
            left++;
        }
    }

    return minSubstring; // Return the result substring
}
// Helper function to check if the current window is valid
function isValid(sCount, tCount) {
    for (let i = 0; i < 128; i++) {
        if (sCount[i] < tCount[i]) {
            return false; // If any character in t is not present in sCount, return false
        }
    }
    return true; // All characters in t are present in sCount
}
// Example usage:
console.log(minWindow("OUZODYXAZV", "XYZ")); // Output: "YXAZ"
console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
