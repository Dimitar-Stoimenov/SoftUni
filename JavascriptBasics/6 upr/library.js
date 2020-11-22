function solve(input) {
    let index = 1
    let target = input[0]
    let book
    let counter = 0
    while (true) {
        book = input[index++]

        if (book === target) {
            console.log(`You checked ${counter} books and found it.`)
            break
        }

        if (index === input.length) {
            console.log(`The book you search is not here!`)
            console.log(`You checked ${counter} books.`)
            break
        }

        counter++
    }
}

solve(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])


