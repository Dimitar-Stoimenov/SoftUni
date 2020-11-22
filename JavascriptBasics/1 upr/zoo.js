function zoo(a, b){
    let dogs = Math.trunc(a)
    let neighbourPets = Math.trunc(b)
    let cash = ((dogs*2.5)+(neighbourPets*4))

    console.log(`${cash.toFixed(2)} lv.`)
}
zoo('5', '4')