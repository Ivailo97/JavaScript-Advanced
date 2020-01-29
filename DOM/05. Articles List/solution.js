function createArticle() {
	
	let titleContent = document.getElementById('createTitle').value;
	let contentContent = document.getElementById('createContent').value;
	let articleList = document.getElementById('articles');

	if (contentContent !== '' && titleContent !== ''){

		let article = document.createElement('article');

		let h3 = document.createElement('h3');
		h3.textContent = titleContent;

		let p = document.createElement('p')
		p.textContent = contentContent;

		article.appendChild(h3);
		article.appendChild(p);

		articleList.appendChild(article);

	    document.getElementById('createTitle').value = '';
	    document.getElementById('createContent').value = '';
    }
}