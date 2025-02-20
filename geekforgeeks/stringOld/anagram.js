function anagram(str1, str2){
    if (str1.length!==str2.length) return false;
    let obj1= {}
    for (let i=0;i<str1.length; i++){
        if(obj1[str1[i]]){
            obj1[str1[i]]++;
        }else{
            obj1[str1[i]]=1;
        }
    }
    console.log(obj1);
    for (let j=0; j<str2.length;j++){
        if(!obj1[str2[j]]) return false;
        obj1[str2[j]]--;
    } 
    return true;
    
    
}


console.log(anagram("hello", "llhlo"))


