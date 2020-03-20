$(() => {

    const src = document.getElementById('monkey-template').innerHTML;

    const monkeyTemplate = Handlebars.compile(src);

    const monkeyContainer = document.getElementsByClassName('monkeys')[0];

    monkeyContainer.innerHTML = monkeys.map(x => monkeyTemplate(x)).join('');

    document.addEventListener('click', (e) => {

        if (e.target.tagName === 'BUTTON') {

            let monkeyInfo = document.getElementById(e.target.dataset.id);

            monkeyInfo.style.display = monkeyInfo.style.display === 'none' ? 'block' : 'none';
        }
    });
})