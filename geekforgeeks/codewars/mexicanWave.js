function wave(str){
    // Code here
    let result=[];
    // string = string.substr(0, 4) + string.charAt(4).toUpperCase() + string.substr(5);
    for (let i=0; i<str.length;i++){
        if(str[i]!=0){
            let string= str;
            string= str.substr(0,i) + str.charAt(i).toUpperCase() + str.substr(i+1,str.length);
            result.push(string)
        }

    }
    return result;
  }

  console.log(wave("hel lo"))


//   wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]