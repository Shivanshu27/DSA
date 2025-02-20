function arraySortedOrNot(arr) {
    // code here
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(arraySortedOrNot([1, 2, 3, 4, 5])); // true


function sortArray(arr){
    // no inbuilt sort function
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            console.log(arr);
        }
    }
    return arr;
}

console.log(sortArray([1, 3, 2, 8, 4, 5, 7, 6, 9, 0])); 


// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]



function binSort(A, N)
{
    //your code here
    let count = 0;
    for (let i = 0; i < N; i++) {
        if (A[i] === 0) {
            count++;
        }
    }
    for (let i = 0; i < count; i++) {
        A[i] = 0;
    }
    for (let i = count; i < N; i++) {
        A[i] = 1;
    }
    return A;
    
}

console.log(binSort([1, 0, 1, 1, 0, 1, 0, 1], 8)); // [0, 0, 0, 1, 1, 1, 1, 1]


function sortArray(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            // Swap arr[low] and arr[mid], then increment low and mid
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            console.log(arr);   
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            // 1 is in the right place, just move mid forward
            mid++;
        } else {
            // Swap arr[mid] and arr[high], then decrement high
            console.log(arr[mid], arr[high]);
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            console.log(arr);
            high--;
        }
    }
    return arr;
}

// Example usage:
let arr = [0, 1, 2, 0, 1, 2, 0, 2, 1, 0];
console.log(sortArray(arr)); // Output: [0, 0, 0, 0, 1, 1, 1, 2, 2, 2]
