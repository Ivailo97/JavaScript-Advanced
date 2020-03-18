import { fetchData } from './studentRepository.js';
import {
    formatTableRow,
    appendTableRow,
    getFormInfo,
    resetTableRows
} from './htmlService.js';

const baseURL = 'https://test-acfcb.firebaseio.com/students';

const byIdDescending = (x, y) => x.ID - y.ID;

async function loadStudents() {
    Object.values(await fetchData(`${baseURL}.json`))
        .sort(byIdDescending)
        .map(formatTableRow)
        .forEach(appendTableRow);
}

function reloadStudents() {
    resetTableRows();
    loadStudents();
}

async function createStudent(e) {
    e.preventDefault();
    await fetchData(`${baseURL}.json`, 'POST', reloadStudents, getFormInfo())
}

const actions = {
    createStudent
}

export { loadStudents, actions }