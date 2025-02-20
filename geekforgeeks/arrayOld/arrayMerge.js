let arr1 = [30, 45, 76,80];
let arr2 = [30, 45, 76, 80, 90];
let arr3= [];
function merge(){ 
    aElm = arr1[0],
    bElm = arr2[0],
    i = 1,
    j = 1;

if(arr1.length ==0)
  return b;
if(arr2.length ==0)
  return a;

  while (aElm||bElm){
    if ((aElm && !bElm)||(aElm<=bElm)){
        arr3.push(aElm);
        aElm= arr1[i++]
    }
    else{
        arr3.push(bElm);
        bElm= arr2[j++];
    }
  }

  return arr3;

    }

merge();
console.log(arr3);

// let data1 =[20, 45, 76];
// let data2 =[30, 45, 76, 80];
// let data3 =[];
// let d1=0;
// let d2=0;
// let d3=0;
// while(d1<data1.length && d2<data2.length){
//    if(data1[d1]<data2[d2])
//    {
//        data3[d3]=data1[d1];
//        d1++;
//    }else{
//        data3[d3]=data2[d2];
//        d2++;
//    }
//    d3++;
// }
// while(d1<data1.length){
//   data3[d3]=data1[d1];
//        d1++;
//        d3++;
// }
// console.log(data3)



// let arr1 = [30, 20, 45, 76, 20, 80];
// let arr2 = [30, 20, 45, 76, 20, 80];
// let arr3= [];
// function merge(){
    
//     let k=0;
//     for (let i= 0; i<arr1.length; i++){
//         arr3[i]= arr1[i];
//         k = i+1;
//     }

//     for (let j=0; j<arr2.length; j++){
//         arr3[k]= arr2[j];
//         k++;
//     }
//     return arr3;

// }

// merge();
// console.log(arr3);