// Longest Substring Without Repeating Characters:
// Find the length of the longest substring without repeating characters in a given string.

// use set

function lengthOfLongestSubstring(s) {
  let maxLength = 0; // Initialize the maximum length
  let left = 0; // Start of the sliding window
  const charSet = new Set(); // Set to track characters in the current substring

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]); // Remove the leftmost character from the set
      left++; // Move the left pointer to the right
    }
    charSet.add(s[right]); // Add the current character to the set
    maxLength = Math.max(maxLength, right - left + 1); // Update the maximum length
  }

  return maxLength;
}

// Example usage:
const inputString1 = "abcabcbb";
const result1 = lengthOfLongestSubstring(inputString1);
console.log(
  `The length of the longest substring without repeating characters is: ${result1}`
); // Output: 3



// using brute force
function lengthOfLongestSubstringBruteForce(s) {
  let maxLength = 0; // Initialize the maximum length

  for (let i = 0; i < s.length; i++) {
    const seenChars = new Set(); // Set to track characters in the current substring
    for (let j = i; j < s.length; j++) {
      if (seenChars.has(s[j])) {
        break; // Stop if a repeating character is found
      }
      seenChars.add(s[j]); // Add the character to the set
      maxLength = Math.max(maxLength, j - i + 1); // Update the maximum length
    }
  }

  return maxLength;
}
// Example usage:
const inputStringBruteForce = "abcabcbb";
const resultBruteForce = lengthOfLongestSubstringBruteForce(
  inputStringBruteForce
);
console.log(
  `The length of the longest substring without repeating characters (Brute Force) is: ${resultBruteForce}`
); // Output: 3
// Example usage:

// time complexity: O(n^2)
// space complexity: O(min(n, m)) where n is the length of the string and m is the size of the character set

function lengthOfLongestSubstring(s) {
  let maxLength = 0; // Initialize the maximum length
  let left = 0; // Start of the sliding window
  const charIndexMap = {}; // Map to store character indices

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (charIndexMap[char] !== undefined && charIndexMap[char] >= left) {
      // If the character is repeated within the current window
      left = charIndexMap[char] + 1;
    }
    charIndexMap[char] = right; // Update the character's index
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// time complexity: O(n)
// space complexity: O(min(n, m)) where n is the length of the string and m is the size of the character set
// Example usage:
const inputString = "abcabcbb";
const result = lengthOfLongestSubstring(inputString);
console.log(
  `The length of the longest substring without repeating characters is: ${result}`
); // Output: 3