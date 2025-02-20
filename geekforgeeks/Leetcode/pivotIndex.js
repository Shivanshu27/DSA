function pivotIndex(nums) {
    let totalSum = 0;
    let leftSum = 0;
  
    // Calculate the total sum of the array
    for (let i = 0; i < nums.length; i++) {
      totalSum += nums[i];
    }
  
    // Iterate through each element and check if the left and right sums are equal
    for (let i = 0; i < nums.length; i++) {
      // Check if the left and right sums are equal
      if (leftSum === totalSum - leftSum - nums[i]) {
        return i;
      }
      leftSum += nums[i];
    }
  
    // If no such index exists, return -1
    return -1;
  }
  
