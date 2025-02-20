// Given an array nums[], construct a Product Array P (of same size n) such that P[i] is equal to the product of all the elements of nums except nums[i].

function productExceptSelf(nums) {
    // code here
    let n = nums.length;
    let left = new Array(n);
    console.log(left);
    let right = new Array(n);
    let result = new Array(n);
    left[0] = 1;
    right[n - 1] = 1;
    //product of all elements to the left of i
    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }
    console.log(left);
    // product of all elements to the right of i
    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }
    console.log(right);
    // product of all elements except self
    for (let i = 0; i < n; i++) {
        result[i] = left[i] * right[i];
    }
    console.log(result);
    return result;
}


console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]