function solve(input) {

    const aggregateMap = (a, b) => {
        let [name, price] = b.split(' : ');
        let value = [name, price].join(': ')
        let firstLetter = name[0];
        !a[firstLetter] ? a[firstLetter] = [value] : a[firstLetter].push(value);
        return a;
    }

    const formatValues = (key) => `${key}\n ${map[key].sort().join('\n ')}\n`

    const aggregateResult = (a, b) => a += formatValues(b)

    let map = input.reduce(aggregateMap, {});

    return Object.keys(map)
        .sort()
        .reduce(aggregateResult, '')
}

console.log(solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
))