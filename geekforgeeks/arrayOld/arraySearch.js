let data = [10, 15, 18, 34, 67,70,89];
let start = 0;
let end = data.length - 1;
let find = 15;
let position = undefined;
function recursiveBinary(data, start, end) {
  mid = Math.floor((start + end) / 2);
  if (data[mid] === find) {
    position = mid;
    return true;
  } else if (data[mid] < find) {
    recursiveBinary(data, mid + 1, end);
  } else {
    recursiveBinary(data, start, mid - 1);
  }

}

recursiveBinary(data, start, end);
console.warn(position);


      // let data = [5, 9, 13, 17,45,67,89,100];
      // let find = 89;
      // let start = 0;
      // let end = data.length - 1;
      // let position = undefined;
      // while (start <= end) {
      //   let mid = Math.floor((start + end) / 2);
      //   // console.warn(data[mid]);
      //   if (data[mid] === find) {
      //     position = mid;
      //     break;
      //   } else if (data[mid] < find) {
      //     start = mid + 1;
      //   } else {
      //     end = mid - 1;
      //   }
      // }
      // console.warn(position)
    



        // let data =[20,40,60,5,10,70,80,99];
        // let item=70;
        // let index=undefined;

        // for(i=0;i<=data.length-1;i++){
        //     // console.warn(data[i])
        //     if(data[i]===item)
        //     {
        //         index=i;
        //         break;
        //     }
        // }
        // console.warn(index);

        // console.warn(data.indexOf(item))
        // data.splice(2,1)
        // console.warn(data)
        function searchElement(){
 let data =[20,40,60,5,10,70,80,99];
        let item=document.getElementById('searchEl').value;
        let index=undefined;
        for(i=0;i<=data.length-1;i++){
            // console.warn(data[i])
            if(data[i]===parseInt(item))
            {
                index=i;
                break;
            }
        }
        console.warn(index);
        }
