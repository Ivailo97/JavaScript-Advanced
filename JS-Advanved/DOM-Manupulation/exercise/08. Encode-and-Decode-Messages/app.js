function encodeAndDecodeMessages() {

    let buttons = [...document.querySelectorAll('#main button')];

    let textareas = [...document.querySelectorAll('#main textarea')];

    function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }

    function prevChar(c) {
        return String.fromCharCode(c.charCodeAt(0) - 1)
    }

    function encodeAndSend() {
        textareas[1].value = transform(textareas[0].value, nextChar);
        textareas[0].value = '';
    }

    function transform(text, fn) {
        return text.split('').map(fn).join('');
    }

    function decodeAndRead() {
        textareas[1].value = transform(textareas[1].value, prevChar)
    }

    buttons[0].addEventListener('click', encodeAndSend)

    buttons[1].addEventListener('click', decodeAndRead)
}