function solve(a, b , c, d, e, f) {
    let cenaPuzel = 2.6
    let cenaKukla = 3
    let cenaMeche = 4.1
    let cenaMinion = 8.2
    let cenaKamion = 2

    let cenaEkskurzia = Number(a)
    let broiPuzel = Number(b)
    let broiKukli = Number(c)
    let broiMecheta = Number(d)
    let broiMinioni = Number(e)
    let broiKamioni = Number(f)
    let totalBroi = broiPuzel + broiKukli + broiMecheta + broiMinioni + broiKamioni

    // toFixed(2)

    let prfPuzel = cenaPuzel * broiPuzel
    let prfKukli = cenaKukla * broiKukli
    let prfMecheta = cenaMeche * broiMecheta
    let prfMinioni = cenaMinion * broiMinioni
    let prfKamioni = cenaKamion * broiKamioni
    let totalPrf = prfPuzel + prfKukli + prfMecheta + prfMinioni + prfKamioni
    let prfAfterDiscount
    let prfAfterRent

    if (totalBroi >= 50) {
        prfAfterDiscount = totalPrf * 0.75
        prfAfterRent = prfAfterDiscount * 0.9
        if (prfAfterRent >= cenaEkskurzia) {
            console.log(`Yes! ${(prfAfterRent - cenaEkskurzia).toFixed(2)} lv left.`)
        } else {
            console.log(`Not enough money! ${(cenaEkskurzia - prfAfterRent).toFixed(2)} lv needed.`)
        }
    } else {
        prfAfterDiscount = totalPrf
        prfAfterRent = prfAfterDiscount * 0.9
        if (prfAfterRent >= cenaEkskurzia) {
            console.log(`Yes! ${(prfAfterRent - cenaEkskurzia).toFixed(2)} lv left.`)
        } else {
            console.log(`Not enough money! ${(cenaEkskurzia - prfAfterRent).toFixed(2)} lv needed.`)
        }
    }
    
}

solve("40.8", "20", "25", "30", "50", "10")