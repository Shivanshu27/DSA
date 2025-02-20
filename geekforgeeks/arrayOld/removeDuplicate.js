function removeDuplicate(arr){
    let exists= {};
    let array= [];
    // let elm;
    for (let i=0; i<arr.length;i++){
        // elm= arr[i];
        if(!exists[arr[i]]){
            array.push(arr[i]);
            exists[arr[i]]=true;
        }
    }
    return array;
    
}

// function removeDuplicate(nums) {
//   return [...new Set(nums)];
// }

// without using Set

function removeDuplicate(nums) {
  return nums.filter((num, index) => nums.indexOf(num) === index);
}


                         
console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]));

function findDuplicates(arr) {
    const duplicates = [];
    const tempObj = {};
  
    for (const item of arr) {
      if (tempObj[item]) {
        duplicates.push(item);
      } else {
        tempObj[item] = true;
      }
    }
    console.log(duplicates)
  
    //  return Array.from(new Set(duplicates)); // Remove duplicates among duplicates
  }
  
  const myArray = [1, 2, 2, 3, 4, 5, 4, 6, 7, 7];
  const duplicateElements = findDuplicates(myArray);
  
  console.log(duplicateElements); // Output: [2, 4, 7]
  
