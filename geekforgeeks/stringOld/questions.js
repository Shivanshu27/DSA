// Reverse String:
// Write a function to reverse a string.

function getSmallestPrefixes(strings) {
    const uniquePrefixes = new Set();

    for (const str of strings) {
        let prefix = '';
        for (let i = 0; i < str.length; i++) {
            prefix += str[i];
            if (!strings.some(s => s !== str && s.startsWith(prefix))) {
                console.log(prefix)
                break;
               
            }
        }
        uniquePrefixes.add(prefix);
    }

    return Array.from(uniquePrefixes);
}

// Example usage:
const inputStrings = ["parijat", "prashant", "pankaj"];

console.log(getSmallestPrefixes(inputStrings));
// Output: [ 'par', 'pr', 'pan' ]


function reverseString(inputString) {
    let reversed = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversed += inputString[i];
    }
    return reversed;
  }
  
  // Example usage:
  const originalString = "Hello, World!";
  const reversedString = reverseString(originalString);
  console.log(reversedString); // Outputs: "!dlroW ,olleH"
  

// Valid Palindrome:
// Determine if a given string is a palindrome considering only alphanumeric characters and ignoring cases.

function isPalindrome(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log(s)
    
    // Check if the string is a palindrome
    for (let i = 0; i < s.length / 2; i++) {
      if (s[i] !== s[s.length - 1 - i]) {
        return false; // Not a palindrome
      }
    }
    
    return true; // It's a palindrome
  }
  
  // Example usage:
  const inputString = "A man, a plan, a canal, Panama";
  console.log(isPalindrome(inputString)); // Outputs: true
  

// Anagram Detection:
// Given two strings, check if one is an anagram of the other.

function isAnagram(str1, str2) {
    // Remove spaces and convert to lowercase
    str1 = str1.replace(/ /g, '').toLowerCase();
    str2 = str2.replace(/ /g, '').toLowerCase();
  
    // Sort the characters in the strings
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
  
    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
  }
  
  // Example usage:
  const string1 = "listen";
  const string2 = "silent";
  console.log(isAnagram(string1, string2)); // Outputs: true

  

  function isAnagram(str1, str2) {
    // Remove spaces and convert to lowercase
    str1 = str1.replace(/ /g, '').toLowerCase();
    str2 = str2.replace(/ /g, '').toLowerCase();
  
    // Check if the lengths are the same
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Create character count objects for both strings
    const charCount1 = {};
    const charCount2 = {};
  
    // Count characters in the first string
    for (let char of str1) {
      charCount1[char] = (charCount1[char] || 0) + 1;
    }
  
    // Count characters in the second string
    for (let char of str2) {
      charCount2[char] = (charCount2[char] || 0) + 1;
    }
  
    // Compare character counts
    for (let char in charCount1) {
      if (charCount1[char] !== charCount2[char]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
//   const string1 = "listen";
//   const string2 = "silent";
  console.log(isAnagram(string1, string2)); // Outputs: true
  

// Longest Substring Without Repeating Characters:
// Find the length of the longest substring without repeating characters in a given string.

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
  
  // Example usage:
//   const inputString = "abcabcbb";
  console.log(lengthOfLongestSubstring(inputString)); // Outputs: 3 (the longest substring without repeating characters is "abc")


// Given a string s, convert the first letter of each word in the string to uppercase. 


function makeTitle(str) {
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ')
}

// without inbuilt functions
function makeTitle(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
      if (i === 0 || str[i - 1] === ' ') {
          result += str[i].toUpperCase()
      } else {
          result += str[i].toLowerCase()
      }
  }
  return result
}


// String to Integer (atoi):
// Implement the atoi function which converts a string to an integer.

// Implement strStr():
// Return the index of the first occurrence of a substring in a string, or -1 if the subs// Reverse String:
// Write a function to reverse a string.

// Longest Palindromic Substring:
// Find the longest palindromic substring in a given string.

// ZigZag Conversion:
// Convert a given string into a zigzag pattern.

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
  

// Count and Say:
// Generate the nth term of the "Count and Say" sequence.

// Group Anagrams:
// Given an array of strings, group anagrams together.

function groupAnagrams(strs) {
    const anagramGroups = new Map();
  
    for (let str of strs) {
      const sortedStr = str.split('').sort().join('');
      if (!anagramGroups.has(sortedStr)) {
        anagramGroups.set(sortedStr, [str]);
      } else {
        anagramGroups.get(sortedStr).push(str);
      }
    }
  
    return Array.from(anagramGroups.values());
  }
  
  // Example usage:
  const inputArray = ["eat", "tea", "tan", "ate", "nat", "bat"];
  console.log(groupAnagrams(inputArray));
  

// String Compression:
// Compress a string by replacing consecutive duplicate characters with their count.

// Roman to Integer:
// Convert a Roman numeral to an integer.

// Add Binary:
// Given two binary strings, return their sum as a binary string.

// Longest Common Prefix:
// Find the longest common prefix string amongst an array of strings.