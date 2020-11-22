function solve(input) {
    let words = input.split(' ')

    let iterator = {
        next: function() {
            return {
                value: words.shift(),
                done: words.length === 0
            }
        }
    }

    let nextElement = iterator.next()

    while(!nextElement.done) {
        console.log(nextElement.value)

        nextElement = iterator.next()
    }
}

solve(
    'Et cillum do voluptate cillum ut cupidatat aliqua.'
)

// Ползваме итератор