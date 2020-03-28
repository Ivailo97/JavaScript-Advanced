import { requester } from './services/app-service.js'
import {
    indexViewHandler,
    registerViewHandler,
    homeViewHandler,
    logoutViewHandler,
    loginViewHandler,
    createTrekViewHandler,
    detailsTrekViewHandler,
    editTrekViewHandler,
    likeTrekHandler,
    closeTrekHandler,
    profileViewHandler
} from './controllers/index.js'

const apiKey = 'https://test-db-2d407.firebaseio.com/';
requester.init(apiKey, sessionStorage.getItem('token'));

const app = Sammy('#main', function() {

    this.use('Handlebars', 'hbs');

    this.get('#/', indexViewHandler);
    this.get('#/index', indexViewHandler);
    this.get('#/home', homeViewHandler)
    this.get('#/logout', logoutViewHandler)

    this.get('#/register', registerViewHandler);
    this.post('#/register', () => false);

    this.get('#/login', loginViewHandler);
    this.post('#/login', () => false);

    this.get('#/create-trek', createTrekViewHandler);
    this.post('#/create-trek', () => false);

    this.get('#/trek/details/:id', detailsTrekViewHandler);
    this.get('#/trek/edit/:id', editTrekViewHandler);
    this.post('#/trek/edit/:id', () => false);

    this.get('#/trek/like/:id', likeTrekHandler);
    this.get('#/trek/close/:id', closeTrekHandler);

    this.get('#/profile', profileViewHandler);
});

$(() => {
    app.run('#/');
})