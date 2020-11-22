function kampaniq(a, b, c, d, e){
    let broiDni = Number(a)
    let broiSladkari = Number(b)
    let broiTorti = Number(c)
    let broiGofreti = Number(d)
    let broiPalachinki = Number(e)

    let cenaTorta = 45
    let cenaGofreta = 5.8
    let cenaPalachinka = 3.2

    let sumaTortiTotal = broiDni * broiSladkari * broiTorti * cenaTorta
    let sumaGofretiTotal = broiDni * broiSladkari * broiGofreti * cenaGofreta
    let sumaPalachinkiTotal = broiDni * broiSladkari * broiPalachinki * cenaPalachinka

    let final = ((sumaTortiTotal + sumaGofretiTotal + sumaPalachinkiTotal) * (7 / 8))
    console.log(final.toFixed(2))
}

kampaniq('20', '8', '14', '30', '16')