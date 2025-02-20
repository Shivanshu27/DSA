// Given an array A of N elements. Find the majority element in the array. A majority element in an array A of size N is an element that appears strictly more than N/2 times in the array.

function majorityElement(arr) {
  let elementCount = new Map();
  arr.array.forEach(element => {
    if(elementCount.has(element)) {
      elementCount.set(element, elementCount.get(element)+1);
    }else{
        elementCount.set(element, 1);
    }
  });

  elementCount.forEach((value, key) => {
    console.log(key, value);
    if(value > arr.length/2) {
      return key;
    }
  } );

  
  
}

console.log(majorityElement([3, 1, 3, 3, 2])); // 3

// O(N)
// O(N)



// Given an array A of N elements. Find the majority element in the array. A majority element in an array A of size N is an element that appears strictly more than N/2 times in the array.

function majorityElement(arr) {
    let candidate = null;
    let count = 0;
  
    // First pass: Find the candidate
    for (let num of arr) {
      if (count === 0) {
        candidate = num;
      }
      count += (num === candidate) ? 1 : -1;
    }
  
    // this gives candidate with maximum occurence

    // Second pass: Verify the candidate
    count = 0;
    for (let num of arr) {
      if (num === candidate) {
        count++;
      }
    }
  
    if (count > arr.length / 2) {
      return candidate;
    } else {
      return -1;
    }
  }
  
  console.log(majorityElement([3, 1, 3, 1, 3, 2, 1, 2, 1, 3, 4, 1, 1, 1, 3, 1, 1])); // 3

    // O(N)
    // O(1)