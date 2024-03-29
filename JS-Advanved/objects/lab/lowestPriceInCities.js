function solve(arr) {

    const formPair = x => `${x[0]} -> ${x[1]}`;

    const splitByPipe = x => x.split(' | ');

    const joinByPipe = x => x.join(' | ');

    const aggregateToText = (a, b) => {
        a += `${b}\n`
        return a;
    }

    const aggregateToMap = (a, b) => {
        let key = b.split(' | ');
        let value = key.pop()
        key = key.join(' | ');
        a[key] = value
        return a
    }

    const aggregateToProductsMap = (a, b) => {

        let town = b[0];
        let income = +b[2]
        let townAndIncome = `${income} (${town})`;
        let product = b[1];

        !a[product] ? a[product] = townAndIncome
            : +a[product].split(' ')[0] > income
                ? a[product] = townAndIncome
                : console.log()

        return a;
    }

    arr = Object.entries(arr.reduce(aggregateToMap, {}))
        .map(joinByPipe)

    return Object.entries(arr.map(splitByPipe)
        .reduce(aggregateToProductsMap, {}))
        .map(formPair)
        .reduce(aggregateToText, '')
}

console.log(solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']
))