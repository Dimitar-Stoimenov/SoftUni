function solve(nums) { 
    let condensed = []
    let isTrue = false

    while (nums.length > 1) {
        for (let i = 0; i < nums.length - 1; i++) {
            condensed.length = nums.length - 1
            condensed[i] = nums[i] + nums[i + 1]
            nums[i] = condensed[i]            
        }

        nums.length = condensed.length
        isTrue = true
    }

    
    console.log(nums[0])
    
}

solve()