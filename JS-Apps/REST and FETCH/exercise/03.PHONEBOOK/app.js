function attachEvents() {

    const baseURL = 'https://phonebook-nakov.firebaseio.com/phonebook';

    const GETandPOSTurl = `${baseURL}.json`;

    const ul = document.getElementById('phonebook');

    const valuesAndKeys = {}

    const createBtn = document.getElementById('btnCreate');
    const loadBtn = document.getElementById('btnLoad');

    loadBtn.addEventListener('click', load);

    createBtn.addEventListener('click', create);

    function create() {

        const person = document.getElementById('person');
        const phone = document.getElementById('phone');

        let obj = { 'person': person.value, 'phone': phone.value };

        fetch(GETandPOSTurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj)
            })
            .then(res => res.json())
            .then(console.log)

        person.value = '';
        phone.value = '';
    }

    function load() {

        fetch(`${GETandPOSTurl}`)
            .then(res => res.json())
            .then(data => {

                Object.entries(data)
                    .filter(([key, value]) => value.name !== '' && value.phone !== '')
                    .map(([key, value]) => {
                        const li = createAndFormatLi(value);
                        console.log(li.textContent);
                        console.log(key);
                        valuesAndKeys[li.textContent] = key;
                        return li;
                    })
                    .forEach(x => ul.appendChild(x))
            })
    }

    function createAndFormatLi({ person, phone }) {
        const li = document.createElement('li');
        li.textContent = `${person}: ${phone}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn');
        deleteBtn.classList.add('btn-success');
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener('click', deleteHandler);
        li.appendChild(deleteBtn);
        return li;
    }

    function deleteHandler(event) {

        let key = valuesAndKeys[event.target.parentNode.textContent];

        fetch(`${baseURL}/${key}.json`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        ul.removeChild(event.target.parentNode)
    }
}

attachEvents();