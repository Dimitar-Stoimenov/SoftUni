function solve(input) {
    let sorted = input.sort((a, b) => {
        if (a.length === b.length) {
            return a.toLowerCase().localeCompare(b.toLowerCase())
        } else {
            return a.length - b.length
        }
    })

    console.log(sorted.join('\n'));
}

solve(
    ['alpha', 'beta', 'gamma']
)