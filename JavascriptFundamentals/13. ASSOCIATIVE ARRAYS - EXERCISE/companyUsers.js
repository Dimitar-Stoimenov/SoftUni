function solve(input) {
    let companies = {}

    input.forEach(line => {
        let [company, userId] = line.split(' -> ')

        if (!companies[company]) {
            companies[company] = []
            companies[company].push(userId)
        } else {
            companies[company].push(userId)
        }

    })

    for (const company in companies) {
        let uniqueIds = new Set()

        for (const userId of companies[company]) {
            uniqueIds.add(userId)
        }

        companies[company] = uniqueIds
    }

    Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0])).forEach(line => {
        let [company, userIdArray] = line

        console.log(company)

        for (const iterator of userIdArray) {
            console.log(`-- ${iterator}`)
        }
    })
}

solve(
    [
        'SoftUni -> AA12345',
        'SoftUni -> BB12345',
        'Microsoft -> CC12345',
        'HP -> BB12345'
    ]
)