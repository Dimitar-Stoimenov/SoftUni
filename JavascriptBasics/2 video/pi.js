function solve(input){
    let r = Number(input.shift())
    let area = r * r * Math.PI
    let perimeter = 2 * r * Math.PI

    console.log(area.toFixed(2))
    console.log(perimeter.toFixed(2))
}

solve([ '4.51314' ])