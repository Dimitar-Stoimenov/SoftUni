function solve(input){
    let day = (Number(input.shift()))
    let operand = (Number(input.shift()))

    console.log(day % operand)
}

solve(['25', '4'])