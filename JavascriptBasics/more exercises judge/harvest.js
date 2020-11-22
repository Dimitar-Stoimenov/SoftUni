function solve(a, b, c, d) {
    let areaSqrMeters = +a
    let grapePerSqrMeter = +b
    let wantedLitersWine = +c
    let workers = +d

    let totalKgsWine = areaSqrMeters * 0.4 * grapePerSqrMeter
    let actualLiterswine = totalKgsWine / 2.5

    let litersLeft = Math.ceil(actualLiterswine - wantedLitersWine)

    if (actualLiterswine < wantedLitersWine) {
        console.log(`It will be a tough winter! More ${Math.floor(wantedLitersWine - actualLiterswine)} liters wine needed.`)
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(actualLiterswine)} liters.`)
        console.log(`${litersLeft} liters left -> ${Math.ceil(litersLeft / workers)} liters per person.`)
    }
}

solve('650',
    '2',
    '175',
    '3')