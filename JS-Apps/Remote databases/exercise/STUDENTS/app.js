import { loadStudents, actions } from './studentService.js';

loadStudents();

function attachEvents() {

    document.addEventListener('click', (e) => {

        if (typeof actions[e.target.id] === 'function') {
            actions[e.target.id](e);
        }
    })
}

attachEvents();