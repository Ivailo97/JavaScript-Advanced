import { applyCommon } from './baseController.js';
import { createFormEntity } from '../form-helpers.js';
import { requester } from '../services/app-service.js';
import { triggerSuccessNotification } from '../services/notification-service.js';

export async function createCauseViewHandler() {
    /**
     * Load hbs templates
     */
    await applyCommon.call(this);

    if (!this.loggedIn) {
        this.redirect(['#/home']);
        return;
    }

    await this.partial('./templates/cause/create.hbs');

    /**
     * Handling form events part
     */
    let formRef = document.querySelector('form');

    formRef.addEventListener('submit', async e => {
        e.preventDefault();

        let form = createFormEntity(formRef, ['cause', 'pictureUrl', 'neededFunds', 'description']);
        let formValue = form.getValue();

        if (formValue.cause === '' || formValue.pictureUrl === '' || formValue.neededFunds === '' || formValue.description === '') {
            throw new Exception('Some of the inputs are empty')
        }

        formValue.collectedFunds = 0;
        formValue.creator = sessionStorage.getItem('username');
        formValue.donors = [{ name: 'init' }];

        requester.setAuthToken(sessionStorage.getItem('token'));

        await requester.causes.createEntity(formValue);

        triggerSuccessNotification('Your cause was created successfully!');

        this.redirect('#/home');
    });
}

export async function allCauseViewHandler() {

    await applyCommon.call(this);

    if (!this.loggedIn) {
        this.redirect(['#/home']);
        return;
    }

    this.partials.cause = await this.load('./templates/cause/cause.hbs');

    const causesInDB = Object.entries(await requester.causes.getAll().then(x => x || {}))
        .map(([key, value]) => { return { 'id': key, ...value } });

    this.causes = causesInDB;

    await this.partial('./templates/cause/all.hbs');
}

export async function detailsCauseViewHandler() {

    await applyCommon.call(this);

    if (!this.loggedIn) {
        this.redirect(['#/home']);
        return;
    }

    const causeId = this.params.id;
    this.causeId = causeId

    let { cause, pictureUrl, collectedFunds, neededFunds, description, donors, creator } = await requester.causes.getById(causeId);

    this.isOwner = creator === sessionStorage.getItem('username');

    this.cause = cause;
    this.collectedFunds = collectedFunds;
    this.neededFunds = neededFunds;
    this.description = description;
    this.pictureUrl = pictureUrl;
    this.donors = donors.slice(1);

    /**
     * Load hbs templates
     */

    this.partials.donor = await this.load('./templates/cause/donor.hbs');

    await this.partial('./templates/cause/details.hbs');
}

export async function donateCauseHandler() {

    const causeToDonate = await requester.causes.getById(this.params.id);

    if (causeToDonate.creator === sessionStorage.getItem('username')) {
        throw new Error('Cant donate to ur cause');
    }

    const donor = {
        name: sessionStorage.getItem('username'),
    };

    const donatedMoney = parseInt(this.params.currentDonation);

    if (donatedMoney < 0) {
        throw new Exception('Cant donate negative value')
    }

    const updatedCollectedFunds = causeToDonate.collectedFunds + donatedMoney;
    const updatedDonors = causeToDonate.donors.find(x => x.name === donor.name) ?
        causeToDonate.donors : [...causeToDonate.donors, donor]

    const updatedCause = {

        cause: causeToDonate.cause,
        collectedFunds: updatedCollectedFunds,
        creator: causeToDonate.creator,
        description: causeToDonate.description,
        donors: updatedDonors,
        neededFunds: causeToDonate.neededFunds,
        pictureUrl: causeToDonate.pictureUrl
    }

    await requester.causes.updateEntity(updatedCause, this.params.id);
    triggerSuccessNotification('You donated successfully!');
    this.redirect(`#/cause/details/${this.params.id}`);
}

export async function deleteCauseHandler() {

    const causeToDelete = await requester.causes.getById(this.params.id);

    if (sessionStorage.getItem('username') !== causeToDelete.creator) {
        throw new Error('Cause is not yours to delete it!');
    }

    await requester.causes.deleteEntity(this.params.id);
    triggerSuccessNotification('Cause successfully deleted!');
    this.redirect(`#/home`);
}