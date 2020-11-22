function solve(input) {

    class Town {
        constructor(town, latitude, longitude) {
            this.town = town;
            this.latitude = Number(latitude).toFixed(2);
            this.longitude = Number(longitude).toFixed(2);
        }
    }

    let townsArray = input.map(x => {
        let [town, latitude, longitude] = x.split(' | ');
        let townObject = new Town(town, latitude, longitude);
        return townObject;
    })

    townsArray.forEach(x => console.log(x))
}

solve(
    ['Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625']
)