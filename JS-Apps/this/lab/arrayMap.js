/*
Array.prototype.aMap = function(fn) {
    return this.reduce((acc, x) => acc.concat(fn(x)), []);
}
*/

function arrayMap(array, fn) {
    return array.reduce((acc, x) => acc.concat(fn(x)), [])
}

let nums = [1, 2, 3, 4, 5];
console.log(arrayMap(nums, (item) => item * 2)); // [ 2, 4, 6, 8, 10 ]