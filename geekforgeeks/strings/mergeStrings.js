// Given two strings S1 and S2 as input, the task is to merge them alternatively i.e. the first character of S1 then the first character of S2 and so on till the strings end.
// NOTE: Add the whole string if other string is empty.

function mergeStrings(s1, s2) {
    let result = '';
    let i = 0;
    while (i < s1.length || i < s2.length) {
        if (i < s1.length) {
            result += s1[i];
        }
        if (i < s2.length) {
            result += s2[i];
        }
        i++;
    }
    return result;
}


// Time complexity: O(n)
// Space complexity: O(1)

// Test case
console.log(mergeStrings('abc', 'def')); // adbecf


function mergeStrings(S1, S2)
{
    //your code here
    let result = "";
    let i = 0;
    let j = 0;
    while (i < S1.length && j < S2.length) {
        result += S1[i] + S2[j];
        i++;
        j++;
    }
    while (i < S1.length) {
        result += S1[i];
        i++;
    }
    while (j < S2.length) {
        result += S2[j];
        j++;
    }
    return result;
}

console.log(mergeStrings("abc", "defgh")); 