function searchElement(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return 1;
    }
  }
  return 0;
}

function insertElementAt(arr, index, element) {
  arr.splice(index, 0, element);
  return arr;
}

// without inbuilt function
function insertElementAt(arr, index, element) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      newArr.push(element);
    }
    newArr.push(arr[i]);
  }
  return newArr;
}

function deleteElement(arr, n) {
  return arr.filter((el) => el !== n);
}

// without inbuilt methods
function deleteElement(arr, n) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== n) {
      result.push(arr[i]);
    }
  }
  return result;
}

// use index and splice
function deleteElement(arr, n) {
  let index = arr.indexOf(n);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

console.log(deleteElement([1, 2, 3, 4, 5, 2], 2)); // [1,2,3,4,5]

function print(arr, n) {
  let output = "";
  for (let i = 0; i < n; i += 2) {
    output += arr[i] + " ";
  }
  return output.trim();
}

console.log(print([1, 2, 3, 4, 5], 5)); // 1 3 5

function getMinMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }

function getMinMax(arr, n) {
  //code here
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}

// time complexity is O(n)

console.log(getMinMax([1, 2, 3, 4, 5], 5)); // [1,5]

function countOfElements(arr, n, x) {
  //count elements less than equal to x
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] <= x) {
      count++;
    }
  }
  return count;
}

console.log(countOfElements([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 9, 3)); //

function convertToWave(n, arr) {
  //your code here
  for (let i = 0; i < n - 1; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}

console.log(convertToWave(5, [1, 2, 3, 4, 5])); // 2 1 4 3 5



// Given a 2D integer array mat[][] and a number x, find whether element x is present in the matrix or not.

function findElementInMatrix(mat, x) {
  for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[i].length; j++) {
          if (mat[i][j] === x) {
              return true;
          }
      }
  }
  return false;
}

// Example usage:
const matrix = [[6, 23, 21],[4, 45, 32],[69, 11, 87]];
const elementToFind = 32;
const isPresent = findElementInMatrix(matrix, elementToFind);

console.log(isPresent); // Output: true