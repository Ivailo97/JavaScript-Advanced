function attachEvents() {

    const baseURL = 'https://rest-messanger.firebaseio.com/messanger.json';

    const submitBtn = document.getElementById('submit');

    const refreshBtn = document.getElementById('refresh');

    const messages = document.getElementById('messages');

    refreshBtn.addEventListener('click', refresh);

    submitBtn.addEventListener('click', submit);

    function submit() {

        const author = document.getElementById('author');
        const content = document.getElementById('content');

        if (author.value === '' || content.value === '') {
            return undefined;
        }

        let obj = { 'author': author.value, 'content': content.value };

        fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj)
            })
            .then(res => res.json())
            .catch(console.log)

        author.value = '';
        content.value = '';
    }

    function refresh() {

        fetch(baseURL)
            .then(res => res.json())
            .then(data => {
                messages.textContent = Object.entries(data).map(([_, value]) => `${value['author']}: ${value['content']}`)
                    .reduce((acc, x) => {
                        acc.push(x)
                        return acc
                    }, [])
                    .join('\n');
            })
            .catch(console.log);
    }
}

attachEvents();