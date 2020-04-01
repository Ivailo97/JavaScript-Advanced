import { applyCommon } from './baseController.js'

export async function homeViewHandler() {

    await applyCommon.call(this);
    this.partial('./templates/home/home.hbs')
}