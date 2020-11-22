function imena(input) {
    let firstName = input.shift()
    let secondName = input.shift()
    let age = Number(input.shift())
    let str = (firstName + ' ' + secondName + ' @ ' + age)

    console.log(str)
}

imena( [ 'Dimitar', 'Stoimenov', '27' ] )