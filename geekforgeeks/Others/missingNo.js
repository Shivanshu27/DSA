function missingNumber(arr){
    var n = arr.length+1, 
    sum = 0,
    expectedSum = n* (n+1)/2;
    
    for(var i = 0, len = arr.length; i < len; i++){
      sum += arr[i];
    }
    
    return expectedSum - sum;
  }


  function sumFinder(arr, sum){
    var len = arr.length;
    
    for(var i =0; i<len-1; i++){  
       for(var j = i+1;j<len; j++){
          if (arr[i] + arr[j] == sum)
              return true;
       }
    }
    
    return false;
  }