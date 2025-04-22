// You are given an m x n 2-D integer array matrix and an integer target.

// Each row in matrix is sorted in non-decreasing order.
// The first integer of every row is greater than the last integer of the previous row.
// Return true if target exists within matrix or false otherwise.

// Can you write a solution that runs in O(log(m * n)) time?

function searchMatrix(matrix, target) {
    // Handle edge case where the matrix is empty
    if (matrix.length === 0 || matrix[0].length === 0) return false;

    let rows = matrix.length; // Number of rows in the matrix
    let cols = matrix[0].length; // Number of columns in the matrix

    // Treat the 2D matrix as a 1D array for binary search
    let left = 0; // Start of the "array"
    let right = rows * cols - 1; // End of the "array"

    while (left <= right) {
        // Find the middle index of the current search range
        let mid = Math.floor((left + right) / 2);

        // Convert the 1D index 'mid' back to 2D indices to access the matrix
        // Math.floor(mid / cols) gives the row index by dividing 'mid' by the number of columns
        // mid % cols gives the column index by finding the remainder when 'mid' is divided by the number of columns
        // Example:
        // Suppose matrix = [[1, 3, 5], [7, 9, 11], [13, 15, 17]]
        // and cols = 3 (number of columns in the matrix).
        // If mid = 4, then:
        // Math.floor(mid / cols) = Math.floor(4 / 3) = 1 (row index)
        // mid % cols = 4 % 3 = 1 (column index)
        // So, midValue = matrix[1][1] = 9
        let midValue = matrix[Math.floor(mid / cols)][mid % cols];

        if (midValue === target) {
            // If the middle value matches the target, return true
            return true;
        } else if (midValue < target) {
            // If the middle value is less than the target, search in the right half
            left = mid + 1;
        } else {
            // If the middle value is greater than the target, search in the left half
            right = mid - 1;
        }
    }

    // If the loop ends, the target is not in the matrix
    return false;
}

// Example usage:
console.log(searchMatrix([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 9)); // Output: true