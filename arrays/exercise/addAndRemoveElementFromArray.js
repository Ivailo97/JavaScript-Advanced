function solve(arr) {

    let operations = {
        add: (arr, x) => arr.push(x),
        remove: (arr) => arr.pop()
    }

    const aggregateArray = (a, b, i) => {
        operations[b](a, ++i)
        return a
    }

    let result = arr.reduce(aggregateArray, []).join('\n')

    return result.length === 0 ? 'Empty' : result
}

console.log(solve(['remove',
    'remove',
    'remove']
))