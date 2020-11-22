function solve(a, b, c) {
    let income = Number(a)
    let grade = Number(b)
    let minimalIncome = Number(c)

    let scholarshipAmount = grade * 25
    let socialScholarship = minimalIncome * 0.35

    if (grade < 4.5) {
        console.log(`You cannot get a scholarship!`)
    } else {
        if ((grade >= 4.5) && (grade < 5.5)) {
            if (income < minimalIncome) {
                console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`)
            } else {
                console.log(`You cannot get a scholarship!`)
            }
        } else if (grade >= 5.5) {
            if ((socialScholarship > scholarshipAmount) && (income < minimalIncome)) {
                console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`)
            } else {
                console.log(`You get a scholarship for excellent results ${Math.floor(scholarshipAmount)} BGN`)
            } 
        }
    }
}

solve("5550.00",
    "5.50",
    "450.00")