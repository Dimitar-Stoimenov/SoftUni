function pyramid(base, increment) {
    let stoneRequired = 0
    let marbleRequired = 0
    let goldRequired = 0
    let lapisLazuliRequired = 0
    let height = 0
    let step = 0

    for (let a = base; a > 0; a -= 2) {
        step++

        if (a === 1 || a === 2) {
            let goldArea = a * a
            goldRequired = goldArea * increment
        } else if (step % 5 === 0) {
            let stoneArea = (a - 2) * (a - 2)
            let lapisLazuliArea = (a * 4) - 4
            stoneRequired += stoneArea * increment
            lapisLazuliRequired += lapisLazuliArea * increment
        } else {
            let stoneArea = (a - 2) * (a - 2)
            let marbleArea = (a * 4) - 4
            stoneRequired += stoneArea * increment
            marbleRequired += marbleArea * increment
        }
    }

    height = step * increment

    console.log(`Stone required: ${Math.ceil(stoneRequired)}`)
    console.log(`Marble required: ${Math.ceil(marbleRequired)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliRequired)}`)
    console.log(`Gold required: ${Math.ceil(goldRequired)}`)
    console.log(`Final pyramid height: ${(Math.floor(height))}`)
}

pyramid(11, 1)