function solve() {

    let inputElement = document.getElementById('searchField');
    document.getElementById('searchBtn').addEventListener('click', onClick);
    let rowElements = document.getElementsByTagName("tbody").item(0).getElementsByTagName("tr");

    function onClick() {

        for (let row of rowElements) {

            row.removeAttribute('class');

            if (row.textContent.includes(inputElement.value)) {
                row.className = 'select';
            }
        }

        inputElement.value = '';
    }
}