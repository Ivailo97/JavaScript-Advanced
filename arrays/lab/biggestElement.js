function solve(matrix) {
    return Math.max(...matrix.map(x => Math.max(...x)))
}

console.log(solve(
    [
        [20, 50, 10],
        [8, 33, 145]
    ]
))