function solve(a, b, c, d) {
    let pens = +a
    let markers = +b
    let litres = +c
    let discount = +d
    let discountPercent = discount / 100

    let sumPens = pens * 5.8
    let sumMarkers = markers * 7.2
    let sumLitres = litres * 1.2

    let total = sumPens + sumMarkers + sumLitres
    let discounted = total * (1 - discountPercent)
    console.log(discounted.toFixed(3))





}

solve('2',
    '3',
    '2.5',
    '25',
    )