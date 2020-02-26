function solve(x1, x2) {

    let start = +x1
    let end =  +x2

    let result = 0;

    for (let i = start; i <= end; i++) {
        result += i;
    }

    return result
}