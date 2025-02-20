function deleteEl(){
    let arr=[1,2,3,4,5,6]
    let position=2;
    for (let i=position-1; i<arr.length; i++){
        
            arr[i]= arr[i+1];
        
        // if (i<position-1) break;
    } 
    arr.length=arr.length-1
    return arr;
}

console.log(deleteEl())