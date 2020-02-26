function getArticleGenerator(articles) {

    let index = 0;

    const contentDiv = document.getElementById('content');

    return function() {

        let result = document.createElement('article');
        result.innerHTML = articles[index];

        if (index < articles.length) {
            contentDiv.appendChild(result);
        }

        index++
    }
}