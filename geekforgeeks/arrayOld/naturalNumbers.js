// The input nums is supposed to be an array of unique integers ranging from 1 to nums.length (inclusive).
// However, there is a mistake: one of the numbers in the array is duplicated, which means another number
//  is missing. Find and return the **sum** of the duplicated number and the missing number.
//   Example: in the array [4, 3, 3, 1], 3 is present twice and 2 is missing, so 3 + 2 = 5 should be returned.

function findErrorNums(nums) {
  let set = new Set();
  let duplicate = -1;
  let sum = 0;
  for (let num of nums) {
      if (set.has(num)) {
          duplicate = num;
      }
      set.add(num);
      sum += num;
  }
  let n = nums.length;
  let missing = n * (n + 1) / 2 - sum;
  return [duplicate, duplicate + missing];
}

// Test cases
console.log(findErrorNums([1, 2, 2, 4])); // [2, 3]

function calculate() {
    let arr = [4, 3, 3, 1];
  
    let exists = {};
  
    for (let i = 0; i < arr.length; i++) {
      if (exists[arr[i]]) {
        exists[arr[i]]++;
      } else exists[arr[i]] = 1;
    }
  
    console.log(exists)
    for (j in exists) {
      if (exists[j] == 2) return j;
    }
    console.log(j)
    let ans = 0;
    let expectedSum = arr.length
  //   ((arr.length)(arr.length + 1)) / 2;
    console.log(expectedSum)
    let sum = 0;
    for (let y = 0; y < arr.length; y++) {
      sum = sum + arr[y];
    }
  
    if (expectedSum < sum) {
      ans = j + j - 1;
      console.log(ans);
    } else {
      ans = j +j + 1;
      console.log(ans);
    }
  }
  
  console.log(calculate());

  
  Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]