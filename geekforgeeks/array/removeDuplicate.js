function remove_duplicate(arr,n){
    //code here
    let result = [];
    let charCount = {};
    for(let i = 0; i < n; i++){
        if(!charCount[arr[i]]){
            charCount[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    return result;
    //     // If the array is empty or has only one element, it's already unique
    //     if (n == 0 || n == 1) return n;
    
    //     // Initialize the index of the next unique element
    //     let i = 0;
    
    //     // Traverse the array starting from the second element
    //     for (let j = 1; j < n; j++) {
    //         // If the current element is not equal to the last unique element
    //         if (arr[i] !== arr[j]) {
    //             // Move to the next position and set the element
    //             i++;
    //             arr[i] = arr[j];
    //         }
    //     }
    
    //     // The number of unique elements is i + 1
    //     return i + 1;
    
}

console.log(remove_duplicate([2, 2, 2, 2, 2],5)) // [1,2,3,4,5]


function removeDuplicate(arr){
    // without inbuilt function
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(result.indexOf(arr[i]) === -1){
            result.push(arr[i]);
        }
    }
    return result;

}

console.log(removeDuplicate([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10])) // [1,2,3,4,5,6,7,8,9,10]


// Given an array arr of size n which contains elements in range from 0 to n-1, you need to find all the elements occurring more than once in the given array. Return the answer in ascending order. If no such element is found, return list containing [-1]. 

// Example 1:
function findDuplicates(arr){
    let result = [];
    let map = {};
    for(let i = 0; i < arr.length; i++){
        if(map[arr[i]]){
            map[arr[i]]++;
        } else {
            map[arr[i]] = 1;
        }
    }
    for(let key in map){
        if(map[key] > 1){
            result.push(parseInt(key));
        }
    }
    if(result.length === 0){
        return [-1];
    }
    return result.sort((a,b) => a - b);
}



// Given a sorted array arr. Return the size of the modified array which contains only distinct elements.
// Note:
// 1. Don't use set or HashMap to solve the problem.
// 2. You must return the modified array size only where distinct elements are present and modify the original array such that all the distinct elements come at the beginning of the original array.

function removeDuplicates(arr) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            arr[index] = arr[i];
            index++;
        }
    }
    return index;
}