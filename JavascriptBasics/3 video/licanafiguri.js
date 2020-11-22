function solve(type, first, second, third) {
    let a = Number(first)
    let b = Number(second)
    let c = Number(third)

    if (type === 'square') {
        let squareArea = a * a
        console.log(squareArea.toFixed(3))
    } else if (type === 'rectangle') {
        let rectangleArea = a * b
        console.log(rectangleArea.toFixed(3))
    } else if (type === 'circle') {
        let circleArea = (Math.pow(a, 2) * Math.PI)
        console.log(circleArea.toFixed(3))
    } else if (type === 'triangle') {
        let triangleArea = ((a * b) / 2)
        console.log(triangleArea.toFixed(3))
    }
}

solve('circle', '6', '5')