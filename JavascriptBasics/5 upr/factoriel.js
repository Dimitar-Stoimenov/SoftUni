function solve(a) {
    a = Number(a)
    let result = 1

    for (index = a; index > 1; index--) {
        result *= index
    }
    console.log(result)

}
solve('8')