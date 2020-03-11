function solve() {

    let stopID = 'depot';
    let stopName = null;

    const restURL = `https://judgetests.firebaseio.com/schedule/`;

    const endOfURI = '.json';

    function depart() {

        const info = document.getElementsByClassName('info')[0];

        fetch(`${restURL}${stopID}${endOfURI}`)
            .then(res => res.json())
            .then(data => {
                stopName = data['name'];
                info.textContent = `Next stop ${stopName}`;
                stopID = data['next'];
            })

        const departBtn = document.getElementById('depart');
        departBtn.disabled = true
        const arriveBtn = document.getElementById('arrive');
        arriveBtn.disabled = false;
    }

    function arrive() {

        const info = document.getElementsByClassName('info')[0];

        info.textContent = `Arriving at ${stopName}`;

        fetch(`${restURL}${stopID}${endOfURI}`)
            .then(res => res.json())
            .then(data => {
                stopName = data['name'];
                stopID = data['next'];
            })

        const arriveBtn = document.getElementById('arrive');
        arriveBtn.disabled = true;
        const departBtn = document.getElementById('depart');
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();