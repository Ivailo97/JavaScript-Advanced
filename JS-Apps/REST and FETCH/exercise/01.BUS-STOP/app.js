function getInfo() {

    const stopId = document.getElementById('stopId');
    const url = `https://judgetests.firebaseio.com/businfo/${stopId.value}.json`

    const nameDiv = document.getElementById('stopName');
    const busesList = document.getElementById('buses');

    busesList.innerHTML = "";
    stopId.value = "";
    nameDiv.textContent = "";

    function formatBus(id, time) {
        let li = document.createElement('li');
        li.textContent = `Bus ${id} arrives in ${time} minutes`
        return li;
    }

    fetch(url)
        .then(res => res.json())
        .then(data => {
            nameDiv.textContent = data.name;
            Object.keys(data.buses).map(formatBus).forEach(x => busesList.appendChild(x));
        }).catch(err => {
            console.log(err);
            nameDiv.textContent = "Error"
        });
}