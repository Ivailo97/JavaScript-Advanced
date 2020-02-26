function solve(matrix) {

    const aggregateDiagonalSums = (result, element, index, array) => {
        result[0] += element[index]
        result[1] += element[array.length - 1 - index]
        return result
    }

    return matrix.reduce(aggregateDiagonalSums, [0, 0]).join(' ')
}

console.log(solve(
    [
        [20, 40],
        [10, 60]
    ]
))