function solve(array) {
    array.sort((a, b) => a - b);
    let smallArray = array.slice(0, array.length / 2);
    let bigArray = array.slice(array.length / 2).sort((a, b) => b - a);

    let resultArray = [];

    for (let i = 0; i < Math.ceil(array.length / 2); i++) {
        if (smallArray.length > i) {
            resultArray.push(smallArray[i]);
        }

        resultArray.push(bigArray[i]);
    }
    
    return resultArray;
}

solve(
    [1, 65, 3, 52, 48, 63, 31, 18, 56]
)