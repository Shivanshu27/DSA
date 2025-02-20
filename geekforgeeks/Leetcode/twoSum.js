function sum(nums, target){
    let output=[];
    for (let i=0; i<nums.length-1;i++){
        for (j=i+1; j<nums.length;j++){
            console.log(nums[i]+nums[j])
            if (target=== nums[i]+nums[j]){
            return [i,j]
            }
        }
    }
}