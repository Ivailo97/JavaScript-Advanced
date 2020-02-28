function solve(input) {

    return JSON.parse(input).reduce((acc, x) => Object.assign(acc, x), {});
}

console.log(solve(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`))