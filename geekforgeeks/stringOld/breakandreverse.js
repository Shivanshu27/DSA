let str= 'stringsetir'
str=str.split('')
for (let i=0; i<str.length; i++){
    if (i%3==0 && str[i+2]){
        let temp= str[i];
        str[i]=str[i+2];
        str[i+2]= temp;
    }
}
console.log(str)