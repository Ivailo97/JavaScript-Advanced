import { requester } from './services/app-service.js';
import {
    homeViewHandler,
    aboutViewHandler,
    loginViewHandler,
    registerViewHandler,
    logoutViewHandler,
    catalogViewHandler,
    catalogDetailsViewHandler,
    editTeamViewHandler,
    joinTeamViewHandler,
    leaveTeamViewHandler,
    createTeamViewHandler
} from './controllers/index.js';

/**
 * Configure the application with all it's routes and the template engine that it uses 
 */
const apiKey = 'https://test-db-2d407.firebaseio.com/';
requester.init(apiKey, sessionStorage.getItem('token'));

const app = Sammy('#main', function() {

    this.use('Handlebars', 'hbs');

    this.get('#/', homeViewHandler);
    this.get('#/home', homeViewHandler);
    this.get('#/about', aboutViewHandler);
    this.get('#/login', loginViewHandler);
    this.post('#/login', () => false);
    this.get('#/register', registerViewHandler);
    this.post('#/register', () => false);
    this.get('#/logout', logoutViewHandler);
    this.get('#/catalog', catalogViewHandler);
    this.post('#/catalog', () => false);
    this.get('#/catalog/:id', catalogDetailsViewHandler);
    this.post('#/catalog', false);
    this.get('#/edit/:id', editTeamViewHandler);
    this.post('#/edit/:id', () => false);
    this.get('#/join/:id', joinTeamViewHandler);
    this.get('#/leave/:id', leaveTeamViewHandler);
    this.get('#/create', createTeamViewHandler);
    this.post('#/create', () => false);
});

$(() => {
    app.run('#/');
})