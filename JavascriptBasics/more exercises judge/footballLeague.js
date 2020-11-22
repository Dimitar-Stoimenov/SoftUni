function solve(input) {
    let capacity = input[0]
    let fansCount = input[1]
    // let team1count = 0
    // let team2count = 0
    let sectorA = 0
    let sectorB = 0
    let sectorV = 0
    let sectorG = 0

    for (let i = 2; i < input.length; i++) {
        let sector = input[i]
        switch (sector) {
            case 'A':
                // team1count++
                sectorA++
                break
            case 'B':
                // team1count++
                sectorB++
                break
            case 'V':
                // team2count++
                sectorV++
                break
            case 'G':
                // team2count++
                sectorG++
                break
        }
    }

    console.log(`${((sectorA/fansCount) * 100).toFixed(2)}%`)
    console.log(`${((sectorB/fansCount) * 100).toFixed(2)}%`)
    console.log(`${((sectorV/fansCount) * 100).toFixed(2)}%`)
    console.log(`${((sectorG/fansCount) * 100).toFixed(2)}%`)
    console.log(`${((fansCount/capacity) * 100).toFixed(2)}%`)
}

solve(['76',
    '10',
    'A',
    'V',
    'V',
    'V',
    'G',
    'B',
    'A',
    'V',
    'B',
    'B'])