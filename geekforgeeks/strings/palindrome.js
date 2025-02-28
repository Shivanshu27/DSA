function checkPalindrome(S) {
  // without in built js methods
  let len = S.length;
  for (let i = 0; i < len / 2; i++) {
    if (S[i] !== S[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(checkPalindrome("madam"));

function checkPalindrome(S) {
  return S === S.split("").reverse().join("") ? 1 : 0;
}
console.log(checkPalindrome("madam"));

function isPossible(S) {
  let arr = S.split("");
  let charCount = {};
  for (let i = 0; i < arr.length; i++) {
    if (charCount[arr[i]]) {
      charCount[arr[i]]++;
    } else {
      charCount[arr[i]] = 1;
    }
  }
  console.log(charCount);
  // check if all values are even and only one value is odd
  let oddCount = 0;
  for (let key in charCount) {
    if (charCount[key] % 2 !== 0) {
      oddCount++;
    }
  }
  return oddCount <= 1;
}

console.log(isPossible("geeksforgeeks")); // true
