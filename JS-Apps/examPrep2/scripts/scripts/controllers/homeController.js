import { applyCommon } from './baseController.js'

import { requester } from '../services/app-service.js';
import { triggerSuccessNotification, triggerErrorNotification } from '../services/notification-service.js';

const notifications = {
    'success': triggerSuccessNotification,
    'fail': triggerErrorNotification,
}

function triggerNotification(state) {

    if (typeof notifications[state] === 'function') {
        notifications[state]('Default Message');
    }
}

export async function indexViewHandler() {

    await applyCommon.call(this);

    if (this.loggedIn) {
        this.redirect(['#/home']);
        return;
    }

    this.partial('./templates/home/index.hbs')
}

export async function homeViewHandler() {

    await applyCommon.call(this);

    if (!this.loggedIn) {
        this.redirect(['#/index']);
        return;
    }

    this.partials.idea = await this.load('./templates/idea/idea-list-details.hbs');

    const ideasInDB = Object.entries(await requester.ideas.getAll().then(x => x || {}))
        .map(([key, value]) => { return { 'id': key, ...value } });

    this.ideas = ideasInDB;
    this.hasIdeas = ideasInDB.length !== 0;

    await this.partial('./templates/home/home.hbs');
}