function solve(matrix, forces) {
    let mapOfSofia = matrix.map(x => x.split(' ').map(Number))

    for (const index in forces) {
        let [command, number] = forces[index].split(' ')
        number = Number(number)

        switch (command) {
            case 'smog':
                mapOfSofia = smog(number, mapOfSofia)
                break;
            case 'gale':
                mapOfSofia = gale(number, mapOfSofia)
                break;
            case 'breeze':
                mapOfSofia = breeze(number, mapOfSofia)
                break;
        }
    }

    let pollutedAreaArray = []
    let output = 'Polluted areas: '

    for (let row = 0; row < mapOfSofia.length; row++) {
        for (let col = 0; col < mapOfSofia.length; col++) {
            if (mapOfSofia[row][col] >= 50) {
                pollutedAreaArray.push(`${row}-${col}`)
            }
        }
    }

    if (pollutedAreaArray.length < 1) {
        output = `No polluted areas`
    } else {
        for (const index in pollutedAreaArray) {
            if (index == (pollutedAreaArray.length - 1)) {
                output += `[${pollutedAreaArray[index]}]`
            } else {
                output += `[${pollutedAreaArray[index]}], `
            }
        }
    }

    console.log(output)

    function smog(number, array) {
        for (let row = 0; row < array.length; row++) {
            for (let col = 0; col < array.length; col++) {
                array[row][col] += number
            }
        }

        return array
    }

    function gale(number, array) {
        for (let row = 0; row < array.length; row++) {
            array[row][number] -= 20

            if (array[row][number] < 0) {
                array[row][number] = 0
            }
        }

        return array
    }

    function breeze(number, array) {
        array[number] = array[number].map(x => x - 15)

        for (let i = 0; i < array[number].length; i++) {
            if (array[number][i] < 0) {
                array[number][i] = 0
            }
        }

        return array
    }
}

solve(["5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24"],
    ["breeze 1", "gale 2", "smog 25"]
)