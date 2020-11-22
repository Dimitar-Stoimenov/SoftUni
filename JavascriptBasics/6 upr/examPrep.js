function solve(input) {
    let failsPermitted = Number(input[0])
    let fails = 0
    let problemName
    let grade
    let failed = false
    let numberOfProblems = 0
    let index = 1
    let totalGrade = 0
    let lastProblem

    while (index < input.length) {
        problemName = input[index++]

        if (problemName === 'Enough' || grade === 'Enough') {
            break
        }

        lastProblem = problemName
        grade = Number(input[index++])
        numberOfProblems++
        totalGrade += grade

        if (grade <= 4) {
            fails++
        }

        if (fails === failsPermitted) {
            failed = true
            break
        }        
    }

    let averageGrade = totalGrade / numberOfProblems

    if (failed) {
        console.log(`You need a break, ${fails} poor grades.`)
    } else {
        console.log(`Average score: ${averageGrade.toFixed(2)}`)
        console.log(`Number of problems: ${numberOfProblems}`)
        console.log(`Last problem: ${lastProblem}`)
    }
}

solve(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
