function solution(number) {
    let truePercentage = removeResidue(number)    
    let percentComplete = `${truePercentage}%`
    let loadingBarsFilled = countFilledLoadingBars(truePercentage)
    let loadingBarOutput = visualizeLoadingBar(loadingBarsFilled)

    if (truePercentage !== 100) {
        console.log(`${percentComplete} ${loadingBarOutput}`)
        console.log(`Still loading...`)    
    } else {
        console.log(`100% Complete!`)
        console.log(loadingBarOutput)
    }

    function removeResidue(number) {
        let residue = number % 10
        number = number - residue
        return number
    }

    function countFilledLoadingBars(number) {
        return (number/10)
    }

    function visualizeLoadingBar(number) {
        let loadingBarChar = '%'
        let unfilledBar = '.'
        let output = ''

        for (let i = 1; i <= 10; i++) {
            if (i <= number) {
                output += loadingBarChar
            } else {
                output += unfilledBar
            }            
        }

        let newOutput = `[${output}]`
        return newOutput
    }
}

solution(22)