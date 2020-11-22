function subtract(a, b, c) {
    let subtract = sum(a, b) - c
    console.log(subtract)

    function sum(a, b) {
        return a + b
    }
}

subtract(23, 6, 10)