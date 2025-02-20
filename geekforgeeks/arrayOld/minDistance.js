function minDist(arr, n, x, y) {
    let minDistance = Infinity;
    let lastXIndex = -1;
    let lastYIndex = -1;

    for (let i = 0; i < n; i++) {
        if (arr[i] === x) {
            lastXIndex = i;
            if (lastYIndex !== -1) {
                minDistance = Math.min(minDistance, Math.abs(lastXIndex - lastYIndex));
            }
        }
        if (arr[i] === y) {
            lastYIndex = i;
            if (lastXIndex !== -1) {
                minDistance = Math.min(minDistance, Math.abs(lastYIndex - lastXIndex));
            }
        }
    }

    if (lastXIndex === -1 || lastYIndex === -1) {
        return -1;
    }

    return minDistance;
}

// Test cases
console.log(minDist([1, 2, 3, 2], 4, 1, 2)); // Output: 1
console.log(minDist([86, 39, 90, 67, 84, 66, 62], 7, 42, 12)); // Output: -1
console.log(minDist([1, 2, 3, 2, 4, 2], 6, 2, 4)); // Output: 1
console.log(minDist([1, 2, 3, 4, 5], 5, 3, 5)); // Output: 2
