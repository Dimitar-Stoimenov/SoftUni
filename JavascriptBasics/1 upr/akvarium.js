function akvarium(input){
    let a = Number(input.shift())
    let b = Number(input.shift())
    let c = Number(input.shift())
    let d = Number(input.shift())

    let obem = a * b * c
    let litri = obem * 0.001
    let procent = d * 0.01
    let realLitri = litri * (1-procent)

    console.log(realLitri.toFixed(3))
}

akvarium([ '105', '77', '89', '18.5' ])