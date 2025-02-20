function findMaxSubarray(a) {
    let n = a.length;
    let maxSum = -1;
    let maxLen = 0;
    let maxStartIndex = -1;
    
    let currentSum = 0;
    let currentStartIndex = 0;
    let currentLen = 0;
    
    for (let i = 0; i < n; i++) {
        if (a[i] >= 0) {
            currentSum += a[i];
            currentLen++;
        } else {
            if (currentSum > maxSum || 
                (currentSum === maxSum && currentLen > maxLen) || 
                (currentSum === maxSum && currentLen === maxLen && currentStartIndex < maxStartIndex)) {
                maxSum = currentSum;
                maxLen = currentLen;
                maxStartIndex = currentStartIndex;
            }
            currentSum = 0;
            currentLen = 0;
            currentStartIndex = i + 1;
        }
    }
    
    // Check the last subarray
    if (currentSum > maxSum || 
        (currentSum === maxSum && currentLen > maxLen) || 
        (currentSum === maxSum && currentLen === maxLen && currentStartIndex < maxStartIndex)) {
        maxSum = currentSum;
        maxLen = currentLen;
        maxStartIndex = currentStartIndex;
    }
    
    if (maxStartIndex === -1) {
        return "-1";
    } else {
        return a.slice(maxStartIndex, maxStartIndex + maxLen);
    }
}

// Example usage:
console.log(findMaxSubarray([1, 2, 5, -7, 2, 3])); // Output: [1, 2, 5]
console.log(findMaxSubarray([1, 2, 3]));           // Output: [1, 2, 3]
console.log(findMaxSubarray([-1, 2]));             // Output: [2]
