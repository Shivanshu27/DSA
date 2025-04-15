// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Example 1:

// Input: ["neet","code","love","you"]

// Output:["neet","code","love","you"]


// We can use an encoding approach where we start with a number representing the length of the string, followed by a separator character (let's use # for simplicity), and then the string itself. To decode, we read the number until we reach a #, then use that number to read the specified number of characters as the string.


function encode(strs) {
    let encodedString = '';
    for (let str of strs) {
        encodedString += str.length + '#' + str;
    }
    return encodedString;
}
function decode(encodedString) {
    const decodedStrings = [];
    let i = 0;
    while (i < encodedString.length) {
        let j = i;
        while (encodedString[j] !== '#') {
            j++;
        }
        const length = parseInt(encodedString.slice(i, j));
        const str = encodedString.slice(j + 1, j + 1 + length);
        decodedStrings.push(str);
        i = j + 1 + length;
    }
    return decodedStrings;
}
// Example usage:
const originalStrings = ["leet", "code", "love", "you"];
const encodedString = encode(originalStrings);
console.log(encodedString); // Output: "4#leet4#code4#love3#you"
const decodedStrings = decode(encodedString);
console.log(decodedStrings); // Output: ["leet", "code", "love", "you"]
// The encode function takes an array of strings and returns a single encoded string.
// The decode function takes the encoded string and returns the original array of strings.
// This approach ensures that we can uniquely identify each string in the encoded format, even if the strings contain special characters or numbers.
// The time complexity of both encoding and decoding is O(n), where n is the total length of all strings combined. The space complexity is also O(n) for storing the encoded string and the decoded array.