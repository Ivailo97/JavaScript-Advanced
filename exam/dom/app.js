function solve() {

    let creator = document.getElementById('creator');
    let title = document.getElementById('title');
    let category = document.getElementById('category');
    let content = document.getElementById('content');

    let createBtn = document.getElementsByClassName('btn create')[0];
    let articles = document.querySelector('.site-content main section');
    let archiveUl = document.querySelector('.archive-section ul');

    createBtn.addEventListener('click', createHandler);

    function createHandler(e) {
        e.preventDefault();

        let article = createArticle();
        articles.appendChild(article);

        creator.value = '';
        title.value = '';
        category.value = '';
        content.value = '';
    }

    function createArticle() {

        let article = document.createElement('article');
        let h1 = document.createElement('h1');
        h1.textContent = title.value;
        article.appendChild(h1);
        let p = document.createElement('p');
        p.textContent = "Category:";
        let strong = document.createElement('strong');
        strong.textContent = category.value;
        p.appendChild(strong);
        article.appendChild(p);
        let creatorP = document.createElement('p');
        creatorP.textContent = 'Creator:';
        let creatorStrong = document.createElement('strong');
        creatorStrong.textContent = creator.value;
        creatorP.appendChild(creatorStrong);
        article.appendChild(creatorP);
        let contentP = document.createElement('p');
        contentP.textContent = content.value;
        article.appendChild(contentP);

        let buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('btn');
        deleteBtn.classList.add('delete');
        deleteBtn.addEventListener('click', deleteHandler);

        buttonsDiv.appendChild(deleteBtn);
        let archiveBtn = document.createElement('button');
        archiveBtn.classList.add('btn');
        archiveBtn.classList.add('archive');
        archiveBtn.textContent = 'Archive';
        archiveBtn.addEventListener('click', archiveHandler);
        buttonsDiv.appendChild(archiveBtn);
        article.appendChild(buttonsDiv);

        return article;
    }

    function archiveHandler(e) {
        let section = e.target.parentNode.parentNode;
        let liContent = section.children[0].textContent;

        let li = document.createElement('li');
        li.textContent = liContent;

        articles.removeChild(section);
        archiveUl.appendChild(li);

        let elements = document.querySelectorAll('.archive-section ul li');

        let elementContents = Array.from(elements)
            .map(x => x.textContent)
            .sort((a, b) => a.localeCompare(b));

        for (const e of elements) {
            archiveUl.removeChild(e);
        }

        for (let e of elementContents) {
            let li = document.createElement('li');
            li.textContent = e;
            archiveUl.appendChild(li);
        }
    }

    function deleteHandler(e) {
        let section = e.target.parentNode.parentNode;
        articles.removeChild(section);
    }
}