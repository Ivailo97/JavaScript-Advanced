function create(words) {

    let contentDiv = document.getElementById('content');

    words.map(w => {
        let div = document.createElement('div')
        let p = document.createElement('p')
        p.textContent = w
        p.style.display = 'none'
        div.appendChild(p)
        return div;
    }).forEach(x => contentDiv.appendChild(x))

    Array.from(contentDiv.childNodes).forEach(x => {
        x.addEventListener('click', function(e) {
            e.target.childNodes[0].style.display = e.target.childNodes[0].style.display === 'none' ? 'block' : 'none'
        })
    })
}