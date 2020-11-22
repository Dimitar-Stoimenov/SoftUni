function solve(input) {
    let referees = +input[0]
    i = 1
    let inputLine = input[i++]
    let totalGrade = 0
    let totalGradesCount = 0

    while (inputLine !== 'Finish') {
        let presentationName = inputLine
        let grades = 0
        let gradesCount = 0

        for (j = 1; j <= referees; j++) {
            let grade = +input[i++]
            grades += grade

            gradesCount++
        }

        let avgGrade = grades / gradesCount
        console.log(`${presentationName} - ${avgGrade.toFixed(2)}.`)
        totalGradesCount += +gradesCount
        totalGrade += +grades
        inputLine = input[i++]
    }

    console.log(`Student's final assessment is ${(totalGrade / totalGradesCount).toFixed(2)}.`)
}

solve(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])
