function focus() {

    let allInputElements = document.getElementsByTagName('input')

    Array.from(allInputElements).forEach(x => {

        x.addEventListener('focus', function(e) {
            e.target.parentNode.classList.add('focused')
        });

        x.addEventListener('blur', function(e) {
            e.target.parentNode.classList.remove('focused')
        })
    })
}