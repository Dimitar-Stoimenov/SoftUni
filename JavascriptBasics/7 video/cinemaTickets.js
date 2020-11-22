function solve(input) {
    let standardTickets = 0
    let studentTickets = 0
    let kidsTickets = 0
    let index = 0

    let inputLine = input[index++]

    while (inputLine !== 'Finish') {
        // if (inputLine === 'kid' || inputLine === 'standard' || inputLine === 'student' || inputLine === 'End') {
        //     inputLine = input[index++]
        //     continue
        // } // MOJE I BEZ TOZI KOD - TOVA E IZKLUCHENIE, ZA KOETO OT JUDGE NE SA POMISLILI QVNO

        let movieName = inputLine
        let ticketsCount = +(input[index++])
        let boughtTickets = 0

        let ticketType = input[index++]

        while (ticketType !== 'End') {

            if (ticketType === 'standard') {
                standardTickets++
            } else if (ticketType === 'kid') {
                kidsTickets++
            } else {
                studentTickets++
            }

            boughtTickets++

            if (boughtTickets === ticketsCount) {
                break
            }

            ticketType = input[index++]
        }

        let percentage = (boughtTickets / ticketsCount) * 100
        console.log(`${movieName} - ${percentage.toFixed(2)}% full.`)

        inputLine = input[index++]
    }

    let totalTickets = standardTickets + studentTickets + kidsTickets
    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`)
    console.log(`${((standardTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`)
    console.log(`${((kidsTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`)
}

solve(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "student",
    "student",
    "standard",
    "student",
    "student",
 
    "student",
    "student",
    "standard",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])
