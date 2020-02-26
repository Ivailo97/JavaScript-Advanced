function solve(data) {

    return JSON.stringify(data.reduce((a, b, i) => {

        i % 2 === 0 && !a[b] ? a[b] = 0
            : i % 2 !== 0 ? a[data[i - 1]] += +b
                : console.log()

        return a;
    }, {}))
}

console.log(solve(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4']
))