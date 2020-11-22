function solve(n) {
    n = Number(n)

    for (let powered = 0; powered <= n; powered += 2) {
        console.log(Math.pow(2,powered))
        
    }
}
solve('10')