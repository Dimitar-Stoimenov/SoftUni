function solve(input) {
    let password = input.shift()
    let breakMark = false

    for (let element of input) {
        if (breakMark) {
            break
        }

        if (element === 'TakeOdd') {
            let oddPass = ''

            for (let index = 0; index < password.length; index++) {
                if (index % 2 === 1) {
                    oddPass += password[index]
                }
            }

            password = oddPass
            console.log(password)

        } else if (element.includes('Cut')) {
            let [blank, index, length] = element.split(' ')
            index = Number(index)
            length = Number(length)

            let substring = password.substr(index, length)
            password = password.replace(substring, '')

            console.log(password)

        } else if (element.includes('Substitute')) {
            let [blank, substring, substitute] = element.split(' ')

            if (password.includes(substring)) {

                let index = password.indexOf(substring)

                while (index >= 0) {
                    password = password.replace(substring, substitute)
                    index = password.indexOf(substring)
                }

                console.log(password)

            } else {
                console.log('Nothing to replace!')
            }

        } else if (element === 'Done') {
            breakMark = true
            console.log(`Your password is: ${password}`)
        }
    }
}

solve(
    [
        'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
        'TakeOdd',
        'Cut 15 3',
        'Substitute :: -',
        'Substitute | ^',
        'Done'
    ]
)