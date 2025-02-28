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


// Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

// Note: The second largest element should not be equal to the largest element.

function getSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = -1;
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
          secondLargest = largest;
          largest = arr[i];
          console.log(largest, secondLargest);
      } else if (arr[i] > secondLargest && arr[i] !== largest) {
          secondLargest = arr[i];
          console.log(largest, secondLargest);
      }
  }
  return secondLargest;
}

// Test cases
// console.log(getSecondLargest([1, 2, 3, 4, 5])); // 4
// console.log(getSecondLargest([1, 2, 3, 4, 4])); // 3
// console.log(getSecondLargest([1, 1, 1, 1, 1])); // -1
// console.log(getSecondLargest([1, 1, 1, 1, 2])); // 1
console.log(getSecondLargest([1, 1, 1, 2, 2])); // 1


// Second Condition:

// else if (arr[i] > secondLargest && arr[i] !== largest): If the current element is greater than secondLargest and not equal to largest:
// secondLargest = arr[i];: Update secondLargest to the current element.
// This condition ensures that secondLargest is updated only if the current element is distinct from largest and greater than the current secondLargest.