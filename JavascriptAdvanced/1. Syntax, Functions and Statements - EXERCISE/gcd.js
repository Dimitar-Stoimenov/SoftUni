function solve(a, b) {
    let bigger = Math.max(a, b)
    let lower = Math.min(a, b)
    let gcd = 1

    for (let i = lower; i >= 0; i--) {
        if (lower % i === 0 && bigger % i === 0) {
            gcd = i
            break
        }
    }

    console.log(gcd);
}

solve(15, 7)