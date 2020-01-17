function solve(arr) {

    let counter = +arr.pop() % arr.length

    const aggregateResult = (a, _) => {

        if (counter) {
            a.unshift(a.pop())
            counter--
        }

        return a;
    }

    return arr.reduce(aggregateResult, [...arr]).join(' ')
}

console.log(solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']
))