function leaders(arr, n){
    // code here 
    // An element of the array is a leader if it is greater than all the elements to its right side or if it is equal to the maximum element on its right side.
    let max = arr[n-1];
    let result = [];
    result.push(max);
    for(let i = n-2; i >= 0; i--){
        console.log(arr[i], max);
        if(arr[i] >= max){
            max = arr[i];
            result.push(max);
        }
    }
    return result;
}

console.log(leaders([16, 17, 4, 3, 5, 2], 6)); // [17, 5, 2]