function solve(...x){

    let length = [...x].reduce((acc,element) => acc + element.length,0);

    let avg = Math.floor(length / x.length);

    return Array.of(length,avg).join('\n');
}

 console.log(solve('chocolate', 'ice cream', 'cake'))