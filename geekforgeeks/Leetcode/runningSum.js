const nums = [1, 2, 3, 4];
function runningSum(nums){
    let runningSum= 0
    let runningSumArray= []
    

    for (let i=0; i<nums.length;i++){
        runningSum+=nums[i];
        runningSumArray.push(runningSum)
        
    }
    console.log(runningSum)
    
return runningSumArray;
}

console.log(runningSum(nums))