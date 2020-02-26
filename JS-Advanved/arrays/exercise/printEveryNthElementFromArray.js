function solve(arr) {

    const isAtNthIndex = (_, i) => Number(i + 1) % Number(arr[arr.length - 1]) === 0

    return [arr[0], ...arr.slice(1, arr.length - 1).filter(isAtNthIndex)].join('\n')
}

console.log(solve(['5',
    '20',
    '31',
    '4',
    '20',
    '2']
))