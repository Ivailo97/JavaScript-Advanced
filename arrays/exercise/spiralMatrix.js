function solve(rows, cols) {

    const aggregateInitialMatrix = (a) => a.push(new Array(cols).fill(0)) && a

    let matrix = new Array(rows).fill(0).reduce(aggregateInitialMatrix, [])

    const matrixHasZeroElement = () => matrix.flat().some(x => x == 0)

    const fillRightAndGetNextStartingCoordinates = (row, col) => {

        let lastElement = row === 0 && col === 0 ? matrix[row][col] : matrix[row][col - 1]

        for (col; col < matrix[row].length && matrix[row][col] === 0; col++) {

            matrix[row][col] = ++lastElement
        }

        return [row + 1, col - 1]
    }

    const fillDownAndGetNextStartingCoordinates = (row, col) => {

        let lastElement = matrix[row - 1][col]

        for (row; row < matrix.length && matrix[row][col] === 0; row++) {

            matrix[row][col] = ++lastElement
        }

        return [row - 1, col - 1]
    }

    const fillLeftAndGetNextStartingCoordinates = (row, col) => {

        let lastElement = matrix[row][col + 1]

        for (col; col >= 0 && matrix[row][col] === 0; col--) {

            matrix[row][col] = ++lastElement
        }

        return [row - 1, col + 1]
    }

    const fillUpAndGetNextStartingCoordinates = (row, col) => {

        let lastElement = matrix[row + 1][col]

        for (row; row >= 0 && matrix[row][col] === 0; row--) {

            matrix[row][col] = ++lastElement
        }

        return [row + 1, col + 1]
    }

    let startingCoordinates = [0, 0]

    while (matrixHasZeroElement()) {

        startingCoordinates = fillRightAndGetNextStartingCoordinates(...startingCoordinates)
        startingCoordinates = fillDownAndGetNextStartingCoordinates(...startingCoordinates)
        startingCoordinates = fillLeftAndGetNextStartingCoordinates(...startingCoordinates)
        startingCoordinates = fillUpAndGetNextStartingCoordinates(...startingCoordinates)
    }

    return matrix.map(x => x.join(' ')).join('\n');
}

console.log(solve(5, 5))