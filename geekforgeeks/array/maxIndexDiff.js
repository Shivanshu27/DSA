function maxIndexDiff(arr) {
    // code here
    let maxDiff = -1;
    let n = arr.length;
    let LMin = new Array(n);
    let RMax = new Array(n);
    LMin[0] = arr[0];
    for (let i = 1; i < n; i++) {
        LMin[i] = Math.min(arr[i], LMin[i - 1]);
    }
    console.log(LMin);
    RMax[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        RMax[i] = Math.max(arr[i], RMax[i + 1]);
    }
    console.log(RMax);
    let i = 0, j = 0;
    while (j < n && i < n) {
        if (LMin[i] <= RMax[j]) {
            console.log(i, j);
            maxDiff = Math.max(maxDiff, j - i);
            j++;
        } else {
            i++;
        }
    }
    return maxDiff;
}


console.log(maxIndexDiff([34, 8, 10, 3, 2, 80, 30, 33, 1])); // 6