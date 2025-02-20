function insert(){
    let arr=[1,2,3,4,5,6]
    let position=3;
    let element= 5;
    // console.log(arr)
    for (let i=arr.length; i>position-1; i--){
        
            arr[i]= arr[i-1];
        
        if (i==position){
            arr[position-1]=element
        }

        // if (i<position) break;

    }
    return arr;
}

console.log(insert())

// function insert(){
//     let arr=[1,2,3,4,5,6]
//     let position=3;
//     let element= 5;
//     // console.log(arr)
//     for (let i=arr.length; i>0; i--){
//         if (i>=position) {
//             arr[i]= arr[i-1];
//         }
//         if (i==position){
//             arr[position-1]=element
//         }

//         // if (i<position) break;

//     }
//     return arr;
// }

// console.log(insert())