function find3Numbers(A, n) {
    if (n < 3) return [];

    let leftMin = Array(n).fill(0);
    let rightMax = Array(n).fill(0);

    leftMin[0] = Number.MAX_VALUE;
    for (let i = 1; i < n; i++) {
        leftMin[i] = Math.min(leftMin[i - 1], A[i - 1]);
        console.log(leftMin[i]);
    }

    rightMax[n - 1] = Number.MIN_VALUE;
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], A[i + 1]);
        console.log(rightMax[i]);
    }

    for (let j = 1; j < n - 1; j++) {
        if (leftMin[j] < A[j] && A[j] < rightMax[j]) {
            return [leftMin[j], A[j], rightMax[j]];
        }
    }

    return [];
}

// Example usage:
console.log(find3Numbers([1, 2, 1, 1, 3], 5)); // Output: [1, 2, 3]
// console.log(find3Numbers([1, 1, 3], 3));       // Output: []
