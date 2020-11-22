function solve(input) {
    let indexOfPARTY = input.indexOf('PARTY')

    let invitedList = input.slice(0, indexOfPARTY)
    let guests = input.slice(indexOfPARTY + 1)

    let vipArray = []
    let regularArray = []

    for (const element of invitedList) {
        if (element.charCodeAt(0) >= 48 && element.charCodeAt(0) <= 57) {
            vipArray.push(element)

        } else {
            regularArray.push(element)
        }
    }

    for (const element of guests) {
        if (element.charCodeAt(0) >= 48 && element.charCodeAt(0) <= 57) {
            if (vipArray.includes(element)) {
                let i = vipArray.findIndex(x => x === element)
                vipArray.splice(i, 1)
            }

        } else {
            if (regularArray.includes(element)) {
                let i = regularArray.findIndex(x => x === element)
                regularArray.splice(i, 1)
            }
        }
    }

    console.log(vipArray.length + regularArray.length)

    for (const element of vipArray) {
        console.log(element)
    }

    for (const element of regularArray) {
        console.log(element)
    }
}

solve(
    ['7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc'
    ]
)