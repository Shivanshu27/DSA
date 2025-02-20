function firstNonRepeatChar(str){
    let charCount= {}
    for (let i=0; i<str.length;i++){
        if(charCount[str[i]]){
            charCount[str[i]]++;  
        }else{
            charCount[str[i]]=1;
        }
       
    }
    console.log(charCount)
    for (j in charCount){
        if(charCount[j]==1){
            return j;
        }
    }
  }  

  console.log(firstNonRepeatChar('the quick brown fox jumps then quickly blow air'));


  // function removeDuplicateChar(str){
  //   var len = str.length,
  //       char, 
  //       charCount = {}, 
  //       newStr = [];
  //   for(var i =0; i<len; i++){
  //     char = str[i];
  //     if(charCount[char]){
  //       charCount[char]++;
  //     }
  //     else
  //       charCount[char] = 1;
  //   }
  //   for (var j in charCount){
  //     if (charCount[j]==1)
  //        newStr.push(j);
  //   }
  //   return newStr.join('');
  // }

  