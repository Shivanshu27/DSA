// You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

// After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

// Example 1:
function characterReplacement(s, k) {
    let left = 0; // Initialize the left pointer of the sliding window
    let maxCount = 0; // Tracks the count of the most frequent character in the current window
    const count = {}; // Object to store the frequency of characters in the current window
  
    for (let right = 0; right < s.length; right++) { // Iterate through the string with the right pointer
        count[s[right]] = (count[s[right]] || 0) + 1; // Increment the frequency of the current character
        maxCount = Math.max(maxCount, count[s[right]]); // Update maxCount with the highest frequency in the window
  
        // Check if the current window size minus the most frequent character count exceeds k
        if (right - left + 1 - maxCount > k) {
            count[s[left]]--; // Reduce the frequency of the character at the left pointer
            left++; // Shrink the window from the left
        }
    }
  
    // The length of the longest valid substring is the size of the window
    return s.length - left;
}
  
// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'B' in "AABABBA" with 'A' and the longest substring is "AAAA" which has the length 4.

console.log(characterReplacement("AABABBA", 1)); // Output: 4