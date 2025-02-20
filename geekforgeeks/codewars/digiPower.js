function digPow(n, p){
    // ...

    let arr= n.toString().split('');
    console.log(arr)
    for (let i=0; i<arr.length;i++){
        arr[i]= arr[i]**p;
        p++;
    };
    console.log(arr)
    arr= arr.reduce(function(acc, curr) {
        return acc + curr;
      }, 0);
      console.log(arr)

    if(arr%n==0){
        return arr/n;  
    }else return -1;

}

console.log(digPow(695,2))

function digPow(n, p) {
    const digits = n.toString().split("").map(Number); // convert n to an array of digits
    const sumOfPowers = digits.reduce((acc, digit, index) => {
      return acc + Math.pow(digit, p + index); // sum of digits raised to successive powers
    }, 0);
    
    const k = sumOfPowers / n; // calculate k
    return Number.isInteger(k) ? k : -1; // return k or -1 if it's not an integer
  }
  