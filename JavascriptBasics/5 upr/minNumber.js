function solve(input) {
    let count = input[0]
    let min = Number.MAX_SAFE_INTEGER

    for (let i = 1; i < input.length; i++) {
        if (Number((input[i])) < min) {
            min = input[i]
        }
    }
    console.log(min)
}
solve(["2",
    "100",
    "99"])