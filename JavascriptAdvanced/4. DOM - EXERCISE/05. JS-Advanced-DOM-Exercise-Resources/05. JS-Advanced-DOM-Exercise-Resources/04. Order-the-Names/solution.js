function solve() {
    let inputName = document.getElementsByTagName('input')[0]
    let btn = document.getElementsByTagName('button')[0]
    let database = {}
    counter = 0

    for (let ascii = 65; ascii < 91; ascii++) {
        let symbol = String.fromCharCode(ascii)
        database[symbol] = counter++
    }

    btn.addEventListener('click', () => {
        let ol = document.getElementsByTagName('ol')[0].children
        let firstChar = inputName.value[0].toUpperCase()
        let name = ''

        for (let i = 0; i < inputName.value.length; i++) {
            if (i === 0) {
                name = inputName.value[0].toUpperCase()
            } else if (inputName.value[i] === ' ') {
                name += inputName.value[i++].toLowerCase()
                name += inputName.value[i].toUpperCase()
            } else {
                name += inputName.value[i].toLowerCase()
            }
        }

        if (ol[database[firstChar]].innerHTML.length === 0) {
            ol[database[firstChar]].innerHTML = name
        } else {
            ol[database[firstChar]].innerHTML += ', ' + name
        }

        inputName.value = ''
    })
}