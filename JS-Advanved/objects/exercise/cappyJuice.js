function solve(input) {

    const split = x => x.split(' => ');

    const aggregateMap = (a, b) => {

        let [name, quantity] = b;

        !a[name] ? a[name] = +quantity : a[name] += +quantity

        if (a[name] >= 1000) {
            !result[name] ? result[name] = 0 : console.log()
            result[name] += Math.floor(a[name] / 1000)
            a[name] -= result[name] * 1000
        }

        return a;
    };

    const aggregateResult = (a, b) => a += `${b} => ${result[b]}\n`

    let result = {};

    input.map(split).reduce(aggregateMap, {})

    return Object.keys(result).reduce(aggregateResult, '')
}

console.log(solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]
))