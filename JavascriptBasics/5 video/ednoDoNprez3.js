function solve(n) {
    n = Number(n)

                           // може и number = number + 3
    for (let number = 1; number <= n; number += 3) {
        console.log(number)
    }
}

solve('17')