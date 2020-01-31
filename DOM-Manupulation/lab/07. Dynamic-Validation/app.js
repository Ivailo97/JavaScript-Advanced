function validate() {

    let emailInput = document.getElementById('email');

    emailInput.addEventListener('change', function() {

        let pattern = /[a-z]+@[a-z]+\.[a-z]+/gi

        if (emailInput.value && !emailInput.value.match(pattern)) {
            emailInput.classList.add('error')
        } else {
            emailInput.classList.remove('error')
        }
    })
}