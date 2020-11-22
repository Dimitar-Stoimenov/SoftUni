function solve(numbers) {
    let result = numbers
        .filter((x, i) => i % 2 !== 0)
        .reverse()
        .map(x => x * 2)
        .join(' ')

    console.log(result);
}

solve([3, 0, 10, 4, 7, 3])