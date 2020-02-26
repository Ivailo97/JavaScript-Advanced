
function solve(x,y,operator){

    let operations = {

        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y,
        '%': (x, y) => x % y,
        '**': (x, y) => x ** y
    }

    return operations[operator](x,y);
}





