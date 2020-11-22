function depositCalc(a, b, c){
    let deposit = Number(a)
    let srok = Number(b)
    let lihva = Number(c)
    
    let natrupanaLihva = deposit * lihva*0.01
    let mesechnaLihva = natrupanaLihva / 12
    let sum = deposit + (srok * mesechnaLihva)

    console.log(sum)
}

depositCalc('200', '3', '5.7')