function print2largestDistinct(arr, n) {
    // If the array has less than 2 elements, return -1
    if (n < 2) return -1;

    let first = -1;
    let second = -1;

    for (let i = 0; i < n; i++) {
        // If the current element is greater than the first largest
        if(arr[i]>first){
            second = first;
            first = arr[i];
        
        }else if(arr[i]>second && arr[i] != first){
            second = arr[i];
        }

    }

    return second;
}

console.log(print2largestDistinct([1,2,3,4,5,6,7,8,9,10,10],10)); //9