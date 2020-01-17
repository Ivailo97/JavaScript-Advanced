function solve(arr) {
    const isEvenIndex = (x, i) => i % 2 === 0
    return arr.filter(isEvenIndex).join(' ')
}

console.log(solve(['20', '30', '40']))