function result(...arr) {

    let result = arr.map(x => `${typeof x}: ${typeof x === 'object' ? JSON.stringify(x) : x}`);

    const aggregateTypeMap = (a, b) => {

        let [type, value] = b.split(': ');

        if (type === 'object') {
            Object.entries(JSON.parse(value))
                .forEach((kvp) => { a[typeof kvp[1]] ? a[typeof kvp[1]]++ : a[typeof kvp[1]] = 1 })
        }

        a[type] ? a[type]++ : a[type] = 1

        return a;
    }

    result.push(Object.entries(result.reduce(aggregateTypeMap, {}))
        .sort((a, b) => b[1] - a[1])
        .map(x => `${x[0]} = ${x[1]}`))

    result.flat().forEach(x => console.log(x))
}