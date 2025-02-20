function maxoccurence(str){
    str= str.split(' ').join('').split('');
    console.log(str);
    let charCount= {}
    let maxCount=0;
    for (let i=0; i<str.length;i++){
        if(charCount[str[i]]){
            charCount[str[i]]++;  
        }else{
            charCount[str[i]]=1;
        }  
        if (maxCount==0 || charCount[str[i]]>=maxCount){
            maxCount= charCount[str[i]];
        }
    }
    // var petCounts = str.reduce(function(obj, pet){
    //     if (!obj[pet]) {
    //         obj[pet] = 1;
    //     } else {
    //         obj[pet]++;
    //     }
    //     return obj;
    // }, {});
    
    // console.log(petCounts); 
    console.log(maxCount)
    console.log(charCount)

    for (j in charCount){
        if (charCount[j]==maxCount) {
            console.log(j)
        }
    }

  } 

  console.log(maxoccurence('the quick brown fox jumps then quickly blow air'));

  var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});

console.log(petCounts); 

/*
Output:
 { 
    dog: 2, 
    chicken: 3, 
    cat: 1, 
    rabbit: 1 
 }
 */


//  function longestRepetition(s) {
//     if (s.length === 0) { // If the string is empty, return ["", 0]
//       return ["", 0];
//     }
  
//     let maxChar = s[0];
//     let maxLength = 1;
//     let currentChar = s[0];
//     let currentLength = 1;
  
//     for (let i = 1; i < s.length; i++) {
//       if (s[i] === currentChar) {
//         currentLength++;
//       } else {
//         if (currentLength > maxLength) {
//           maxChar = currentChar;
//           maxLength = currentLength;
//         }
//         currentChar = s[i];
//         currentLength = 1;
//       }
//     }
  
//     if (currentLength > maxLength) {
//       maxChar = currentChar;
//       maxLength = currentLength;
//     }
  
//     return [maxChar, maxLength];
//   }
  

//  function findShort(s) {
//     // Split the string into an array of words
//     const words = s.split(" ");
  
//     // Initialize shortestLength to a large value
//     let shortestLength = Infinity;
  
//     // Iterate over each word in the array
//     for (let i = 0; i < words.length; i++) {
//       // If the length of the current word is less than shortestLength,
//       // update shortestLength to the length of the current word
//       if (words[i].length < shortestLength) {
//         shortestLength = words[i].length;
//       }
//     }
  
//     // Return shortestLength
//     return shortestLength;
//   }
  

// function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }

// function findShort(s){
// 	var arr = s.split(' ');
// 	var smallest = arr[0];
// 	for (var i = 0; i < arr.length; i++) {
// 		if(arr[i].length < smallest.length){
// 			smallest = arr[i];
// 		}
// 	}
// 	return smallest.length;
// }