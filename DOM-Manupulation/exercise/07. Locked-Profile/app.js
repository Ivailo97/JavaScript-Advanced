function lockedProfile() {

    let showButtons = document.getElementsByTagName('button');

    [...showButtons].forEach(x => {

        x.addEventListener('click', function(e) {

            let parent = e.target.parentNode;

            let hiddenDiv = parent.getElementsByTagName('div')[0];

            let isUnlockedInput = parent.getElementsByTagName('input')[1];

            if (isUnlockedInput.checked) {

                if (e.target.textContent === 'Show more') {

                    hiddenDiv.style.display = 'block';
                    e.target.textContent = 'Hide it';

                } else {

                    hiddenDiv.style.display = 'none';
                    e.target.textContent = 'Show more'
                }
            }
        })
    })
}