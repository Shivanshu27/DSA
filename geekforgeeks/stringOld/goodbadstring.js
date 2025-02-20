function isGoodorBad(S) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxConsecutiveVowels = 0;
    let maxConsecutiveConsonants = 0;
    let currentVowels = 0;
    let currentConsonants = 0;

    for (let i = 0; i < S.length; i++) {
        const char = S[i];
        
        if (vowels.has(char)) {
            currentVowels++;
            currentConsonants = 0;
        } else if (char === '?') {
            currentVowels++;
            currentConsonants++;
        } else {
            currentVowels = 0;
            currentConsonants++;
        }

        console.log(currentVowels, currentConsonants);
        
        maxConsecutiveVowels = Math.max(maxConsecutiveVowels, currentVowels);
        maxConsecutiveConsonants = Math.max(maxConsecutiveConsonants, currentConsonants);
        
        if (currentVowels > 5 || currentConsonants > 3) {
            return 0; // BAD string
        }
    }
    
    return 1; // GOOD string
}

// Test cases
console.log(isGoodorBad("aeioup??")); // Output: 1 (GOOD string)
console.log(isGoodorBad("bcdaeiou??")); // Output: 0 (BAD string)
