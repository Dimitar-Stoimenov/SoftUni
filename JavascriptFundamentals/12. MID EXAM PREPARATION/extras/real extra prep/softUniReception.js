function solve(input) {
    input = input.map(Number);
    let [employee1SPH, employee2SPH, employee3SPH, students] = input;
    let currentHour = 0

    while (students > 0) {
        if (currentHour % 4 == 0) {
            currentHour++
        };

        currentHour++;
        students -= employee1SPH + employee2SPH + employee3SPH;
    }

    currentHour--

    if (currentHour < 0) {
        currentHour = 0
    }

    console.log(`Time needed: ${currentHour}h.`)
}

solve(
    ['5', '2', '3', '0']
)