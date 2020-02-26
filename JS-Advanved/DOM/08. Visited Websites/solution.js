function solve() {

    let linkElements = document.getElementsByClassName('link-1');

    for (let i = 0; i < linkElements.length; i++) {
        linkElements[i].addEventListener('click', onClick);
    }

    function onClick() {
        let pElement = this.getElementsByTagName('p')[0];
        let counter = Number(pElement.textContent.split(' ')[1]) + 1;
        pElement.textContent = pElement.textContent.replace(/\d+/, counter);
    }
}