// Given a string s containing only lowercase alphabets, the task is to sort it in lexicographically-descending order without in built functions

function sortString(s) {
    // Convert the string to an array of characters
    let arr = s.split("");
    let n = arr.length;
    
    // Use a nested loop to compare each character with the others
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // If the current character is less than the next character, swap them
            if (arr[i] < arr[j]) {
                console.log(arr[i], arr[j]);
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    
    // Join the array back into a string and return it
    return arr.join("");
}

// Test case
console.log(sortString("geeks")); // Output: "skgee"



function ReverseSort(str)
{
    //your code here
    // return str.split("").sort().reverse().join("");
    // without in built functions
    let arr = str.split("");
    let n = arr.length;
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n - i - 1; j++)
        {
            if(arr[j] < arr[j + 1])
            {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
    return arr.join("");
}

console.log(ReverseSort("geeks")); // "skgee"