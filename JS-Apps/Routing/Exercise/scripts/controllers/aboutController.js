import { applyCommon } from './baseController.js';

export async function aboutViewHandler() {

    await applyCommon.call(this);

    this.partial('./templates/about/about.hbs')
}