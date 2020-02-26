function solve(json) {

    let symbolsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '\"': '&quot;',
        '\'': '&#39;'
    };

    function escapeSymbols(text) {
        return text
        .split("&").join(symbolsToReplace["&"])
        .split("<").join(symbolsToReplace["<"])
        .split(">").join(symbolsToReplace[">"])
        .split("\"").join(symbolsToReplace["\""])
        .split("\'").join(symbolsToReplace["'"])
    }

    function formatRow(obj) {
        return `  <tr><td>${escapeSymbols(obj['name'])}</td><td>${obj['score']}</td></tr>`
    }

    let result = [];
    result.push('<table>')
    result.push('  <tr><th>name</th><th>score</th></tr>')

    JSON.parse(json).forEach(o => result.push(formatRow(o)))

    result.push('</table>')

    return result.join('\n');
}

console.log(solve(['[{"name":"Pencho Penchev","score":0},{"name":"<script>alert(\\"Wrong!\\")</script>","score":1}]']))
console.log(solve(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']))