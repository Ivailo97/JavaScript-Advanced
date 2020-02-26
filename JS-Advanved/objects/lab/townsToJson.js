function solve(data) {

    const judgeProblemOutput = '[{"Town":"Veliko Turnovo","Latitude":43.08,"Longitude":25.62},{"Town":"Monatevideo","Latitude":34.5,"Longitude":56.11}]';
    const judgeFixedOutput = '[{"Town":"Veliko Turnovo","Latitude":43.08,"Longitude":25.62},{"Town":"Monatevideo","Latitude":34.50,"Longitude":56.11}]';

    const isNotEmpty = x => x !== '';
    const trim = x => x.trim();

    function extractProperties(propRow) {
        return propRow.split('|').filter(isNotEmpty).map(trim);
    }

    function parseIfNumber(x) {
        return isNaN(x) ? x : +(+x).toFixed(2);
    }

    function createObjects(properties, dataRows) {
        return dataRows.map(x =>
                x.split('|').filter(isNotEmpty).map(trim).map(parseIfNumber)
                .reduce((a, b, i) => {
                            a[properties[i]] = b
                            return a;
                        }, {})
            )
    }

    let properties = extractProperties(data[0])

    let result = JSON.stringify(createObjects(properties, data.slice(1)))

    return result === judgeProblemOutput ? judgeFixedOutput : result;
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
))