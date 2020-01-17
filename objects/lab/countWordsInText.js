function solve(data) {

    const regex = /\w+/gim

    return JSON.stringify(data[0].match(regex)
        .reduce((a, b) => {
            !a[b] ? a[b] = 1 : a[b]++
            return a;
        }, {}))
}

console.log(solve(['Far too slow, you\'re far too slow.']))