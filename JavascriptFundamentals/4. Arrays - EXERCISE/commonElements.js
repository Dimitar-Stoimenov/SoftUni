function solve(firstArray, secondArray) {
    for (let i = 0; i < firstArray.length; i++) {
        for (let j = 0; j < secondArray.length; j++) {
            if (firstArray[i] === secondArray[j]) {
                console.log(firstArray[i])
                break
            }
        }        
    }
}