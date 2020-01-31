function addItem() {

    const createDomElement = (type, content) => {
        let element = document.createElement(type);
        element.innerHTML = content;
        return element;
    }

    let input = document.getElementById('newItemText')

    let li = createDomElement('li', input.value)
    let ul = document.getElementById('items')

    if (input.value) {
        ul.appendChild(li)
        input.value = ''
    }
}