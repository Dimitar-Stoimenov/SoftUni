function solve(input, rotations) {
    let realRotations = rotations % input.length
 
    for (let i = 0; i < realRotations; i++) {
        let shifter = input.pop()
        input.unshift(shifter)
    }
 
    console.log(input.join(' '))
}

solve(
    ['1', 
'2', 
'3', 
'4'], 
2

)