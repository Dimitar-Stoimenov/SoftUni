function solve(input) {
    let biggestNum = Number.MIN_SAFE_INTEGER
    let consecutiveArr = []
 
    for (let num of input) {
	num = Number(num)
        if (num >= biggestNum) {
            consecutiveArr.push(num)
            biggestNum = num
        }       
    }
    
    return consecutiveArr
}