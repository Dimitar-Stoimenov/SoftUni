function literatura(a, b, c){
    let totalPages = Number(a)
    let pagesPerHour = Number(b)
    let days = Number(c)

    let totalTime = totalPages / pagesPerHour
    let hoursPerDay = totalTime / days

    console.log(hoursPerDay)
}

literatura('212', '20', '2')