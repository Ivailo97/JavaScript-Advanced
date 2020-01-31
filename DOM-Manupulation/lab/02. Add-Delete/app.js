function addItem() {

    const createDomElement = (type, content) => {
        let element = document.createElement(type);
        element.innerHTML = content
        if (type === 'a') {
            element.href = "#"
        }

        return element;
    }

    let input = document.getElementById('newText')
    let ul = document.getElementById('items')
    let li = createDomElement('li', input.value)
    let a = createDomElement('a', '[Delete]')

    li.appendChild(a)

    if (input.value) {
        ul.appendChild(li)
        input.value = ''
    }

    function removeCurrentLiElement() {
        ul.removeChild(ul.childNodes[ul.childNodes.length - 1])
    }

    a.addEventListener('click', removeCurrentLiElement)
}