function getSum(a, b) {
    let sum = 0;
  
    if (a === b) { // If a and b are equal, return a or b
      return a;
    }
  
    // Swap a and b if a is greater than b
    if (a > b) {
      [a, b] = [b, a];
    }
  
    // Add all integers between a and b (inclusive)
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  
    return sum;
  }
    

//   const GetSum = (a, b) => {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return (max - min + 1) * (min + max) / 2;
//   }