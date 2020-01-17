function solve(input) {

    const aggregateMap = (a, b) => {
        let [brand, model, cars] = b.split(' | ')
        !a[brand] ? a[brand] = { [model]: +cars }
            : !a[brand][model] ? a[brand][model] = +cars
                : a[brand][model] += +cars
        return a;
    };

    const aggregateResultArray = (a, b) => {
        a.push(b)
        a.push(formatValues(map[b]))
        return a;
    };

    const formatValues = (arr) => Object.keys(arr)
        .map(x => `###${x} -> ${arr[x]}`)
        .join('\n');

    let map = input.reduce(aggregateMap, {})

    return Object.keys(map)
        .reduce(aggregateResultArray, [])
        .join('\n');
}

console.log(solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
))