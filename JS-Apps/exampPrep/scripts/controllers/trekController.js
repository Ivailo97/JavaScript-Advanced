import { applyCommon } from './baseController.js';
import { createFormEntity } from '../form-helpers.js';
import { requester } from '../services/app-service.js';

export async function createTrekViewHandler() {
    /**
     * Load hbs templates
     */
    await applyCommon.call(this);

    await this.partial('./templates/modify/create-trek.hbs');

    /**
     * Handling form events part
     */
    let formRef = document.querySelector('#create-trek-form');

    formRef.addEventListener('submit', async e => {
        e.preventDefault();

        let form = createFormEntity(formRef, ['location', 'dateTime', 'description', 'imageURL']);
        let formValue = form.getValue();

        formValue.organizer = sessionStorage.getItem('username');
        formValue.likes = 0;

        requester.setAuthToken(sessionStorage.getItem('token'));

        await requester.treks.createEntity(formValue);

        this.redirect('#/home');
    });
}

export async function detailsTrekViewHandler() {

    this.trekId = this.params.id;

    let { dateTime, description, imageURL, likes, location, organizer } = await requester.treks.getById(this.params.id);

    this.isOwner = organizer === sessionStorage.getItem('username');
    this.dateTime = dateTime;
    this.description = description;
    this.imageURL = imageURL;
    this.likes = likes;
    this.organizer = organizer;
    this.location = location;

    /**
     * Load hbs templates
     */
    await applyCommon.call(this);

    this.partial('./templates/trek/details.hbs');
}

export async function editTrekViewHandler() {
    /**
     * Load hbs templates
     */

    const trekToEdit = await requester.treks.getById(this.params.id);

    if (sessionStorage.getItem('username') !== trekToEdit.organizer) {
        throw new Error('Cant edit trek which is not yours!');
    }

    await applyCommon.call(this);

    this.id = this.params.id;

    await this.partial('./templates/modify/edit-trek.hbs');

    /**
     * Handling form events part
     */
    let formRef = document.querySelector('#edit-trek-form');
    let form = createFormEntity(formRef, ['location', 'dateTime', 'description', 'imageURL']);

    /**
     * Load and set the initial form value for edit
     */

    form.setValue(trekToEdit);

    formRef.addEventListener('submit', async e => {
        e.preventDefault();
        let form = createFormEntity(formRef, ['location', 'dateTime', 'description', 'imageURL']);
        let formValue = form.getValue();

        await requester.treks.patchEntity(formValue, this.params.id);

        /** 
         * Navigates back to the catalog details
         */
        this.redirect(`#/trek/details/${this.params.id}`);
    });
}

export async function likeTrekHandler() {

    const trekToPatch = await requester.treks.getById(this.params.id);

    trekToPatch.likes++;

    if (sessionStorage.getItem('username') === trekToPatch.organizer) {
        throw new Error('Cant like ur trek!');
    }

    await requester.treks.patchEntity(trekToPatch, this.params.id);

    this.redirect(`#/trek/details/${this.params.id}`);
}

export async function closeTrekHandler() {

    const trekToDelete = await requester.treks.getById(this.params.id);

    if (sessionStorage.getItem('username') !== trekToDelete.organizer) {
        throw new Error('Trek is not yours to delete it!');
    }

    await requester.treks.deleteEntity(this.params.id);

    this.redirect(`#/home`);
}