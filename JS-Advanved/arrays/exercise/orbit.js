function solve(arr) {

    let [cols, rows, x, y] = arr.slice()

    const aggregateInitialMatrix = (a) => a.push(new Array(cols).fill(0)) && a

    const calculateDistanceBetweenTwoCells = (x, y, row, col) => Math.max(Math.abs(x - row), Math.abs(y - col))

    const isNotCoreCell = (row, col) => row !== x || col !== y

    const fillOrbit = (element, row) => {
        element.forEach((_, col) => {
            if (isNotCoreCell(row, col)) {
                matrix[row][col] = matrix[x][y] + calculateDistanceBetweenTwoCells(x, y, row, col)
            }
        })
    }

    let matrix = new Array(rows).fill(0).reduce(aggregateInitialMatrix, [])
    matrix[x][y] = 1

    matrix.forEach(fillOrbit)
    return matrix.map(x => x.join(' ')).join('\n')
}

console.log(solve([4, 4, 0, 0]))