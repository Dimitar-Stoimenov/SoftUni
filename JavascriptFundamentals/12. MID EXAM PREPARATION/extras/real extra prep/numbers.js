function solve(input) {
    input = input.split(' ').map(Number).sort((a, b) => b - a);

    let sum = input.reduce((acc, x) => acc + x);
    let average = sum / input.length;

    let result = [];

    for (let i = 0; i < 5; i++) {
        if (input[i] > average) {
            result.push(input[i])
        }
    }

    if (input[0] <= average) {
        console.log('No')
    } else {
        console.log(result.join(' '))
    }
}

solve(
    '1'
)