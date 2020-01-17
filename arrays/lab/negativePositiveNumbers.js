function solve(arr) {

    const operationMap = {
        true: 'push',
        false: 'unshift'
    }

    const isPositive = x => x >= 0

    const aggregateResult = (a, b) => {
        a[operationMap[isPositive(b)]](b)
        return a;
    }

    return arr.slice()
        .reduce(aggregateResult, [])
        .join(' ')
}

console.log(solve([7, -2, 8, 9]))
console.log(solve([3, -2, 0, -1]))