import { contacts } from './contacts.js'

async function main() {

    const contactCardText = await fetch('/contact.hbs').then(x => x.text());

    const allContactCardsText = await fetch('/contacts.hbs').then(x => x.text());

    const allContactsTemplate = Handlebars.compile(allContactCardsText);

    Handlebars.registerPartial('contact', contactCardText);

    document.body.insertAdjacentHTML(
        'beforeend',
        allContactsTemplate({ contacts })
    )

    document.addEventListener('click', (e) => {

        if (e.target.tagName === 'BUTTON') {
            let c = document.getElementById(e.target.dataset.id);
            c.style.display = c.style.display === 'none' ? 'block' : 'none';
        }
    })
}

main();