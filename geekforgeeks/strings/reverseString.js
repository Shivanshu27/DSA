// function reverseString(str){
//     let reverse= '';
//     for (let i=str.length-1; i>=0;i--){
//         reverse= reverse+str[i];
//     }
//     return reverse;

// }

// console.log(reverseString('you are a nice dude'));

// function reverseString(str){
//     return str.split('').reverse().join('');
//     // return str.split('').reverse();

// }

// console.log(reverseString('you are a nice dude'));

// function reverseString(str){
//     return str.split(' ').reverse().join(' ');
//     // return str.split('').reverse();

// }

// console.log(reverseString('you are a nice dude'));

function reverseString(str){
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
    // return str.split('').reverse();

}

console.log(reverseString('you are a nice dude'));






// Given a string s, reverse the string without reversing its individual words. Words are separated by spaces.

// Note: The string may contain leading or trailing spaces, or multiple spaces between two words. The returned string should only have a single space separating the words, and no extra spaces should be included.

// Examples :

// Input: s = " i like this program very much "
// Output: "much very program this like i"
// Explanation: After removing extra spaces and reversing the whole string (not individual words), the input string becomes "much very program this like i". 


function reverseWords(s) {
    return s.split(' ').filter(word => word !== '').reverse().join(' ')
  }
  
  console.log(reverseWords(" i like this program very much ")) // "much very program this like i"