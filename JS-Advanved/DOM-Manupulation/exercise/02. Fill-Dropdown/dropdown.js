function addItem() {

    let newItemTextEl = document.getElementById('newItemText');
    let newItemValueEl = document.getElementById('newItemValue');

    let select = document.getElementById('menu')
    let option = document.createElement('option')

    option.textContent = newItemTextEl.value;
    option.value = newItemValueEl.value;
    select.appendChild(option)

    newItemTextEl.value = '';
    newItemValueEl.value = '';
}