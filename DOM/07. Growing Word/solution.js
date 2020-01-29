function growingWord() {

    let paragraphElement = document.querySelector('#exercise p');
    let colors = ['blue', 'green', 'red'];

    changeColor();
    increaseFontSize();

    function changeColor() {
        let index = colors.indexOf(paragraphElement.style.color);
        paragraphElement.style.color = colors[++index % 3];
    }

    function increaseFontSize() {
        let size = Number(paragraphElement.style.fontSize.slice(0, -2)) === 0 ? 1 : paragraphElement.style.fontSize.slice(0, -2);
        paragraphElement.style.fontSize = `${size * 2}px`;
    }
}