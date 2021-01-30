function solve(input) {
    let worker = input;

    if (worker.dizziness) {
        let waterNeeded = .1 * worker.weight * worker.experience;
        worker.levelOfHydrated += waterNeeded;
        worker.dizziness = false;
    }

    return worker;
}

solve(
    {
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }
)