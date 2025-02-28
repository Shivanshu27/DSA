// Given a string s, remove all its adjacent duplicate characters recursively, until there are no adjacent duplicate characters left.

// Note: If the resultant string becomes empty, return an empty string.
// Input: s = "abccbccba"
// Output: ""
// Explanation: ab(cc)b(cc)ba->abbba->a(bbb)a->aa->(aa)->""(empty string)

function removeAdjacentDuplicates(s) {
    function removeAdjacent(s) {
        let n = s.length;
        let result = '';
        let i = 0;

        while (i < n) {
            if (i < n - 1 && s[i] === s[i + 1]) {
                // Skip all adjacent duplicates
                while (i < n - 1 && s[i] === s[i + 1]) {
                    i++;
                }
            } else {
                // Add non-duplicate character to the result
                result += s[i];
            }
            i++;
        }

        return result;
    }

    // Recursively remove adjacent duplicates until no more can be removed
    let newStr = removeAdjacent(s);
    while (newStr.length !== s.length) {
        s = newStr;
        newStr = removeAdjacent(s);
    }

    return newStr;
}


console.log(removeAdjacentDuplicates("abccbccba")); // ""
console.log(removeAdjacentDuplicates("mississippi")); // "mp"