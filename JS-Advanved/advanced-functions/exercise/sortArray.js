function solve(arr, sortOrder) {

    let sortMap = {

        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a,
    }

    return arr.sort(sortMap[sortOrder])
}

console.log(solve([14, 7, 17, 6, 8], 'asc'))