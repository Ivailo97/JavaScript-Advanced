function solve(arr) {

    const compareByLengthAscThenAlphabeticalyAsc = (x, y) =>
        x.length > y.length ? 1
            : x.length === y.length ? x.localeCompare(y)
                : -1

    return [...new Set(arr.sort(compareByLengthAscThenAlphabeticalyAsc))].join('\n')
}

console.log(solve(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
))