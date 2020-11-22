function solve(numbers, commands) {
    let endCheck = false

    for (let i = 0; i < commands.length; i++) {
        if (endCheck) {
            break
        }

        let commandArray = commands[i].split(' ')
        let operator = commandArray.shift()

        switch (operator) {
            case 'add':
                let addIndex = Number(commandArray.shift())
                let element = Number(commandArray.shift())
                numbers.splice(addIndex, 0, element)
                break;
            case 'addMany':
                let addManyIndex = Number(commandArray.shift())
                for (const element of commandArray) {
                    numbers.splice(addManyIndex++, 0, Number(element))
                }
                break;
            case 'contains':
                let searchedElement = Number(commandArray.shift())

                if (!numbers.includes(searchedElement)) {
                    console.log(-1)
                } else {
                    let idx = numbers.indexOf(searchedElement)
                    console.log(idx)

                    // for (const idx in numbers) {
                    //     if (numbers[idx] === searchedElement) {
                    //         console.log(idx)                            
                    //     }
                    // }
                }
                break;
            case 'remove':
                let removeIndex = Number(commandArray.shift())
                numbers.splice(removeIndex, 1)
                break;
            case 'shift':
                let shiftIndex = Number(commandArray.shift())

                for (let j = 0; j < shiftIndex; j++) {
                    let shifter = numbers.shift()
                    numbers.push(shifter)
                }

                break;
            case 'sumPairs':
                let summedArray = []

                for (let k = 0; k < numbers.length - 1; k += 2) {

                    summedArray.push(numbers[k] + numbers[k + 1])
                }

                if (numbers.length % 2 === 1) {
                    summedArray.push(numbers[numbers.length - 1])
                }

                numbers = summedArray
                break;
            case 'print':
                endCheck = true
                let resultArray = numbers.join(', ')
                console.log(`[ ${resultArray} ]`)
                break;           
        }
    }
}

solve(
    [1, 2, 3, 4, 5, 6, 7, 88],
    ['remove 2', 'print', 'remove 3', 'remove 3']
)