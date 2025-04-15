function isAnagram(a,b){
    // return a.toLowerCase().split('').sort().join('') === b.toLowerCase().split('').sort().join('');
    // if(a.length !== b.length) return false; 
    // const charCount = {};   
    // for(let i = 0; i < a.length; i++){
    //     charCount[a[i]] = (charCount[a[i]] || 0) + 1;
    // }

    // for(let i = 0; i < b.length; i++){
    //     if(!charCount[b[i]]) return false;
    //     charCount[b[i]]--;
    // }
    // for (let key in charCount){
    //     if(charCount[key] !== 0) return false;
    // }
    // return true;
    // without in built js functions
    let aMap = {};
    let bMap = {};
    a = a.toLowerCase();
    b = b.toLowerCase();
    if(a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++){
        aMap[a[i]] = aMap[a[i]] + 1 || 1;
        bMap[b[i]] = bMap[b[i]] + 1 || 1;
    }

    console.log(aMap);
    console.log(bMap);
    for(let key in aMap){
        if(aMap[key] !== bMap[key]) return false;
    }
    return true;
}

console.log(isAnagram('geeksforgeeks', 'forgeeksgeeks')); // true

// b d


// k anagrams

function areKAnagrams(str1, str2, k) {
    let aMap = {};
    let bMap = {};
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // Step 1: Check if both strings have the same length
    if (str1.length !== str2.length) return false;

    // Step 2: Populate frequency maps for both strings
    for (let i = 0; i < str1.length; i++) {
        aMap[str1[i]] = (aMap[str1[i]] || 0) + 1;
        bMap[str2[i]] = (bMap[str2[i]] || 0) + 1;
    }

    console.log(aMap);
    console.log(bMap);

    // Step 3: Calculate the number of changes required
    let changes = 0;
    for (let key in aMap) {
        if (aMap[key] > (bMap[key] || 0)) {
            changes += aMap[key] - (bMap[key] || 0);
        }
    }

    // Step 4: Check if the number of changes is within the allowed limit k
    return changes <= k;
}

// Example usage:
console.log(areKAnagrams("fodr", "gork", 2)); // Output: true
console.log(areKAnagrams("fodr", "gork", 1)); // Output: false



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

  // time complexity: O(n * k log k) where n is the number of strings and k is the maximum length of a string.
// Space complexity: O(n * k) for storing the anagrams in the map.

function groupAnagrams(strs) {
  const res = {};
  for (let s of strs) {
      const count = new Array(26).fill(0);
      for (let c of s) {
          // explain this line
          // 'a'.charCodeAt(0) gives the ASCII value of 'a'
          // c.charCodeAt(0) gives the ASCII value of the character c
          // subtracting the two gives the index in the count array
          // for example, if c is 'b', then c.charCodeAt(0) - 'a'.charCodeAt(0) = 1
          // this means that we are counting the occurrences of each character
          // in the string s
          // for example, if s is "eat", then count[4] will be incremented for 'e', count[0] for 'a', and count[19] for 't'
          // this is a way to map characters 'a' to 'z' to indices 0 to 25
          // so we are counting the occurrences of each character in the string
          // and storing it in the count array
          // the count array will be used as a key to group anagrams together
          // for example, if s is "eat", then count will be [1, 0, 0, 0, 1
          count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
      }
      const key = count.join(',');
      if (!res[key]) {
          res[key] = [];
      }
      res[key].push(s);
  }
  return Object.values(res);
}

// time complexity: O(n * k) where n is the number of strings and k is the maximum length of a string.
// Space complexity: O(n * k) for storing the anagrams in the map.

// Given two strings S1 and S2 in lowercase, the task is to make them anagram. The only allowed operation is to remove a character from any string. Find the minimum number of characters to be deleted to make both the strings anagram. Two strings are called anagram of each other if one of them can be converted into another by rearranging its letters.

function remAnagram(str1, str2){
    // code here
    let str1Map = {};
    let str2Map = {};
    let count = 0;
    for(let i = 0; i < str1.length; i++){
        if(str1Map[str1[i]]){
            str1Map[str1[i]]++;
        }else{
            str1Map[str1[i]] = 1;
        }
    }
    for(let i = 0; i < str2.length; i++){
        if(str2Map[str2[i]]){
            str2Map[str2[i]]++;
        }else{
            str2Map[str2[i]] = 1;
        }
    }
    console.log(str1Map);
    console.log(str2Map);
    for(let key in str1Map){
        if(str2Map[key]){
            count += Math.abs(str1Map[key] - str2Map[key]);
        }else{
            count += str1Map[key];
        }
    }
    for(let key in str2Map){
        if(!str1Map[key]){
            count += str2Map[key];
        }
    }
    return count;
}


console.log(remAnagram('bcadeh', 'hea')) // 4