function solve(input) {
    let key = Number(input.shift())
    let goodChildren = []

    for (let line of input) {

        if (line === 'end') {
            //start printing
            break
        }

        let decriptedMSG = ''

        for (let char of line) {
            char = String.fromCharCode(char.charCodeAt(0) - key)
            decriptedMSG += char
        }

        let comboPattern = /@[A-Za-z]+[^@\-!:>]+![GN]!/g
        let namePattern = /@[A-Za-z]+/g
        let behaviourPattern = /![GN]!/g

        if (comboPattern.test(decriptedMSG)) {
            let name = decriptedMSG.match(namePattern)[0].substring(1)
            let behaviour = decriptedMSG.match(behaviourPattern)[0].replace('!', '').replace('!', '')

            if (behaviour === 'G') {
                goodChildren.push(name)
            }
        }
    }

    for (const name of goodChildren) {
        console.log(name)
    }
}

solve(
    [
        '3',
        "N}eideidmk$'(mnyenmCNlpamnin$J$",
        'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
        'ppqmkkkmnolmnnCEhq/vkievk$Q$',
        'yyegiivoguCYdohqwlqh/kguimhk$J$',
        'end'
    ]
)