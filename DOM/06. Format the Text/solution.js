function solve() {

    let paragraphContent = document.getElementById('input').textContent;

    let paragraphContentSentences = paragraphContent.split('.').filter(s => s !== '');

    let outputElement = document.getElementById('output');

    if (paragraphContentSentences.length > 3) {

        let p = document.createElement('p');

        for (let i = 0; i < paragraphContentSentences.length; i++) {

            if (i % 3 === 0 && i !== 0) {
                outputElement.appendChild(p);
                p = document.createElement('p');
            }

            p.textContent += paragraphContentSentences[i] + '.';

            if (i === paragraphContentSentences.length - 1) {
                outputElement.appendChild(p);
            }
        }

    } else {

        let p = document.createElement('p');
        p.textContent = paragraphContent;
        outputElement.appendChild(p);
    }
}