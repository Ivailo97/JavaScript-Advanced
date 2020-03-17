import { actions } from "./bookService.js";

function attackEvents() {

    document.addEventListener('click', (e) => {

        e.preventDefault();

        if (typeof actions[e.target.id] === 'function') {
            actions[e.target.id]();
        }

        if (typeof actions[e.target.textContent] === 'function') {
            actions[e.target.textContent](e);
        }
    });
}

attackEvents();