function attachEvents() {

    const baseURL = 'https://fisher-game.firebaseio.com';

    const getAndPostURL = `${baseURL}/catches.json`;

    const updateAndDeleteURL = (id) => `${baseURL}/catches/${id}.json`;

    const deserializeData = x => x.json();

    const errorHandler = x => console.log(x);

    function fetchData(url, method, data = {}, dData = deserializeData, eHandler = errorHandler) {

        const methods = {

            'GET': () => fetch(url)
                .then(dData)
                .catch(eHandler),

            'POST': () => fetch(url, {
                    method: method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                })
                .then(dData)
                .catch(eHandler),

            'PUT': () => fetch(url, {
                    method: method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                })
                .then(dData)
                .catch(eHandler),

            'DELETE': () => fetch(url, {
                    method: method,
                })
                .then(dData)
                .catch(eHandler),
        }

        return methods[method]();
    }

    function createElement(tag, text = "", attributes = undefined) {

        const element = document.createElement(tag);
        element.innerText = text;

        if (attributes !== undefined) {
            attributes.split(' ').map(x => x.split(':')).forEach(([key, value]) => element.setAttribute(key, value));
        }

        return element;
    }

    function formGroup(property, inputAttributes) {

        const fragment = document.createDocumentFragment();
        const labelText = property[0].toUpperCase() + property.slice(1);

        const label = createElement('label', labelText);
        const input = createElement('input', '', inputAttributes);

        fragment.appendChild(label);
        fragment.appendChild(input);
        fragment.appendChild(document.createElement('hr'));
        return fragment;
    }

    function formatCatch(x) {

        const catchID = x[0];
        const catchObj = x[1];

        const fragment = document.createDocumentFragment();

        const attrubutesMap = {
            wrapper: `class:catch data-id:${catchID}`,
            angler: `type:text class:angler value:${catchObj.angler}`,
            weight: `type:number class:weight value:${catchObj.weight}`,
            species: `type:text class:species value:${catchObj.species}`,
            location: `type:text class:location value:${catchObj.location}`,
            bait: `type:text class:bait value:${catchObj.bait}`,
            captureTime: `type:number class:captureTime value:${catchObj.captureTime}`,
        }

        const fragmentContent = Object.keys(catchObj)
            .map(x => formGroup(x, attrubutesMap[x]))
            .reduce((acc, x) => {
                acc.appendChild(x);
                return acc;
            }, createElement('div', '', attrubutesMap.wrapper));

        const updateButton = createElement('button', 'Update', 'class:update');
        const deleteButton = createElement('button', 'Delete', 'class:delete');

        fragmentContent.appendChild(updateButton);
        fragmentContent.appendChild(deleteButton);

        fragment.appendChild(fragmentContent);

        return fragment;
    }

    const html = {
        cathContainer: () => document.getElementById("catches"),
        updatedCatch: (id) => Array.from(document.getElementsByClassName('catch')).find(x => x.dataset.id === id),
        angler: () => document.querySelector('#addForm .angler'),
        weight: () => document.querySelector('#addForm .weight'),
        species: () => document.querySelector('#addForm .species'),
        location: () => document.querySelector('#addForm .location'),
        bait: () => document.querySelector('#addForm .bait'),
        captureTime: () => document.querySelector('#addForm .captureTime'),
        reset: () => document.getElementById('catches').innerHTML = '',
    }

    function getFormData(updatedCatch = undefined) {

        let catchBindingModel = {
            angler: html.angler().value,
            weight: html.weight().value,
            species: html.species().value,
            location: html.location().value,
            bait: html.bait().value,
            captureTime: html.captureTime().value
        }

        if (updatedCatch !== undefined) {

            for (let i = 1; i < updatedCatch.children.length - 1; i += 3) {
                const prop = updatedCatch.children[i].className;
                const newValue = updatedCatch.children[i].value;
                catchBindingModel[prop] = newValue;
            }
        }

        return catchBindingModel;
    }

    function reloadData() {
        actions.load();
    }

    const actions = {
        load: async(e) => {

            html.reset();

            try {
                Object.entries(await fetchData(getAndPostURL, "GET")).map(formatCatch)
                    .forEach(x => html.cathContainer().appendChild(x));
            } catch (err) {
                console.log('Fetch failed');
            }

        },
        add: async(e) => {

            html.reset();

            try {
                await fetchData(getAndPostURL, 'POST', getFormData());
            } catch (err) {
                console.log('Create failed');
            }

            reloadData();
        },
        update: async(e) => {

            const catchId = e.target.parentNode.dataset.id;

            const updatedCatchElement = html.updatedCatch(catchId);

            const updatedCatch = getFormData(updatedCatchElement);

            html.reset();

            try {
                await fetchData(updateAndDeleteURL(catchId), 'PUT', updatedCatch);
            } catch (err) {
                console.log('Update failed');
            }

            reloadData();
        },
        delete: async(e) => {

            const catchId = e.target.parentNode.dataset.id;

            html.reset();

            try {

                await fetchData(updateAndDeleteURL(catchId), 'DELETE');

            } catch (err) {

                console.log('Delete failed');
            }


            reloadData();
        },
    }

    document.addEventListener('click', eventHandler);

    function eventHandler(e) {

        if (typeof actions[e.target.className] === 'function') {
            actions[e.target.className](e);
        }
    }
}

attachEvents();