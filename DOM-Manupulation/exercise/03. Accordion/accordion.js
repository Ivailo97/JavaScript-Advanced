function toggle() {

    let button = document.getElementsByClassName('button')[0];

    button.textContent = button.textContent === 'More' ? 'Less' : 'More'

    let extra = document.getElementById('extra');

    extra.style.display = extra.style.display === 'block' ? 'none' : 'block'
}