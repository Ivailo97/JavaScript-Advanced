(() => {
    renderCatTemplate();

    attachEvents();

    async function renderCatTemplate() {

        const catText = await fetch('catCard.hbs').then(x => x.text());

        Handlebars.registerPartial('cat', catText);

        const allCatsText = await fetch('catCards.hbs').then(x => x.text());

        const allCatsTemplate = Handlebars.compile(allCatsText);

        document.getElementById('allCats').innerHTML = allCatsTemplate({ cats });
    }

    function attachEvents() {

        document.addEventListener('click', (e) => {

            if (e.target.tagName === 'BUTTON') {

                e.target.textContent = e.target.textContent === 'Show status code' ? 'Hide status code' : 'Show status code';

                let details = document.getElementById(e.target.dataset.id);

                details.style.display = details.style.display === 'none' ? 'block' : 'none';
            }
        });
    }
})();