
//     Product of Array Except Self:
//     Given an array of integers, return an array where each element is the product of all the elements of the original array except the one at that index.

function productExceptSelf(nums) {
    const totalProduct = nums.reduce((acc, num) => acc * num, 1);
    
    return nums.map(num => totalProduct / num);
}

const nums2 = [1, 2, 3, 4];
const result2 = productExceptSelf(nums2);
console.log(result); // Output: [24, 12, 8, 6]



// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// Follow-up: Could you solve it in 
// 𝑂
// (
// 𝑛
// )
// O(n) time without using the division operation?

function productExceptSelf(nums) {
    const n = nums.length;
    const output = new Array(n).fill(1);
    console.log(output);
    
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        output[i] *= leftProduct;
        leftProduct *= nums[i];
    }
    
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return output;
}

// Example usage:
// const nums = [1, 2, 3, 4];
// const result = productExceptSelf(nums);
// console.log(result); // Output: [24, 12, 8, 6]
// Explanation: