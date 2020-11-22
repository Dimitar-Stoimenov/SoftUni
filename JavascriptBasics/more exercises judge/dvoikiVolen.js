function solve(input) {
    const numberOfPairs = +input[0];

    if ((numberOfPairs * 2) !== (input.length - 1)) {
        console.log("Invalid input");
        return;
    }

    let equalPairs = true;
    let maxDiff; // undefined

    for (let i = 1; i < input.length; i += 2) {
        const a = +(input[i]); //Number(input[i])
        const b = +(input[i + 1]); //Number(input[i + 1])

        const currentDifference = a + b;

        if (!maxDiff) {
            maxDiff = currentDifference;
            continue;
        } else if (maxDiff < currentDifference) {
            maxDiff = currentDifference;
            equalPairs = false;
        }
    }

    // if (!equalPairs) {
    //     console.log(`No, maxdiff=${maxDiff}`)
    // } else {
    //     console.log(`Yes, value=${maxDiff}`)
    // }
    
}

solve(['3', '1', '2', '0', '3', '4', '-1'])