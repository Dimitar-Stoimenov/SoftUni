function solve(input) {
    
    let output = ''

    for (let i = 0; i < input.length; i++) {
        let isTopInteger = true

        for (j = i + 1; j < input.length; j++) {
            if (input[i] <= input[j]) {
                isTopInteger = false
                break
            }
        }

        if (isTopInteger) {
            output += input[i] + ' '
        }
    }

    console.log(output)
}