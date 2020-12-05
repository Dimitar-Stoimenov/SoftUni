function solve(input) {
    let students = Number(input.shift())
    let lectures = Number(input.shift())
    let courseBonus = Number(input.shift())

    let highestBonus = 0
    let highestBonusStudentAttendances = 0

    let studentAttendance = input

    for (const element in studentAttendance) {
        let totalBonus = (Number(studentAttendance[element]) / lectures) * (5 + courseBonus)

        if (totalBonus > highestBonus) {
            highestBonus = totalBonus
        }
        
        if (Number(studentAttendance[element]) > highestBonusStudentAttendances) {
            highestBonusStudentAttendances = Number(studentAttendance[element])
        }
    }

    console.log(`Max Bonus: ${Math.ceil(highestBonus)}.`)
    console.log(`The student has attended ${highestBonusStudentAttendances} lectures.`)
}

solve(
    [
        '5', '25', '30',
        '12', '19', '24',
        '16', '20'
    ]
)