import { applyCommon } from './baseController.js';
import { createFormEntity } from '../form-helpers.js';
import { requester } from '../services/app-service.js';

export async function createIdeaViewHandler() {
    /**
     * Load hbs templates
     */
    await applyCommon.call(this);

    await this.partial('./templates/idea/create.hbs');

    /**
     * Handling form events part
     */
    let formRef = document.querySelector('form');

    formRef.addEventListener('submit', async e => {
        e.preventDefault();

        let form = createFormEntity(formRef, ['title', 'description', 'imageURL']);
        let formValue = form.getValue();

        formValue.creator = sessionStorage.getItem('username');
        formValue.comments = [{ 'author': 'init', 'text': 'init' }];
        formValue.likes = 0;

        requester.setAuthToken(sessionStorage.getItem('token'));

        await requester.ideas.createEntity(formValue);

        this.redirect('#/home');
    });
}

export async function detailsIdeaViewHandler() {

    const ideaId = this.params.id;

    this.ideaId = ideaId

    let { title, description, imageURL, likes, comments, creator } = await requester.ideas.getById(ideaId);

    this.isOwner = creator === sessionStorage.getItem('username');
    this.title = title;
    this.description = description;
    this.imageURL = imageURL;
    this.likes = likes;
    this.comments = comments.slice(1);
    this.hasComments = comments.length > 1;

    /**
     * Load hbs templates
     */
    await applyCommon.call(this);
    this.partials.comment = await this.load('./templates/idea/comment.hbs');

    await this.partial('./templates/idea/details.hbs');
}

export async function commentIdeaHandler() {

    const ideaToComment = await requester.ideas.getById(this.params.id);

    const newComment = {
        author: sessionStorage.getItem('username'),
        text: this.params.newComment
    };

    await requester.ideas.patchEntity({ comments: [...ideaToComment.comments, newComment] }, this.params.id);

    this.redirect(`#/idea/details/${this.params.id}`);
}

export async function likeIdeaHandler() {

    const ideaToPatch = await requester.ideas.getById(this.params.id);

    if (sessionStorage.getItem('username') === ideaToPatch.creator) {
        throw new Error('Cant like ur idea!');
    }

    await requester.ideas.patchEntity({ likes: ideaToPatch.likes + 1 }, this.params.id);

    this.redirect(`#/idea/details/${this.params.id}`);
}

export async function deleteIdeaHandler() {

    const ideaToDelete = await requester.ideas.getById(this.params.id);

    if (sessionStorage.getItem('username') !== ideaToDelete.creator) {
        throw new Error('Trek is not yours to delete it!');
    }

    await requester.ideas.deleteEntity(this.params.id);

    this.redirect(`#/home`);
}