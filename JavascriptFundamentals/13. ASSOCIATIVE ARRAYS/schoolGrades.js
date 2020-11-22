function solve(input) {

    let students = new Map()

    for (const line of input) {
        let lineArr = line.split(' ')
        let name = lineArr.shift()
        let grades = lineArr.map(x => Number(x))

        if (students.has(name)) {
            let oldGrades = students.get(name)
            let allGrades = oldGrades.concat(grades)

            students.set(name, allGrades)
        } else {
            students.set(name, grades)
        }
    }

    let studentEntries = Array.from(students.entries())
    let sortedStudentEntries = studentEntries.sort((a, b) => {
        let averageStudentA = getAverageGrade(a[1])
        let averageStudentB = getAverageGrade(b[1])

        return averageStudentA - averageStudentB
    })

    sortedStudentEntries.forEach(line => console.log(`${line[0]}: ${line[1].join(', ')} `))


    function getAverageGrade(grades) {
        let gradesSum = 0
        let gradeCount = 0

        for (let grade of grades) {
            gradesSum += grade
            gradeCount++
        }

        let averageGrade = gradesSum / gradeCount.toFixed(2)

        return averageGrade
    }
}

solve(
    ['Lilly 4 6 6 5',
        'Tim 5 6',
        'Tammy 2 4 3',
        'Tim 6 6']
)