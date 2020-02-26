function solve(arr) {

    let number = +arr[0]

    let operations = {
        'chop': (x) => x / 2,
        'dice': (x) => Math.sqrt(x),
        'spice': (x) => x + 1,
        'bake': (x) => x * 3,
        'fillet': (x) => 0.8 * x
    }

    let result = '';

    arr.slice(1).forEach(x => {
         number = operations[x](number)
         result += number + '\n'
         })

    return result
}

console.log(solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']))