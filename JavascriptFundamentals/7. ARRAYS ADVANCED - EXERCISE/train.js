function solve(commands) {
    let train = commands
        .shift()
        .split(' ')
        .map(Number)

    let maxCapacityOfAWagon = Number(commands.shift())

    for (let i = 0; i < commands.length; i++) {
        let [firstCommand, secondCommand] = commands[i].split(' ')

        switch (firstCommand) {
            case 'Add':
                train.push(Number(secondCommand))
                break;
            default:
                firstCommand = Number(firstCommand)

                for (let j = 0; j < train.length; j++) {
                    if ((train[j] + firstCommand) <= maxCapacityOfAWagon) {
                        train[j] += firstCommand
                        break
                    }
                }

                break;
        }
    }

    console.log(train.join(' '));    
}

solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)