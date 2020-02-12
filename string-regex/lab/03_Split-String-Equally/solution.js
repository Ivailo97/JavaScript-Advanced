function solve() {
    let text = document.getElementById('text').value;
    let number = Number(document.getElementById('number').value);
    let resultElement = document.getElementById('result');

    resultElement.innerHTML = text.padEnd(Math.ceil(text.length / number) * number, text)
        .match(new RegExp('.'.repeat(number), 'g'))
        .join(' ')
}