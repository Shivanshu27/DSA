function generatePattern(N) {
    let output = [];
    for (let i = N; i > 0; i--) {
        // console.log("i--", i);
        // let row = [];
        let row = "";
        // console.log("N--", N);
        for (let j = N; j >= 1; j--) {
            // console.log("j---", j);
            for (let k = 0; k < i; k++) {
                // row.push(j);
                row += j + " ";
                
            }
            
        }
        // row.push('$');
        console.log(row);
        output.push(...row);
    }
    // console.log(output);
    return output.join(' ');
}

// console.log("generated pattern --- ",generatePattern(3)); // 5 5 5 5 5 $ 4 4 4 4 $ 3 3 3 $ 2 2 $ 1 $
// generatePattern(3);
console.log("generated pattern --- ",generatePattern(3)); // 5 5 5 5 5 $ 4 4 4 4 $ 3 3 3 $ 2 2 $ 1 $



function getTable(N) {
    const firstTerm = N;
//  const lastTerm = 10 * N;
 const numTerms = 10;

//  const result = (numTerms / 2) * (firstTerm + lastTerm);
//  console.log(result);

//  return Array.from({ length: numTerms }, (_, i) => firstTerm + i * N);
 return Array.from({length:numTerms}, (_, i) => (i+1)*N);
 }

 console.log(getTable(5));

 // Time Complexity: O(1)
// Space Complexity: O(1)


 function countSquares(N) {
    // Initialize count to 0
    let count = 0;
    
    // Iterate from 1 to square root of N
    for (let i = 1; i * i < N; i++) {
        // If the square of the current number is less than N, increment count
        count++;
    }
    
    // Return the count
    return count;
}

// Example usage:
let N = 9;
console.log(countSquares(N)); // Output: 2

N = 3;
console.log(countSquares(N)); // Output: 1

// Time Complexity: O(√N)
// Space Complexity: O(1)




function nthTerm(a1,a2,n) {
    const d = a2 - a1;
    return nthTerm = a1 + (n - 1) * d;
    
}

console.log(nthTerm(1,3,10)); // 10

// Expected Time Complexity:O(1)
// Expected Auxillary Space:O(1)



function threeDivisors(query, q) {
    let arr = [];
    // console.log(query);
    for (let i = 0; i < q; i++) {
      arr.push(countNumbersWith3Divisors(query[i]));
    }

    function isPrime(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;

      if (num % 2 === 0 || num % 3 === 0) return false;

      let i = 5;
      while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
      }

      return true;
    }

    function countNumbersWith3Divisors(n) {
      console.log(n);
      let count = 0;
      for (let i = 4; i <= n; i++) {
        if (isPrime(Math.sqrt(i)) && Number.isInteger(Math.sqrt(i))) {
          count++;
        }
      }
      console.log(count);
      return count;
    }

    return arr;
  }

console.log(threeDivisors([1, 6], 2));



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




function distanceSquared(x1, y1, x2, y2) {
    return Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
}

function checkSquare(x1, y1, x2, y2, x3, y3, x4, y4) {
    let distances = new Set();
    
    distances.add(distanceSquared(x1, y1, x2, y2));
    distances.add(distanceSquared(x1, y1, x3, y3));
    distances.add(distanceSquared(x1, y1, x4, y4));
    distances.add(distanceSquared(x2, y2, x3, y3));
    distances.add(distanceSquared(x2, y2, x4, y4));
    distances.add(distanceSquared(x3, y3, x4, y4));

    console.log(distances);
    
    if (distances.size !== 2) return "No"; // Unequal sides and diagonals
    
    let side = Infinity, diagonal = 0;
    distances.forEach(distance => {
        // Assign side and diagonal lengths
        // assign smaller value of distance to side and larger value to diagonal
        side = Math.min(side, distance);
        diagonal = Math.max(diagonal, distance);
    });
    
    // Check if side and diagonal lengths are in ratio 1:√2
    if (side * 2 !== diagonal) return "No";

    return "Yes";
}

