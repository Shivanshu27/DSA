// function fibonacci(n){
//     let arr= [0,1];
//     if (n<=2) return 1;
//     for (let i=2; i<=n; i++){
//         arr[i]= arr[i-1]+arr[i-2];
//     }
//     return arr[n];

// }

// console.log(fibonacci(3));

function fibonacci(n){
    if (n<=1) return n;
    else return fibonacci(n-1)+fibonacci(n-2);
}

console.log(fibonacci(12));

function fibonacci(n, memo = {}) {
    if (memo[n]) return memo[n];
    if (n <= 2) return 1;
    var res = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    memo[n] = res;
    return res;
  }

  function fibonacci(n) {
    var fib = [0, 1];
    for (var i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
  

function factorial(item){
    if(item==0){
        return 1
    }
   return item*factorial(item-1)

}
let data =5
console.warn(factorial(data))