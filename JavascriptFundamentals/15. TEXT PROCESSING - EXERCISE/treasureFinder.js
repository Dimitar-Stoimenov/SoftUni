function solve(input) {
    let key = input.shift().split(' ').map(Number)

    for (const line of input) {
        let resultString = ''

        if (line === 'find') {
            break
        } else {
            let keyIndex = 0

            for (const char of line) {
                keyIndex %= key.length

                let charCode = char.charCodeAt(0)
                let resultCode = charCode - key[keyIndex++]

                resultString += String.fromCharCode(resultCode)
            }
        }

        let [blank, type, coordsStr] = resultString.split('&')
        let [blank2, coords] = coordsStr.split('<')

        coords = coords.replace('>', '')

        console.log(`Found ${type} at ${coords}`)
    }
}

solve(
    [
        '1 2 1 3',
        "ikegfp'jpne)bv=41P83X@",
        "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
        'find'
    ]
)