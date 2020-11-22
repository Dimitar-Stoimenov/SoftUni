function solve(input) {
    let totalStudentTickets = 0
    let totalStandardTickets = 0
    let totalKidTickets = 0
    let totalTotalTickets = 0
    let endCheck = false

    let i = 0

    while (true) {

        if (input[i] === 'kids' || input[i] === 'student' || input[i] === 'standard' || input[i] === 'End'){
            i++
            continue
        }

        let movieName
        let freeSpace

        totalTotalTickets = totalKidTickets + totalStudentTickets + totalStandardTickets

        let studentTickets = 0
        let standardTickets = 0
        let kidTickets = 0

        if (endCheck) {
            break
        }

        while (true) {
            let totalTickets = studentTickets + standardTickets + kidTickets
            if (input[i] === 'End' || input[i] === 'Finish' || totalTickets == freeSpace) {
                let percent = (totalTickets / freeSpace) * 100
                console.log(`${movieName} - ${percent.toFixed(2)}% full.`)

                totalStandardTickets += standardTickets
                totalStudentTickets += studentTickets
                totalKidTickets += kidTickets
                if (input[i] === 'Finish') {
                    endCheck = true
                    break
                }

                i++
                break
            }

            if (!movieName && !freeSpace) {
                movieName = input[i++]
                freeSpace = input[i++]
            }

            switch (input[i]) {
                case 'student':
                    studentTickets++
                    break;
                case 'standard':
                    standardTickets++
                    break;
                case 'kid':
                    kidTickets++
                    break;
            }
            i++
        }
    }
    console.log(`Total tickets: ${totalTotalTickets}`)
    console.log(`${((totalStudentTickets / totalTotalTickets) * 100).toFixed(2)}% student tickets.`)
    console.log(`${((totalStandardTickets / totalTotalTickets) * 100).toFixed(2)}% standard tickets.`)
    console.log(`${((totalKidTickets / totalTotalTickets) * 100).toFixed(2)}% kids tickets.`)
}

solve(["Taxi",
    "8",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "standard",
    "kids",
    "kids",
    "End",
    "Scary Movie",
    "6",
    "student",
    "kid",
    "kid",
    "kid",
    "kid",
    "kid",
    "kid",
    "student",
    "student",
    "End",
    "Scary Movie2",
    "8",
    "student",
    "student",
    "kid",
    "kid",
    "student",
    "student",
    "student",
    "Finish"])


