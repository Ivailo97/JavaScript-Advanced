function solve() {

    const dropdownBtn = document.getElementById('dropdown');
    const ul = document.getElementById('dropdown-ul');
    const box = document.getElementById('box');

    dropdownBtn.addEventListener('click', chooseHandler);

    function chooseHandler() {

        if (ul.style.display === 'block') {
            ul.style.display = "none"
            box.style.backgroundColor = 'black';
            box.style.color = 'white';
        } else {
            ul.style.display = 'block';
        }
    }

    Array.from(ul.children).forEach(x => x.addEventListener('click', changeColor));

    function changeColor() {
        let color = this.textContent;
        box.style.backgroundColor = color;
        box.style.color = "black";
    }
}