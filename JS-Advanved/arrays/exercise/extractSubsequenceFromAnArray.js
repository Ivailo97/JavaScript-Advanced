function solve(arr) {

    const aggregateResult = (a, b) => {
        if (b >= a[a.length - 1]) {
            a.push(b)
        }
        return a;
    }

    return arr.slice(1).reduce(aggregateResult, [+arr[0]]).join('\n')
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
))