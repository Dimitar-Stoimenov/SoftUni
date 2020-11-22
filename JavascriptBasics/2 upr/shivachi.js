function ceh(a, b, c){
    let broiMasi = Number(a)
    let length = Number(b)
    let width = Number(c)

    let areaPokrivka = broiMasi * (length + (2 * 0.3)) * (width + (2 * 0.3))
    let areaKare = broiMasi * (length / 2) * (length / 2)

    let cenaPokrivkaNaMetar = 7
    let cenaKareNaMetar = 9

    let cenaTotalUSD = areaPokrivka * cenaPokrivkaNaMetar + areaKare * cenaKareNaMetar
    let cenaTotalBGN = cenaTotalUSD * 1.85

    console.log(`${cenaTotalUSD.toFixed(2)} USD`)
    console.log(`${cenaTotalBGN.toFixed(2)} BGN`)
}

ceh('10', '1.2', '0.65')