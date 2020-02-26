function deleteByEmail() {

    let inputElement = document.getElementsByTagName('input')[0];

    let selectedRow = [...document.querySelectorAll('tbody tr')]
        .filter(x => x.innerHTML.includes(inputElement.value))[0];

    let resultDiv = document.getElementById('result');

    if (selectedRow) {
        selectedRow.remove()
        resultDiv.innerHTML = 'Deleted.'

    } else {
        resultDiv.innerHTML = 'Not found.'
    }
}