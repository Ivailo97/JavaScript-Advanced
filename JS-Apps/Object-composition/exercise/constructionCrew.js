function solve(worker) {

    if (worker.dizziness) {
        let mililiters = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += mililiters;
        worker.dizziness = false;
    }

    return worker
}

let refreshedWorker = solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
})

console.log(refreshedWorker);