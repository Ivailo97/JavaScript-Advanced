function solve() {

    let text = document.getElementById('text').value;
    let resultElement = document.getElementById('result');

    text.split(/\s+/)
        .filter(x => x.match(/[a-zA-Z%@!]+/))
        .map(x => [...x].map(y => y.charCodeAt(0)))
        .forEach(x => {
            let p = document.createElement('p')
            p.innerHTML = x.join(' ')
            resultElement.appendChild(p)
        })

    let p = document.createElement('p');

    p.innerHTML = text.split(/\s+/)
        .filter(x => x.match(/\d+/))
        .map(x => String.fromCharCode(Number(x)))
        .join('');

    resultElement.appendChild(p)
}