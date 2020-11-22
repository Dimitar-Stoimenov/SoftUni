function solve(input) {
    let target = Number(input[0])
    let index = 1
    let totalSum = 0

    while (target > totalSum) {
        totalSum += Number(input[index++])
    }

    console.log(totalSum)
}

solve(["20",
"1",
"2",
"3",
"4",
"5",
"6"])