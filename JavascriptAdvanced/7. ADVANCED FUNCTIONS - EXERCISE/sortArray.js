function solve(arr, order) {
    return arr.sort((a, b) => {
        if (order === 'asc') {
            return a - b
        } else if (order === 'desc') {
            return b - a
        }
    })
}

solve(
    [14, 7, 17, 6, 8], 'desc'
)