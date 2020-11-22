function solve(input) {
    let movies = []

    let movieInfo = input.map(x => x.split(' '))

    for (let i = 0; i < movieInfo.length; i++) {
        if (movieInfo[i].includes('addMovie')) {
            let movieName = movieInfo[i]
                .filter(x => x !== 'addMovie')
                .join(' ')
            movies.push({ name: movieName })

        } else if (movieInfo[i].includes('directedBy')) {
            let directedByIndex = 0
            let movieName = movieInfo[i]
                .filter((x, j) => {
                    x !== 'directedBy'
                    if (x == 'directedBy') {
                        directedByIndex = j
                    }
                    return x
                })
                .slice(0, directedByIndex)
                .join(' ')

            let director = movieInfo[i]
                .slice(directedByIndex + 1)
                .join(' ')

            movies.forEach(movie => {
                if (movie.name === movieName) {
                    movie.director = director
                }
            })

        } else if (movieInfo[i].includes('onDate')) {
            let onDateIndex = 0
            let movieName = movieInfo[i]
                .filter((x, j) => {
                    x !== 'onDate'
                    if (x == 'onDate') {
                        onDateIndex = j
                    }
                    return x
                })
                .slice(0, onDateIndex)
                .join(' ')

            let date = movieInfo[i].slice(onDateIndex + 1).join(' ')

            movies.forEach(movie => {
                if (movie.name === movieName) {
                    movie.date = date
                }
            })
        }
    }

    let result = movies.filter(movie => {
        if (movie.director !== undefined
            && movie.date !== undefined) {
            return movie
        }
    })

    result.forEach(movie => console.log(JSON.stringify(movie)))
}

solve(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen',
        'addMovie Inception'
    ]
)