function solve(input) {
    let [days, plunderPerDay, expectedPlunder] = input.map(Number);
    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            totalPlunder += plunderPerDay * 1.5;
            totalPlunder *= 0.7
        } else if (i % 3 === 0) {
            totalPlunder += plunderPerDay * 1.5;
        } else if (i % 5 === 0) {
            totalPlunder += plunderPerDay
            totalPlunder *= 0.7
        } else {
            totalPlunder += plunderPerDay
        }
    }

    let percentage = totalPlunder / expectedPlunder * 100

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

solve(
    ['5', '40', '100']
)