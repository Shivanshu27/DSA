// function isPrime(n){
//     var divisor = 2;
  
//     while (divisor<=Math.sqrt(n)){
//       if(n % divisor == 0){
//        return false; 
//       }
//       else
//         divisor++;
//     }
//     return true;
//   }
  
// console.log(isPrime(9));

function sieveOfEratosthenes(n) {
    // Create a boolean array "prime[0..n]" and initialize
    // all entries it as true. A value in prime[i] will
    // finally be false if i is Not a prime, else true.
    let primes = new Array(n + 1).fill(true);

    // Start from 2 (the first prime number)
    for (let p = 2; p * p <= n; p++) {
        // If prime[p] is not changed, then it is a prime
        if (primes[p] === true) {
            // Update all multiples of p
            for (let i = p * p; i <= n; i += p) {
                console.log(i);
                primes[i] = false;
            }
        }
    }

    // Collect all prime numbers into an array
    let primeNumbers = [];
    for (let i = 2; i <= n; i++) {
        if (primes[i] === true) {
            primeNumbers.push(i);
        }
    }

    return primeNumbers;
}

// Example usage:
const n = 50;
console.log("Prime numbers up to", n, "are:", sieveOfEratosthenes(n));

function primeFactors(n){
    const arr= [1];
    let divisor= 2;
    while (n>2){
        if (n%divisor==0){
            arr.push(divisor);
            n=n/divisor;
        }else {
            divisor++;
        }
    } return arr;

}

console.log(primeFactors(8));