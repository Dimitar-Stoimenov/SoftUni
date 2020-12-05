function solve(input) {
    let sequenceArray = input.shift().split(' ').map(Number)
    let i = 0
    let commandLine = input[i++]

    while (commandLine !== 'End') {
        let [command, index, value] = commandLine.split(' ')
        index = Number(index)
        value = Number(value)

        switch (command) {
            case 'Shoot':
                if (index < sequenceArray.length && index >= 0) {
                    sequenceArray[index] -= value

                    if (sequenceArray[index] <= 0) {
                        sequenceArray.splice(index, 1)
                    }
                }            

                break;
            case 'Add':
                if (index < sequenceArray.length && index >= 0) {
                    sequenceArray.splice(index, 0, value)
                } else {
                    console.log(`Invalid placement!`)                    
                }

                break;
            case 'Strike':
                if ((index + value) < sequenceArray.length && (index-value) >= 0) {
                    sequenceArray.splice(index - value, value * 2 + 1)
                } else {
                    console.log(`Strike missed!`)                    
                }

                break;
        }
        commandLine = input[i++]
    }

    console.log(sequenceArray.join('|'))    
}

solve(
    [
        '52 74 23 44 96 110',
        'Shoot 5 10',
        'Shoot 1 80',
        'Strike 2 1',
        'Add 22 3',
        'End'
    ]
)