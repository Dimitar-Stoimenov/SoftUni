function solve(type, first, second, third) {
    let a = Number(first)
    let b = Number(second)
    let c = Number(third)
    let area;
    if (type === 'square') {
        area = a * a
    } else if (type === 'rectangle') {
        area = a * b
    } else if (type === 'circle') {
        area = (Math.pow(a, 2) * Math.PI)
    } else if (type === 'triangle') {
        area = ((a * b) / 2)
    }
    console.log(area.toFixed(3))
}

solve('circle', '6', '5')