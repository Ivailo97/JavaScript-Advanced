import { fetchData } from "./bookData.js";

const baseURL = 'https://test-acfcb.firebaseio.com/books';
const buildModifyingURL = (bookId) => `${baseURL}/${bookId}.json`;

const html = {
    tableBody: () => document.getElementsByTagName('tbody')[0],
    formInputs: () => document.getElementsByTagName('input'),
    form: () => document.getElementsByTagName('form')[0],
}

const resetTable = () => {
    html.tableBody().innerHTML = ""
};

const createElement = (tag, text = "", attributes = undefined) => {

    const element = document.createElement(tag);
    element.innerText = text;

    if (attributes !== undefined) {
        attributes.split(' ').map(x => x.split(':'))
            .forEach(([key, value]) => element.setAttribute(key, value));
    }

    return element;
}

const editHandler = (e) => {

    Array.from(e.target.parentNode.parentNode.children).slice(0, 3)
        .forEach((x, i) => Array.from(html.formInputs())[i].value = x.textContent);

    html.form().method = 'put';
    html.form().dataset.id = e.target.parentNode.parentNode.id;
}

const reloadData = () => actions.loadBooks();

const resetForm = () => {

    html.form().method = "post";
    Array.from(html.formInputs()).forEach(x => x.value = '');
}

const createButtonsTd = () => {

    const buttonsTd = createElement('td');

    const editBtn = createElement('button', 'Edit');
    editBtn.addEventListener('click', editHandler);
    const deleteBtn = createElement('button', 'Delete');

    buttonsTd.appendChild(editBtn);
    buttonsTd.appendChild(deleteBtn);
    return buttonsTd
}

const formatRow = (id, book) => {

    const tr = createElement('tr', "", `id:${id}`);

    const tdataMap = Object.entries(book)
        .reduce((acc, [key, value]) => {
            if (!acc.hasOwnProperty(key)) {
                acc[key] = createElement('td', value)
            }
            return acc;
        }, { 'buttons': createButtonsTd() });

    tr.appendChild(tdataMap['title']);
    tr.appendChild(tdataMap['author']);
    tr.appendChild(tdataMap['isbn']);
    tr.appendChild(tdataMap['buttons']);

    return tr;
}

const actions = {

    loadBooks: async() => {

        resetTable();
        resetForm();

        const books = await fetchData(`${baseURL}.json`);

        Object.entries(books)
            .map(([key, value]) => formatRow(key, value))
            .forEach(x => html.tableBody().appendChild(x));
    },

    Submit: (e) => {

        const formMethod = html.form().getAttribute('method');

        const bookProperties = ['title', 'author', 'isbn'];

        const bookBindingModel = Array.from(html.formInputs())
            .reduce((acc, x, i) => {
                if (!acc.hasOwnProperty(bookProperties[i]))
                    acc[bookProperties[i]] = x.value;
                return acc;
            }, {});

        const formActions = {

            'post': async() => {
                await fetchData(`${baseURL}.json`, 'POST', reloadData, bookBindingModel);
            },

            'put': async() => {
                const bookId = html.form().dataset.id;
                await fetchData(buildModifyingURL(bookId), 'PUT', reloadData, bookBindingModel);
            },
        }

        formActions[formMethod]();
    },

    Delete: async(e) => {

        const bookId = e.target.parentNode.parentNode.id;

        await fetchData(buildModifyingURL(bookId), 'DELETE', reloadData);
    }
}

export { actions };