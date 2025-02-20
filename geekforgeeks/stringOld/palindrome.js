// function palindrome(str){
//     for (let i=0; i<(str.length/2);i++){
//         if (str[i]!=str[str.length-1-i]) return false;
        
//     } return true;
// }




function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}

console.log(checkPalindrom("toyota"));

// function palindrome(data) {
//     let start = 0;
//     let end = data.length - 1;
//     let result = true;
//     while (end > start) {
//       if (data[start] != data[end]) {
//         result = false;
//       }
//       start++;
//       end--;
//     }
//     return result;
//   }

//   let str = "level";
//   console.warn(palindrome(str))