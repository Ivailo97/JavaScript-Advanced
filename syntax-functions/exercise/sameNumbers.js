function solve(x){

    x = x.toString();

    let firstDigit = x[0] + '+';

    const regex = new RegExp(firstDigit);

    let match = [...x.match(regex)][0].toString();

    let allDigitsAreTheSame = match === x;

    let sumOfDigits = x.split('').reduce((x,y) => +x + +y);

    return Array.of(allDigitsAreTheSame,sumOfDigits).join('\n');
}

console.log(solve(2232));