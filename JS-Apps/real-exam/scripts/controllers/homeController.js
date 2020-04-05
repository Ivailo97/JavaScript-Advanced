import { applyCommon } from './baseController.js'

import { requester } from '../services/app-service.js';

export async function homeViewHandler() {

    await applyCommon.call(this);

    if (!this.loggedIn) {
        this.redirect(['#/login']);
        return;
    }

    this.partials.article = await this.load('./templates/home/article.hbs');

    const articlesInDB = Object.entries(await requester.articles.getAll().then(x => x || {}))
        .map(([key, value]) => { return { 'id': key, ...value } });

    const jsArticles = Array.from(articlesInDB).filter(x => x.category.toLowerCase() === 'javascript')
        .sort((a, b) => b.title.localeCompare(a.title));
    const cSharpArticles = Array.from(articlesInDB).filter(x => x.category.toLowerCase() === 'c#' || x.category.toLowerCase() === 'csharp')
        .sort((a, b) => b.title.localeCompare(a.title));;
    const javaArticles = Array.from(articlesInDB).filter(x => x.category.toLowerCase() === 'java')
        .sort((a, b) => b.title.localeCompare(a.title));;
    const pythonArticles = Array.from(articlesInDB).filter(x => x.category.toLowerCase() === 'python')
        .sort((a, b) => b.title.localeCompare(a.title));;

    this.jsArticles = jsArticles;
    this.cSharpArticles = cSharpArticles;
    this.javaArticles = javaArticles;
    this.pythonArticles = pythonArticles;

    await this.partial('./templates/home/home.hbs');
}