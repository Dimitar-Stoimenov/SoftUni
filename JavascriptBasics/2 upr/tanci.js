function tanci(a, b, c){
    let length = Number(a)
    let width = Number(b)
    let garderob = Number(c)
    let areaSkameika = (length * width) / 10
    let areaGarderob = garderob * garderob
    let areaZala = (length * width) - areaSkameika - areaGarderob

    let tanciorBodyCbm = 40 * 0.0001
    let tanciorDvijenieCbm = 7000 * 0.0001
    let tanciorTotalAreaCbm = tanciorBodyCbm + tanciorDvijenieCbm

    console.log(Math.floor(areaZala / tanciorTotalAreaCbm))
}

tanci('50', '25', '2')