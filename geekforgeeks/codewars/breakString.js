function solution(str){
    str= str.split("")
    console.log(typeof(str))
    let result=[];
 //    console.log(str)
    if(str.length%2==0){
     for (let i=0; i<str.length+1;i++){
         if(str.length%2==0){
             result.push(str[i-2]+str[i-1])
             console.log(result)
         }i++
        }
    }else {
     str.push("_")
     for (let i=0; i<str.length+1;i++){
         if(str.length%2==0){
             result.push(str[i-2]+str[i-1])
             // console.log(result)
         }i++
        }
    }
    
    
    result.shift();
    return result;
 }
 
 console.log(solution('abcdefg'))
 
 // ['ab', 'cd', 'ef']


 function solution(str) {
    let result = [];
  
    // Iterate over the string, incrementing by 2 each time
    for (let i = 0; i < str.length; i += 2) {
      // Get the current pair of characters
      let pair = str.slice(i, i + 2);
  
      // If the length of the current pair is 1, add an underscore to it
      if (pair.length === 1) {
        pair += "_";
      }
  
      // Add the current pair to the result array
      result.push(pair);
    }
  
    return result;
  }
  