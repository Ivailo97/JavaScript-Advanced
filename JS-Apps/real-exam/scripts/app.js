import { requester } from './services/app-service.js';

import {
    registerViewHandler,
    homeViewHandler,
    logoutViewHandler,
    loginViewHandler,
    createArticleViewHandler,
    editArticleViewHandler,
    deleteArticleHandler,
    detailsArticleViewHandler,
} from './controllers/index.js'

const apiKey = 'https://test-db-2d407.firebaseio.com/';
requester.init(apiKey, sessionStorage.getItem('token'));

const app = Sammy('#root', function() {

    this.use('Handlebars', 'hbs');
    this.get('#/login', loginViewHandler);
    this.post('#/login', () => false);
    this.get('#/register', registerViewHandler);
    this.post('#/register', () => false);
    this.get('#/home', homeViewHandler);
    this.get('#/logout', logoutViewHandler);
    this.get('#/article/create', createArticleViewHandler);
    this.post('#/article/create', () => false);
    this.get('#/article/details/:id', detailsArticleViewHandler);
    this.get('#/article/edit/:id', editArticleViewHandler);
    this.get('#/article/delete/:id', deleteArticleHandler);
});

$(() => {
    app.run('#/login');
})