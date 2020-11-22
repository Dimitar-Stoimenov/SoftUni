function solve(input) {

    let counter = 0

    for (let index = 0; index < input.length - 1; index++) {
        let arrayOne = input[index]
        let arrayTwo = input[index + 1]

        for (let j = 0; j < arrayOne.length; j++) {
            if (arrayOne[j] === arrayTwo[j]) {
                counter++
            }
        }
    }

    for (let index = 0; index < input.length; index++) {
        let arrayOne = input[index]

        for (let j = 0; j < arrayOne.length - 1; j++) {
            if (arrayOne[j] === arrayOne[j + 1]) {
                counter++
            }
        }
    }

    console.log(counter)
}

solve(
    [
        ['2', '2', '5', '7', '4'],
        ['4', '0', '5', '3', '4'],
        ['2', '5', '5', '4', '2']
    ]
)