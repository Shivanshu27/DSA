function findNumberOfTriangles(arr, n) {
    arr.sort((a, b) => a - b);
    let count = 0;
    for (let i = n - 1; i >= 1; i--) {
        let left = 0;
        let right = i - 1;
        while (left < right) {
            if (arr[left] + arr[right] > arr[i]) {
                count += right - left;
                right--;
            } else {
                left++;
            }
        }
    }
    return count;
}

// Explanation:
// 1. Sort the array in ascending order.
// 2. Initialize a count variable to 0.
// 3. Iterate from the end of the array to the beginning (excluding the first element).
// 4. Use two pointers, left starting from the beginning and right starting just before the current element.
// 5. If the sum of the elements at the left and right pointers is greater than the current element, 
//    it means all elements between left and right pointers can form a triangle with the current element.
// 6. Increment the count by the number of such elements and move the right pointer to the left.
// 7. If the sum is not greater, move the left pointer to the right.
// 8. Return the total count of triangles.

console.log(findNumberOfTriangles([6, 4, 9, 7, 8], 5)); // 10