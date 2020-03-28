import { applyCommon } from './baseController.js'

import { requester } from '../services/app-service.js';

export async function indexViewHandler() {

    await applyCommon.call(this);

    this.partial('./templates/home/index.hbs')
}

export async function homeViewHandler() {

    await applyCommon.call(this);
    this.partials.trek = await this.load('./templates/trek/trek.hbs');

    const treksInDB = Object.entries(await requester.treks.getAll().then(x => x || {}))
        .map(([key, value]) => { return { 'id': key, ...value } });

    this.treks = treksInDB;
    this.hasTreks = treksInDB.length !== 0;

    this.partial('./templates/home/home.hbs');
}