function solve() {

    let resultElement = document.getElementById('result');
    let text = document.getElementById('text').value;

    let replacingWord = document.getElementById('word').value;
    let wordToBeReplaced = JSON.parse(text)[0].split(/\s+/)[2];

    JSON.parse(text)
        .map(x => x.replace(new RegExp(wordToBeReplaced, 'ig'), replacingWord))
        .forEach(x => {
            let p = document.createElement('p');
            p.innerHTML = x;
            resultElement.appendChild(p);
        });
}