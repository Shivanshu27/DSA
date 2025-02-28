function countCommonElements(matrix, N) {
    // Hash map to store the frequency of elements
    let elementCount = new Map();

    // Initialize the elementCount map with the first row elements
    for (let j = 0; j < N; j++) {
        elementCount.set(matrix[0][j], 1);
    }

    // Iterate through the rest of the rows
    for (let i = 1; i < N; i++) {
        // Temporary map to store the current row's elements
        let tempCount = new Map();
        
        for (let j = 0; j < N; j++) {
            if (elementCount.has(matrix[i][j]) && elementCount.get(matrix[i][j]) === i) {
                tempCount.set(matrix[i][j], i + 1);
            }
        }

        // Update the elementCount map
        elementCount = tempCount;
    }

    // Count the elements that are present in all rows
    let commonElementCount = 0;
    for (let [key, value] of elementCount) {
        if (value === N) {
            commonElementCount++;
        }
    }

    return commonElementCount;
}

// Example usage
const N = 4;
const M = [
    [2, 1, 4, 3],
    [1, 2, 3, 2],
    [3, 6, 2, 3],
    [5, 2, 5, 3]
];

console.log(countCommonElements(M, N)); // Output: 2
