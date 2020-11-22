function solve(input) {
    let text = input[0];
    const pattern = /(?:^| )([a-z][a-z0-9\-\._]*[a-z]+@[a-z][a-z\-]*[a-z](\.[a-z][a-z\-]*[a-z]){1,})/g;
    let matches = text.match(pattern);

    if (matches != null) {
        for (let m of matches) {
            console.log(m.trim());
        }
    }
}

solve(
    ['Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.', 'end']
)