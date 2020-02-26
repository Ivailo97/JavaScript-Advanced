function solve(x) {

    const regex = /\w+/gm;
    
    let result = [...x.match(regex)].map(x=> x.toUpperCase()).join(', ')

    return result;
}