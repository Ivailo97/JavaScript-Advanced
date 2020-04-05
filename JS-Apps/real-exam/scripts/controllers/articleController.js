import { applyCommon } from './baseController.js';
import { createFormEntity } from '../form-helpers.js';
import { requester } from '../services/app-service.js';

export async function createArticleViewHandler() {
    /**
     * Load hbs templates
     */
    await applyCommon.call(this);

    if (!this.loggedIn) {
        this.redirect(['#/login']);
        return;
    }

    await this.partial('./templates/article/create.hbs');

    /**
     * Handling form events part
     */
    let formRef = document.querySelector('form');

    formRef.addEventListener('submit', async e => {
        e.preventDefault();

        let form = createFormEntity(formRef, ['title', 'category', 'content']);
        let formValue = form.getValue();

        formValue.creator = sessionStorage.getItem('username');
        requester.setAuthToken(sessionStorage.getItem('token'));

        await requester.articles.createEntity(formValue);

        this.redirect('#/home');
    });
}

export async function detailsArticleViewHandler() {

    await applyCommon.call(this);

    if (!this.loggedIn) {
        this.redirect(['#/login']);
        return;
    }

    const articleId = this.params.id;

    this.articleId = articleId;

    let { title, category, content, creator } = await requester.articles.getById(articleId);

    this.isOwner = creator === sessionStorage.getItem('username');
    this.title = title;
    this.category = category;
    this.content = content;

    /**
     * Load hbs templates
     */

    await this.partial('./templates/article/details.hbs');
}

export async function editArticleViewHandler() {

    await applyCommon.call(this);

    if (!this.loggedIn) {
        this.redirect(['#/login']);
        return;
    }

    const articleToEdit = await requester.articles.getById(this.params.id);
    this.title = articleToEdit.title;
    this.category = articleToEdit.category;
    this.content = articleToEdit.content;

    await this.partial('./templates/article/edit.hbs');

    let formRef = document.querySelector('form');

    formRef.addEventListener('submit', async e => {
        e.preventDefault();

        let form = createFormEntity(formRef, ['title', 'category', 'content']);
        let formValue = form.getValue();

        formValue.creator = sessionStorage.getItem('username');
        requester.setAuthToken(sessionStorage.getItem('token'));

        await requester.articles.updateEntity(formValue, this.params.id);

        this.redirect('#/home');
    });
}

export async function deleteArticleHandler() {

    const articleToDelete = await requester.articles.getById(this.params.id);

    if (sessionStorage.getItem('username') !== articleToDelete.creator) {
        throw new Error('Article is not yours to delete it!');
    }

    await requester.articles.deleteEntity(this.params.id);

    this.redirect(`#/home`);
}