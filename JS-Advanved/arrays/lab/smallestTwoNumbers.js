function solve(arr) {
    return arr.sort((x, y) => x - y).slice(0,2).join(' ')
}

console.log(solve([30, 15, 50, 5]))