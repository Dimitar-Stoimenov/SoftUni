function solve(input) {
    let validityPattern = /([=\/])[A-Z][a-zA-Z]{2,}\1/g;

    let x = input.matchAll(validityPattern);
    let destinations = [];
    let points = 0;

    for (const key of x) {
        let destination = key[0];
        destination = destination.slice(1, destination.length - 1)
        destinations.push(destination);
        points += destination.length;
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}

solve(
    '=Ha2wai=/C2yprus/=Invalid/invalid==i5valid=/I5valid/=i='
)