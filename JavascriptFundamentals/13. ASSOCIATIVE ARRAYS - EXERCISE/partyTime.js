function solve(input) {
    let indexOfPARTY = input.indexOf('PARTY')

    let invitedList = input.slice(0, indexOfPARTY)
    let guests = input.slice(indexOfPARTY + 1)

    let vipObj = []
    let regularObj = []

    for (const element of invitedList) {
        if (element.charCodeAt(0) >= 48 && element.charCodeAt(0) <= 57) {
            vipObj.push(element)

        } else {

            regularObj.push(element)
        }
    }

    for (const element of guests) {
        if (element.charCodeAt(0) >= 48 && element.charCodeAt(0) <= 57) {
            if (vipObj.includes(element)) {
                let i = vipObj.findIndex(x => x === element)
                vipObj.splice(i, 1)
            }

        } else {
            if (regularObj.includes(element)) {
                let i = regularObj.findIndex(x => x === element)
                regularObj.splice(i, 1)
            }
        }
    }

    console.log(vipObj.length + regularObj.length)

    for (const element of vipObj) {
        console.log(element)
    }

    for (const element of regularObj) {
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