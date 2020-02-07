module.exports = function sum(arr, start, end) {

    if (!Array.isArray(arr)) {
        return NaN
    }

    let endIndex = arr.length;

    if (typeof end !== 'undefined' && end + 1 < arr.length) {
        endIndex = end + 1;
    }

    let startIndex = 0;

    if (typeof start !== 'undefined' && start > 0) {
        startIndex = start;
    }

    return arr
        .slice(startIndex, endIndex)
        .reduce((a, b) => a + Number(b), 0)
}