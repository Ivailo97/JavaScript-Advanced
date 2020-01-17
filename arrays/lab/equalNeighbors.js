function solve(matrix) {

    function calculateEqualNeighborsCount(row, col) {

        const notLastCol = () => col !== matrix[row].length - 1

        const notLastRow = () => row !== matrix.length - 1

        const equalsToRightElement = () => element === matrix[row][col + 1]

        const equalsToLowerElement = () => element === matrix[row + 1][col]

        let element = matrix[row][col]

        let count = 0

        if (notLastCol() && equalsToRightElement()) {
            count++
        }

        if (notLastRow() && equalsToLowerElement()) {
            count++
        }

        return count
    }

    const aggregateRepeatingElementsCount = (result, element, row) => result + element.reduce((a, _, col) => a + calculateEqualNeighborsCount(row, col), 0)

    return matrix.reduce(aggregateRepeatingElementsCount, 0)
}

console.log(solve(
    [
        ['2', '3', '4', '7', '0'],
        ['4', '0', '5', '3', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '4']
    ]
))

console.log(solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
))

console.log(solve(
    [
        ['2', '2', '5', '7', '4'],
        ['4', '0', '5', '3', '4'],
        ['2', '5', '5', '4', '2']
    ]
))