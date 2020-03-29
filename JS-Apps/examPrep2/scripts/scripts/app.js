import { requester } from './services/app-service.js';

import {
    indexViewHandler,
    registerViewHandler,
    homeViewHandler,
    logoutViewHandler,
    loginViewHandler,
    createIdeaViewHandler,
    likeIdeaHandler,
    deleteIdeaHandler,
    commentIdeaHandler,
    profileViewHandler,
    detailsIdeaViewHandler,
} from './controllers/index.js'

const apiKey = 'https://test-db-2d407.firebaseio.com/';
requester.init(apiKey, sessionStorage.getItem('token'));

const app = Sammy('#main', function() {

    this.use('Handlebars', 'hbs');

    this.get('#/', indexViewHandler);
    this.get('#/index', indexViewHandler);

    this.get('#/register', registerViewHandler);
    this.post('#/register', () => false);

    this.get('#/login', loginViewHandler);
    this.post('#/login', () => false);

    this.get('#/home', homeViewHandler);

    this.get('#/logout', logoutViewHandler)

    this.get('#/idea/create', createIdeaViewHandler);
    this.post('#/idea/create', () => false);

    this.get('#/idea/details/:id', detailsIdeaViewHandler);
    this.get('#/idea/add-comment/:id', commentIdeaHandler);

    this.get('#/idea/like/:id', likeIdeaHandler);
    this.get('#/idea/delete/:id', deleteIdeaHandler);

    this.get('#/profile', profileViewHandler);
});

$(() => {
    app.run('#/');
})