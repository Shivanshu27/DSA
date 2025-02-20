function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while ((j > -1) && (current < arr[j])) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

// Time complexity: O(n^2)
// Space complexity: O(1)
console.log(insertionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]