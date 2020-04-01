import { requester } from './services/app-service.js';

import {
    registerViewHandler,
    homeViewHandler,
    logoutViewHandler,
    loginViewHandler,
    createCauseViewHandler,
    allCauseViewHandler,
    deleteCauseHandler,
    donateCauseHandler,
    detailsCauseViewHandler,
} from './controllers/index.js'

const apiKey = 'https://test-db-2d407.firebaseio.com/';
requester.init(apiKey, sessionStorage.getItem('token'));

const app = Sammy('#main', function() {

    this.use('Handlebars', 'hbs');

    this.get('#/', homeViewHandler);
    this.get('#/home', homeViewHandler);

    this.get('#/register', registerViewHandler);
    this.post('#/register', () => false);

    this.get('#/login', loginViewHandler);
    this.post('#/login', () => false);

    this.get('#/logout', logoutViewHandler)

    this.get('#/cause/create', createCauseViewHandler);
    this.post('#/cause/create', () => false);

    this.get('#/cause/all', allCauseViewHandler);

    this.get('#/cause/details/:id', detailsCauseViewHandler);
    this.get('#/cause/donate/:id', donateCauseHandler);

    this.get('#/cause/delete/:id', deleteCauseHandler);
});

$(() => {
    app.run('#/');
})