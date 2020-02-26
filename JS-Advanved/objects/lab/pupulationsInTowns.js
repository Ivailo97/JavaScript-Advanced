function solve(data) {

    let obj = data.reduce((a, b) => {

        let pair = b.split(' <-> ')

        if (!a[pair[0]]) {
            a[pair[0]] = 0
        }

        a[pair[0]] += +pair[1];
        return a;

    }, {})

    return Object.keys(obj)

        .reduce((a, b) => {

            a.push(`${b} : ${obj[b]}`)
            return a;

        }, [])
        .join('\n')
}

console.log(solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
))