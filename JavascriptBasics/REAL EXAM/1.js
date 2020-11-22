function solve(a, b, c, d, e) {
    let pages = 899
    let covers = 2

    let pricePerPage = Number(a)
    let pricePerCover = Number(b)
    let discount = Number(c / 100)
    let designerFee = Number(d)
    let percentPaidByTeam = Number(e / 100)

    let sum = pages * pricePerPage + covers * pricePerCover
    let discountedSum = sum * (1 - discount)
    let sumWithDesignerFee = discountedSum + designerFee
    let result = sumWithDesignerFee * (1 - percentPaidByTeam)
    
    console.log(`Avtonom should pay ${result.toFixed(2)} BGN.`)
}

solve(
    0.01,
    1,
    10,
    20,
    20
)