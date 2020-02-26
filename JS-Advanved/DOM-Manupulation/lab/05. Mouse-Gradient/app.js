function attachGradientEvents() {

    let gradient = document.getElementById('gradient')
    let resultDiv = document.getElementById('result')

    function calculatePercent(clickedWidth) {
        return Math.floor((clickedWidth / gradient.clientWidth) * 100)
    }

    function formatResult(result) {
        return `${result}%`
    }

    gradient.addEventListener('mousemove', function(e) {
        resultDiv.innerHTML = formatResult(calculatePercent(e.offsetX))
    })
}