// Example usage with provided coordinates:
const x1 = 20, y1 = 10;
const x2 = 10, y2 = 20;
const x3 = 20, y3 = 20;
const x4 = 10, y4 = 10;

console.log("Can the points form a square?", checkSquare(x1, y1, x2, y2, x3, y3, x4, y4));


function Nth_term(a,r,n){
    //code here
   const MOD = BigInt(1000000007);

// Calculate R^(N-1) using binary exponentiation
let power = BigInt(1);
for (let i = 0; i < n - 1; i++) {
    power = (power * BigInt(r)) % MOD;
}

// Calculate Nth term using the formula: a * R^(N-1)
const nth_term = (BigInt(a) * power) % MOD;

return Number(nth_term);
}


function closestNumber(N, M) {
    // Calculate quotient and remainder
    const quotient = Math.floor(N / M);
    const remainder = N % M;
    console.log(quotient, remainder);

    // Calculate two possible candidates
    const x1 = quotient * M;
    console.log(x1);
    const x2 = (quotient + 1) * M;
    console.log(x2);

    // Return the candidate with maximum absolute value
    if (Math.abs(N - x1) < Math.abs(N - x2)) {
        return x1;
    } else if (Math.abs(N - x1) > Math.abs(N - x2)) {
        return x2;
    } else {
        return Math.max(Math.abs(x1), Math.abs(x2));
    }
}

// Example usage:
// console.log(closestNumber(13, 4));  // Output: 12
console.log(closestNumber(-15, 6)); // Output: -18



function isPowerOfAnother(X, Y){
    //code here
    if (Y === 1) {
        return 0;
    }
    
    // While Y is divisible by X, keep dividing
    while (Y % X === 0) {
        Y /= X;
    }
    
    // If Y becomes 1, it is a power of X
    return Y === 1 ? 1 : 0;
}

console.log(isPowerOfAnother(2, 8));


function isPowerOfAnother(x, y) {
    // If x is 1, y cannot be its power
    if (x === 1) {
        return 0;
    }

    // Check if y is a power of x
    let power = 1;
    while (power <= y) {
        if (power === y) {
            return 1;
        }
        power *= x;
    }

    // If we reach here, y is not a power of x
    return 0;
}




function armstrongNumer (n){
    // let sum = 0;
    // let temp = n;
    // let len = n.toString().length;
    // while (temp > 0){
    //     let r = temp % 10;
    //     sum += Math.pow(r, 3);
    //     temp = Math.floor(temp / 10);
    // }
    // return sum === n;
    const sum = Math.pow(Math.floor(n / 100), 3) +
                    Math.pow(Math.floor((n / 10) % 10), 3) +
                    Math.pow(n % 10, 3);

        return sum === n ? "Yes" : "No";
}

console.log(armstrongNumer(153)); // true

// if 3 digits then time complexity is O(1) and space complexity is O(no. of digits)


function isDigitSumPalindrome (n){
    let sum = 0;
    let temp = n;
    // let len = n.toString().length;
    while (temp > 0){
        let r = temp % 10;
        sum += r;
        // console.log(sum);
        temp = Math.floor(temp / 10);
    }
    console.log(sum);
    return (sum.toString() === sum.toString().split('').reverse().join('') )? 1: 0;
}

console.log(isDigitSumPalindrome(56));


function reverse_digit(n){
    //code here
    // no leading zeros 
    if (n === 0) return 0;
    // reverse the number
    let reversed = parseInt(n.toString().split('').reverse().join(''));
    // return the number
    return reversed;

}

console.log(reverse_digit(200)); // 4321


function kthDigit(A, B, K){
    //code here
    const num = Math.pow(A, B);
    const mod = Math.pow(10, K-1);
    console.log(num);
    console.log(mod);
    return Math.floor(num / mod) % 10;
}


console.log(kthDigit(3,3,1)); 


