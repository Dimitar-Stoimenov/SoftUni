function printStars(count) {
    let char = '*'

    let stars = char.repeat(count)

    console.log(stars)
}

function solve(num) {
    let count = Math.sqrt(num)    

    printStars(count)
}

solve(64)