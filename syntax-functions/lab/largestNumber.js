function solve(...x){
    return `The largest number is ${Math.max(...[...x])}.`;
}

console.log(solve(1,2));