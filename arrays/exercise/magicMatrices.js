function solve(matrix) {

    const sum = (a, b) => a + b

    const getColumnSum = i => matrix.reduce((a, b) => a + b[i], 0)

    const aggregateHaveEqualRowSum = (a, b, i) => a && b.reduce(sum, 0) === matrix[i + 1].reduce(sum, 0)

    const rowsHaveEqualSum = () => matrix.slice(0, matrix.length - 1).reduce(aggregateHaveEqualRowSum, true)

    const aggregateHaveEqualColSum = (a, _, row) => a && getColumnSum(row) === getColumnSum(row + 1)

    const colsHaveEqualSum = () => matrix.slice(0, matrix.length - 1).reduce(aggregateHaveEqualColSum, true)

    return rowsHaveEqualSum() && colsHaveEqualSum()
}

console.log(solve(
    [
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]
))