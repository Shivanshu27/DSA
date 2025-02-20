function bubbleSort(arr) {
    let swapped = true;
    while (swapped) {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          console.log(`Swapping ${arr[i]} and ${arr[i + 1]}`);
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          console.log(arr);
          swapped = true;
        }
      }
    }
    return arr;
  }
  
  // Time complexity: O(n^2)
  // Space complexity: O(1)
  console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]