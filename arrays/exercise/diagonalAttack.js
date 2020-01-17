function solve(arr) {

    const aggregateRightDiagonalSum = x => x.reduce((a, _, i) => a + x[i][i], 0)

    const aggregateLeftDiagonalSum = x => x.reduce((a, _, i) => a + x[i][x.length - 1 - i], 0)

    const diagonalSumIsEqual = x => aggregateLeftDiagonalSum(x) === aggregateRightDiagonalSum(x)

    let matrixOfNumbers = arr.map(x => x.split(/\s+/).map(Number))

    const changeAllNonDiagonalElements = (matrix, newValue) => {
        matrix.forEach((x, i, arr) => {
            x.forEach((_, j) => {
                if (j !== i && j !== arr.length - 1 - i) matrix[i][j] = newValue
            })
        })
    }

    if (diagonalSumIsEqual(matrixOfNumbers)) {
        changeAllNonDiagonalElements(matrixOfNumbers, aggregateLeftDiagonalSum(matrixOfNumbers))
    }

    return matrixOfNumbers.map(x => x.join(' ')).join('\n')
}

console.log(solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
))