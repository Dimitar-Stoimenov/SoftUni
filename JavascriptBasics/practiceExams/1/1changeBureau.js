function solve(a, b, c) {
    let bitcoins = +a
    let chineseyuans = +b
    let comission = +c
    let comissionPercent = comission / 100

    let leva = bitcoins * 1168
    let dollars = chineseyuans * 0.15
    let DLRtoLEV = 0.75/1.32
    leva = leva + (dollars * 1.76)
    let euros = leva / 1.95

    let result = euros * (1 -comissionPercent)
    console.log(result.toFixed(2))
}
solve('1',
    '5',
    '5')