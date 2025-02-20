function UncommonChars(A, B){
    //code here
 // Create sets to store unique characters of both strings
let setA = new Set(A);
let setB = new Set(B);

// Create an array to store the uncommon characters
let result = [];

// Add characters from setA that are not in setB
for (let char of setA) {
    if (!setB.has(char)) {
        result.push(char);
    }
}

// Add characters from setB that are not in setA
for (let char of setB) {
    if (!setA.has(char)) {
        result.push(char);
    }
}

// Sort the result array and join it to form the final string
if (result.length == 0) return -1;
return result.sort().join('');
}


// Given two strings A and B consisting of lowercase english characters. Find the characters that are not common in the two strings. 

function UncommonChars(A, B){
    //code here
    let uncommon = '';
    for(let i=0; i<A.length; i++){
        if(B.indexOf(A[i]) === -1){
            uncommon += A[i];
        }
    }
    for(let i=0; i<B.length; i++){
        if(A.indexOf(B[i]) === -1){
            uncommon += B[i];
        }
    }
    // sort the string
    uncommon = uncommon.split('').sort().join('');
    // remove duplicate characters
    uncommon = uncommon.replace(/(.)(?=.*\1)/g, "");
    if (uncommon === '') return -1;
    return uncommon;
}

console.log(UncommonChars('geeks', 'geeks')); // abde