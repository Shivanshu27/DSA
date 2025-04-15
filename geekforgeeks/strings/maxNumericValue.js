// Given a alphanumeric string S, extract maximum numeric value from S.

// Example 1:

// Input:
// S = 100klh564abc365bg
// Output: 564
// Explanation: Maximum numeric value 
// among 100, 564 and 365 is 564.

function extractMaximum(S) {
    let max = 0;
    let num = '';
    for (let i = 0; i < S.length; i++) {
        if (!isNaN(S[i])) {
            num += S[i];
        } else {
            max = Math.max(max, num);
            num = '';
        }
    }
    return max;
}

console.log(extractMaximum('100klh564abc365bg')); // 564
console.log(extractMaximum('abvhdjfh')); // 0