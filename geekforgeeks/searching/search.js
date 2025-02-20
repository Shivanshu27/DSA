function search(k, arr) {
    // code here
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === k) {
            return i;
        }
    }
    return -1;
}

console.log(search(3, [1, 2, 3, 4, 5])); // 2



function binarySearch(arr, k){
    let target = k;
    let left = 0;
    let right = arr.length - 1;
    let mid;
    while(left <= right){
        mid = Math.floor((left + right) / 2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5],4)); // 4



// Given a sorted array arr[] of size n without duplicates, and given a value x. Floor of x is defined as the largest element k in arr[] such that k is smaller than or equal to x. Find the index of k(0-based indexing).

function findFloor(arr, n, x){
    let start = 0;
    let end = n - 1;
    let res = -1;
    while(start <= end){
        let mid = Math.floor(start + (end - start) / 2);
        if(arr[mid] == x){
            return mid;
        }
        else if(arr[mid] < x){
            res = mid;
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return res;
}

console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 7, 5)); // 1