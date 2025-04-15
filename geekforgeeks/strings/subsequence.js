// Output: 0 
// Explanation: A is not a subsequence of B
// as 'Y' appears before 'A'.
 

// Example 2:

// Input:
// A = gksrek
// B = geeksforgeeks
// Output: 1
// Explanation: A is a subsequence of B.need to read input or print anything. Your task is to complete the function isSubSequence() which takes two strings as input parameters and returns a boolean value denoting if A is a subsequence of B.

function isSubSequence(A, B) {
    // code here
    let i = 0;
    let j = 0;
    while(i < A.length && j < B.length){
        if(A[i] === B[j]){
            // console.log(A[i], B[j], i, j);
            i++;
        }
        j++;
    }
    return i === A.length? 1: 0;
}

console.log(isSubSequence('AXY', 'YADXCP')); // 0
console.log(isSubSequence('gksrek', 'geeksforgeeks')); // 1



// You are given two strings of equal lengths, s1 and s2. The task is to check if s2 is a rotated version of the string s1.

// Note: The characters in the strings are in lowercase.

// Example 1:

// Input:
// geeksforgeeks
// forgeeksgeeks
// Output: 
// 1
// Explanation: s1 is geeksforgeeks, s2 is
// forgeeksgeeks. Clearly, s2 is a rotated
// version of s1 as s2 can be obtained by
// left-rotating s1 by 5 units.
// Example 2:

// Input:
// mightandmagic
// andmagicmigth
// Output: 
// 0
// Explanation: Here with any amount of
// rotation s2 can't be obtained by s1.

function areRotations(s1,s2){
    if(s1.length !== s2.length) return false;
    console.log((s1+s1));
    return (s1+s1).includes(s2);
}

console.log(areRotations('geeksforgeeks','forgeeksgeeks'));//true   
console.log(areRotations('mightandmagic','andmagicmigth'));//false



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
            console.log(s[i + j], x[j]);
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
console.log(strstr("GeeksForGeeks", "For")); // Output: -1
// console.log(strstr("GeeksForGeeks", "For")); // Output: 5
// console.log(strstr("HelloWorld", "World")); // Output: 5
// console.log(strstr("abcdef", "def")); // Output: 3
// console.log(strstr("abcdef", "gh")); // Output: -1

