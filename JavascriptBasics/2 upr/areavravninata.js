function ravnina(a, b, c, d){
    let x1 = Number(a)
    let y1 = Number(b)
    let x2 = Number(c)
    let y2 = Number(d)

    let length = Math.abs(x1 - x2)
    let width = Math.abs(y1 - y2)

    let area = length * width
    let perimeter = length * 2 + width * 2

    console.log(area.toFixed(2))
    console.log(perimeter.toFixed(2))
}

ravnina('30', '40', '70', '-10.25')