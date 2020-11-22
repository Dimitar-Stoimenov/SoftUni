function imena(input) {
    let firstName = input.shift()
    let secondName = input.shift()
    let age = Number(input.shift())
   
    console.log(`${firstName} ${secondName} @ ${age}`)
}

imena( [ 'Dimitar', 'Stoimenov', '27' ] )