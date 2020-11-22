function oddOrEven(chislo) {
    chislo = Number(chislo)
    let secondNum = 25

    let solve = (chislo % 2)
    if (solve === 0) {
        console.log('even')
    } else {
        console.log('odd')
    }
}

oddOrEven('741')