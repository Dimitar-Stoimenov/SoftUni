function solve(input) {
    let string = input[0].toUpperCase()

    let pattern = /[\D]{1,20}[\d]{1,2}/g
    let stringCombos = string.match(pattern)

    let output = ''

    for (let line of stringCombos) {
        let stringPattern = /[\D]+/g
        let repeatCountPattern = /[\d]+/g

        let stringPart = line.match(stringPattern)[0]
        let repeatCount = Number(line.match(repeatCountPattern)[0])

        output += stringPart.repeat(repeatCount)
    }

    console.log(`Unique symbols used: ${[...new Set(output)].length}`)
    console.log(output)
}

solve(
    [
        'eg242yh24rg2wreg34ypog-=3r03i4-59yu309rg03 904ut8 390r9u gu3r8gu304h g 0894'
    ]
)