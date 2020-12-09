function solve(input) {
    let rotations = Number(input.pop())
    let realRotations = rotations % input.length
 
    for (let i = 0; i < realRotations; i++) {
        let shifter = input.pop()
        input.unshift(shifter)
    }
 
    console.log(input.join(' '))
}