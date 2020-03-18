const createElement = (tag, text = "", attributes = undefined) => {

    const element = document.createElement(tag);
    element.innerText = text;

    if (attributes !== undefined) {
        attributes.split(' ')
            .map(x => x.split(':'))
            .forEach(([key, value]) => element.setAttribute(key, value));
    }

    return element;
}

const appendTableRow = (tr) => {
    document.querySelector('#results tbody')
        .appendChild(tr);
}

const formatTableRow = (student) => {

    student.ID++;

    return ['ID', 'FirstName', 'LastName', 'FacultyNumber', 'Grade']
        .map(x => createElement('td', student[x]))
        .reduce((acc, x) => {
            acc.appendChild(x)
            return acc;
        }, createElement('tr'));
}

const resetTableRows = () => {

    console.log(document.querySelector('#results tbody').innerHTML)
    document.querySelector('#results tbody').innerHTML = '';

    console.log('im here');
}

const getFormInfo = () => {

    const inputs = document.querySelectorAll('#studentForm input');

    const bindingModel = Array.from(inputs)
        .reduce((acc, x) => {
            if (!acc.hasOwnProperty(x.id)) {
                acc[x.id] = x.value;
            }
            return acc;
        }, { 'ID': document.querySelectorAll('#results tbody tr').length })

    Array.from(inputs).forEach(x => x.value = '');

    return bindingModel;
}

export {
    formatTableRow,
    appendTableRow,
    getFormInfo,
    resetTableRows
};