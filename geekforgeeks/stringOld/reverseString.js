// function reverseString(str){
//     let reverse= '';
//     for (let i=str.length-1; i>=0;i--){
//         reverse= reverse+str[i];
//     }
//     return reverse;

// }

// console.log(reverseString('you are a nice dude'));

// function reverseString(str){
//     return str.split('').reverse().join('');
//     // return str.split('').reverse();

// }

// console.log(reverseString('you are a nice dude'));

// function reverseString(str){
//     return str.split(' ').reverse().join(' ');
//     // return str.split('').reverse();

// }

// console.log(reverseString('you are a nice dude'));

function reverseString(str){
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
    // return str.split('').reverse();

}

console.log(reverseString('you are a nice dude'));