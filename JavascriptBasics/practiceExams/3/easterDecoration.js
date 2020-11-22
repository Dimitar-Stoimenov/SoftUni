function solve(input) {
    let index = 0
    let clients = +input[index++]
    let totalSum = 0

    for (let i = 1; i <= clients; i++) {
        let inputLine = input[index++]
        let productsBought = 0
        let clientSum = 0

        while (inputLine !== 'Finish') {

            switch (inputLine) {
                case 'basket':
                    clientSum += 1.5
                    break;
                case 'wreath':
                    clientSum += 3.8
                    break;
                case 'chocolate bunny':
                    clientSum += 7
                    break;
            }

            inputLine = input[index++]
            productsBought++
        }

        if (productsBought % 2 === 0) {
            clientSum = clientSum * 0.8
        }

        console.log(`You purchased ${productsBought} items for ${clientSum.toFixed(2)} leva.`)
        totalSum += clientSum
    }

    console.log(`Average bill per client is: ${(totalSum / clients).toFixed(2)} leva.`)
}

solve(['2',
    'basket',
    'wreath',
    'chocolate bunny',
    'Finish',
    'wreath',
    'chocolate bunny',
    'Finish',])