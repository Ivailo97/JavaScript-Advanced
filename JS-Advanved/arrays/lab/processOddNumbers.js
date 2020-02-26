function solve(arr) {

    const isOddPosition = (_, i) => i % 2 !== 0
    const doubleValue = x => x * 2
    return arr.filter(isOddPosition).map(doubleValue).reverse().join(' ')
}

console.log(solve([10, 15, 20, 25]))