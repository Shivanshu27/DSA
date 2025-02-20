function transform(s){
    //code here
    // upper case first letter of each word
    return s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
}

console.log(transform('i love programming')) 