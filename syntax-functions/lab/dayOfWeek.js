function solve(x) {

    let map = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7,
    }

    return map[x] ? map[x] : 'error';
}

console.log(solve('Monday'))
console.log(solve('invalid'))