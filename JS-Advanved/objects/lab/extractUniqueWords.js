function solve(arr) {

    const toLowerCase = x => x.toLowerCase();
    const aggregateToText = (a, b) => a += '' + b;
    const regex = /\w+/gim;

    return [...(new Set(arr.map(toLowerCase)
        .reduce(aggregateToText, '')
        .match(regex)))]
        .join(', ');
}

console.log(solve(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']
))