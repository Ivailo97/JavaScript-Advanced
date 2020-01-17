function solve(input) {

    const toTableCell = x => `\t\t<td>${x}</td>\n`;

    const toTableData = x => Object.keys(x).reduce((a, b) => a += toTableCell(x[b]), '');

    const toTableRow = x => `\t<tr>\n${toTableData(x)}\t</tr>`;

    const parseJson = x => JSON.parse(x);

    const isLast = x => x == input.length - 1

    const aggregateToArray = (a, b, i) => {
        isLast(i) ? a.push(b, '</table>') : a.push(b)
        return a;
    }

    return input.map(parseJson)
        .map(toTableRow)
        .reduce(aggregateToArray, ['<table>'])
        .join('\n');
}

console.log(solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
))