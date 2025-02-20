let data = [34,3,1,25,54,12,89,5,76,789];


function reverse(data,start, end){
    if (start<=end){
    let temp= data[start];
    data[start]= data[end];
    data[end]= temp;
    reverse(data, start+1, end-1);
}
}

reverse(data, 0, data.length-1);
console.log(data)


function reverseArray(arr){
    let start=0;
    let end=arr.length-1;
    while(start<end){
        let temp= arr[start];
        arr[start]= arr[end];
        arr[end]= temp;
        start++;
        end--;
    }
    return arr;
}