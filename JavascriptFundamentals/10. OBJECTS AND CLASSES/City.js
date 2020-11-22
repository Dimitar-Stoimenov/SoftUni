function solve(a, b, c, d, e) {
    let city = {name: a, area: b, population: c, country: d, postCode: e};

    for (const key in city) {
        console.log(`${key} -> ${city[key]}`);        
    }
}

solve("Sofia", " 492", "1238438", "Bulgaria", "1000")