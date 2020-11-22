function solve(input) {
    input = input[0].split(',')

    for (const line of input) {
        let ticket = line.trim()

        if (ticket.length !== 20) {
            console.log(`invalid ticket`)
            continue
        }

        let leftHalf = ticket.substring(0, ticket.length / 2)
        let rightHalf = ticket.substring(ticket.length / 2)

        let pattern = /[$]{6,}|[#]{6,}|[\^]{6,}|[@]{6,}/

        let left = ''
        let right = ''

        if (pattern.test(leftHalf) && pattern.test(rightHalf)) {
            left = leftHalf.match(pattern)[0]
            right = rightHalf.match(pattern)[0]
            let symbol = left.substring(0, 1)

            if (left.length === 10 && right.length === 10) {
                console.log(`ticket "${ticket}" - ${left.length}${symbol} Jackpot!`)
            } else {
                let length = Math.min(left.length, right.length)
                console.log(`ticket "${ticket}" - ${length}${symbol}`)
            }

        } else {
            console.log(`ticket "${ticket}" - no match`)
            continue
        }
    }
}

solve(
    ['$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey']
)