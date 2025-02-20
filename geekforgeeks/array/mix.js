function searchElement(a,x){
    for(let i=0;i<a.length;i++){
        if(a[i]===x){
            return 1;
        }
    }
    return 0;
}


function insertElement(a,y,yi){ 
    let N = a.length;
    // without in built js functions
    let temp = [];
    for (let i = 0; i < N; i++) {
        if (i === yi) {
            temp.push(y);
        }
        temp.push(a[i]);
    }

    return temp;

    // if (yi >= 0 && yi < N) {
    //     a.splice(yi, 0, y);
    //     console.log(a);
    //     return 1;
    // } else {
    //     return 0;
    // }
}

console.log(insertElement([2,4,1,0,2], 2, 2)); // [1,2,6,3,4,5]

function deleteElement(A, z) {
    const index = A.indexOf(z);
    console.log(index);
    if (index !== -1) {
        A.splice(index, 1);
        console.log(A);
        return 1;
    }
    return 0;
}


console.log(deleteElement([1,2,3,4,5,2],2)); // [1,2,3,4,5]


function print(arr, n) {
    let output = "";
    for (let i = 0; i < n; i += 2) {
        output += arr[i] + " ";
    }
    return output.trim();
}

console.log(print([1, 2, 3, 4, 5], 5)); // 1 3 5


function getMinMax(arr,n){
    //code here
    let min = arr[0];
    let max = arr[0];
    for(let i = 1; i < n; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return [min,max];

}

// time complexity is O(n)

console.log(getMinMax([1, 2, 3, 4, 5],5)); // [1,5]


function countOfElements(arr,n, x){
    //count elements less than equal to x
    let count = 0;
    for(let i = 0; i < n; i++){
        if(arr[i] <= x){
            count++;
        }
    }
    return count;

}

console.log(countOfElements([1,1,2,2,3,3,4,4,5,5], 9, 3)) //


function convertToWave(n, arr)
{
    //your code here
    for (let i = 0; i < n-1; i+=2) {
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
    }
    return arr;
}


console.log(convertToWave(5, [1,2,3,4,5])) // 2 1 4 3 5