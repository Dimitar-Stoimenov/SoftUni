function solve(input) {
    let activationKey = input.shift()

    for (const line of input) {
        if (line === "Generate") {
            console.log(`Your activation key is: ${activationKey}`)
            break
        } else {
            let [command, firstArg, secondArg, thirdArg] = line.split('>>>')

            switch (command) {
                case 'Contains':
                    if (activationKey.includes(firstArg)) {
                        console.log(`${activationKey} contains ${firstArg}`);
                    } else {
                        console.log(`Substring not found!`);
                    }

                    break;
                case 'Flip':
                    let startIndex = Number(secondArg)
                    let endIndex = Number(thirdArg)

                    if (firstArg === 'Upper') {
                        let string = activationKey.substring(startIndex, endIndex)
                        activationKey = activationKey.replace(string, string.toUpperCase())
                    } else {
                        let string = activationKey.substring(startIndex, endIndex)
                        activationKey = activationKey.replace(string, string.toLowerCase())
                    }

                    console.log(activationKey)

                    break;
                case 'Slice':
                    let indexStart = Number(firstArg)
                    let indexEnd = Number(secondArg)

                    activationKey = activationKey.substring(0, indexStart ) + '' + activationKey.substring(indexEnd)
                    console.log(activationKey)
                    break;
            }
        }
    }
}

solve(
    [
        'abcdefghijklmnopqrstuvwxyz',
        'Slice>>>2>>>6',
        'Flip>>>Upper>>>3>>>14',
        'Flip>>>Lower>>>5>>>7',
        'Contains>>>def',
        'Contains>>>deF',
        'Generate'
      ]
      
)