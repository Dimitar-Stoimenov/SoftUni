function solve(input) {
    let message = input.shift()

    for (let line of input) {
        if (line === 'Reveal') {
            console.log(`You have a new text message: ${message}`)
            break
        }

        let [command, firstOperation, secondOperation] = line.split(':|:')
        switch (command) {
            case 'InsertSpace':
                let index = Number(firstOperation)
                let msgFirstPart = message.substring(0, index)
                let msgSecondPart = message.substring(index)

                message = msgFirstPart + ' ' + msgSecondPart
                break;
            case 'Reverse':
                if (message.includes(firstOperation)) {
                    let cuttedMsg = message.substring(message.indexOf(firstOperation), message.indexOf(firstOperation) + firstOperation.length)

                    message = message.replace(cuttedMsg, "")

                    let reversedMsg = reverse(cuttedMsg)    

                    message = message.concat(reversedMsg)
                } else {
                    console.log('error')
                    continue
                }
                break;
            case 'ChangeAll':
                let substring = firstOperation
                let replacement = secondOperation

                while (message.includes(substring)) {
                    message = message.replace(substring, replacement)
                }
                break;
        }

        console.log(message)
    }

    function reverse(s) {
        return s.split("").reverse().join("");
    }
}

solve(
    [
        'Hiware?uiy',
        'ChangeAll:|:i:|:o',
        'Reverse:|:?uoy',
        'Reverse:|:jd',
        'InsertSpace:|:3',
        'InsertSpace:|:7',
        'Reveal'
    ]
)