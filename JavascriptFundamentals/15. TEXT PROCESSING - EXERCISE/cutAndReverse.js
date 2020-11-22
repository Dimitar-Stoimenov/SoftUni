function solve(input) {
    let firstHalf = ''
    let secondHalf = ''

    firstHalf = input.substring(0, input.length / 2)
    secondHalf = input.substring(input.length / 2)

    let reversedFirstHalf = ''
    let reversedSecondHalf = ''

    for (let i = firstHalf.length - 1; i >= 0; i--) {
        reversedFirstHalf += firstHalf[i]        
    }

    for (let i = secondHalf.length - 1; i >= 0; i--) {
        reversedSecondHalf += secondHalf[i]        
    }

    console.log(reversedFirstHalf)
    console.log(reversedSecondHalf)
}

solve(
    'tluciffiDsIsihTgnizamAoSsIsihT'
)