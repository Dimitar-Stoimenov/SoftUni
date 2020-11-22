function solve(input) {
    let arr = input.split(' ')

    for (let element of arr) {
        let invalidMark = false

        if (element.startsWith('#') && element.length > 1) {

            for (let index = 1; index < element.length; index++) {
                let char = element[index]

                if (char.charCodeAt(0) < 65 || char.charCodeAt(0) > 122) {
                    invalidMark = true
                    break
                } else if (char.charCodeAt(0) > 90 && char.charCodeAt(0) < 97) {
                    invalidMark = true
                    break
                }
            }

            if (!invalidMark) {
                console.log(element.replace('#', ''))
            }
        }
    }
}

solve(
    'Nowadays everyone uses ## to tag a #special #word in #socialMedia'
)