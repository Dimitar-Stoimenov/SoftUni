function radiansToDegrees(input){
    let radian = Number(input)
    let pi = Math.PI
    let degrees = radian * 180 / pi
    console.log(degrees.toFixed(0))
}

radiansToDegrees('3.1416')