function solve(input) {

    let townsArray = input.map(x => {
        let [town, latitude, longitude] = x.split(' | ');
        let townObject = {}

        townObject.town = town;
        townObject.latitude = Number(latitude).toFixed(2);
        townObject.longitude = Number(longitude).toFixed(2);

        return townObject;
    })

    townsArray.forEach(x => console.log(x))
}

solve(
    ['Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625']
)