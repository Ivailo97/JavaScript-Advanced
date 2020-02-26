function solve(arr) {

    const aggregateNestedMap = (a, b) => {
        let [system, component, subcomponent] = b.split(' | ');
        !a[system] ? a[system] = { [component]: [subcomponent] }
            : !a[system][component]
                ? a[system][component] = [subcomponent]
                : a[system][component].push(subcomponent);
        return a;
    }

    const aggregateValueArray = (a, b) => {
        a.push(b)
        return a;
    }

    const aggregateResultArray = (a, b) => {
        a.push(formatEntry(b))
        return a;
    }

    const toLowestLevelFormat = x => `||||||${x}`;

    const formatInnerValue = value => value.map(toLowestLevelFormat).join('\n');

    const formatEntryValue = value => Object.keys(value)
        .sort((a, b) => Object.keys(value[a]) > Object.keys(value[b]) ? -1 : 1)
        .map(x => `|||${x}\n${formatInnerValue(value[x])}`)
        .reduce(aggregateValueArray, [])
        .join('\n')

    const formatEntry = key => `${key}\n${formatEntryValue(map[key])}`

    const compareByNumberOfValuesDescThenAlphabeticaly = (a, b) => {
        let x = Object.keys(map[a]).length
        let y = Object.keys(map[b]).length
        return x > y ? -1 : x === y ? a.localeCompare(b) : 1
    }

    let map = arr.reduce(aggregateNestedMap, {})

    return Object.keys(map)
        .sort(compareByNumberOfValuesDescThenAlphabeticaly)
        .reduce(aggregateResultArray, [])
        .join('\n');
}

console.log(solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
))