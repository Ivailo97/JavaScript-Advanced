function solve(x) {

    let result;

    let type = typeof x;

    type !== 'number' ?
        result = `We can not calculate the circle area, because we receive a ${type}.`
        : result = ((x ** 2) * Math.PI).toFixed(2);

    return result;
}

console.log(solve(5));
console.log(solve('name'));