function binaryToDecimal(B) {
    // Convert the binary string to a decimal number
    return parseInt(B, 2);
  }
  
  // Example usage:
  console.log(binaryToDecimal("10001000")); // Output: 136
  console.log(binaryToDecimal("101100")); 


  function jumpingNumbers(X){
    if(X < 10) return X;
    for (let i = X; i>10; i--){
        let num = i.toString().split('');
        console.log(num);
        let flag = true;
        for(let j = 0; j < num.length - 1; j++){
            if(Math.abs(num[j] - num[j+1]) !== 1){
                flag = false;
                num = num -1;
                break;
            }
        }
        if(flag) return parseInt(num.join(''));
    }  
    }


console.log(jumpingNumbers(50)); 



function jumpingNumbers(X) {
    const queue = [];
    const visited = new Set();
    const result = [];

    // Initialize the queue with single-digit jumping numbers
    for (let i = 0; i <= 9; i++) {
        queue.push(i);
        visited.add(i);
    }

    console.log(queue);
    console.log(visited);

    // Perform BFS to generate jumping numbers
    while (queue.length > 0) {
        const num = queue.shift();
        console.log(num);
        result.push(num);
        console.log(result);

        const lastDigit = num % 10;
        console.log(lastDigit);
        const nextDigits = [lastDigit + 1, lastDigit - 1].filter(digit => digit >= 0 && digit <= 9);
        console.log(nextDigits);

        for (const digit of nextDigits) {
            const nextNum = num * 10 + digit;
            console.log(nextNum);
            if (nextNum <= X && !visited.has(nextNum)) {
                queue.push(nextNum);
                console.log(queue);
                visited.add(nextNum);
                console.log(visited);
            }
        }
    }

    return result.length > 0 ? Math.max(...result) : null;
}


console.log(jumpingNumbers(50)); 



function doOverlap(L1, R1, L2, R2) {
    // If one rectangle is to the left of the other
    if (L1.x > R2.x || L2.x > R1.x) {
        return 0;
    }

    // If one rectangle is above the other
    if (L1.y < R2.y || L2.y < R1.y) {
        return 0;
    }

    return 1;
}

// Example usage:
const L1 = { x: 0, y: 10 };
const R1 = { x: 10, y: 0 };
const L2 = { x: 5, y: 5 };
const R2 = { x: 15, y: 0 };

console.log(doOverlap(L1, R1, L2, R2)); // Output: 1

const L1_2 = { x: 0, y: 2 };
const R1_2 = { x: 1, y: 1 };
const L2_2 = { x: -2, y: 0 };
const R2_2 = { x: 0, y: -3 };

console.log(doOverlap(L1_2, R1_2, L2_2, R2_2)); // Output: 0


function  gcd(a, b) {
    // code here

    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}


console.log(gcd(12, 15)); // 3



function trailingZeroes(N){
    //code here
    // let count = 0;
    // let product = 1;
    // while (N > 0) {
    //    product *= N;
    //      N--;
    // }

    // // console.log(product);
    // while (product % 10 == 0) {
    //     count++;
    //     product = Math.floor(product / 10);
    // }
    // return count;
    let count = 0;
    while (N >= 5) {
        N = Math.floor(N / 5);
        count += N;
    }
    return count;
}

console.log(trailingZeroes(10)); // 1


function lcmAndGcd(A, B) {
    function gcd(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    const gcdValue = gcd(A, B);
    // console.log(gcdValue);
    const lcmValue = (A * B) / gcdValue;

    return [lcmValue, gcdValue];
}

// Example usage:
console.log(lcmAndGcd(5, 10));  // Output: [10, 5]
console.log(lcmAndGcd(14, 8));  // Output: [56, 2]


function getAngle(H,M){
    //code here
    // Calculate the position of the hour hand
    let hourAngle = (H % 12) * 30 + (M / 60) * 30;
    // Calculate the position of the minute hand
    let minuteAngle = M * 6;
    
    // Find the absolute difference between the two angles
    let angle = Math.abs(hourAngle - minuteAngle);
    
    // Get the smaller angle of the two possible angles
    let smallestAngle = Math.min(angle, 360 - angle);
    
    // Return the floor of the final result
    return Math.floor(smallestAngle);
 }

console.log(getAngle(3, 30)); // 75



