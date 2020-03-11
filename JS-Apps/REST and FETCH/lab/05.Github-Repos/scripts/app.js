function loadRepos() {

    const username = document.getElementById('username').value;
    const url = `https://api.github.com/users/${username}/repos`;
    const repos = document.getElementById('repos');

    function formatData(data) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href', data.html_url);
        a.textContent = data.full_name;
        li.appendChild(a);
        return li;
    }

    fetch(url)
        .then(res => res.json())
        .then(data => data.map(formatData).forEach(x => repos.appendChild(x)))
}