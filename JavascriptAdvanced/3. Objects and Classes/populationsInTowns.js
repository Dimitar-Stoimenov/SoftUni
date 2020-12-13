function solve(input) {
    let obj = {}

    for (let line of input) {
        let [town, pop] = line.split(' <-> ')

        if (!obj[town]) {
            obj[town] = Number(pop)
        } else {
            obj[town] += Number(pop)
        }
    }

    Object.entries(obj).forEach(x => console.log(x[0] + " : " + x[1]))
}

solve(
    ['Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000']
)