function stopwatch() {

    let startBtn = document.getElementById('startBtn')
    let stopBtn = document.getElementById('stopBtn')
    let timeDiv = document.getElementById('time')

    let secondsLastPart;
    let secondsFirstPart;
    let minutesLastPart;
    let minutesFirstPart;

    let timeout;

    function increaseTime() {

        secondsLastPart++;

        if (secondsLastPart === 10) {
            secondsLastPart = 0;
            secondsFirstPart++;

            if (secondsFirstPart === 6) {
                secondsFirstPart = 0;
                minutesLastPart++;

                if (minutesLastPart === 10) {
                    minutesLastPart = 0;
                    minutesFirstPart++;
                }
            }
        }

        timeDiv.innerHTML = `${minutesFirstPart}${minutesLastPart}:${secondsFirstPart}${secondsLastPart}`
        timeout = setTimeout(increaseTime, 1000)
    }

    function startHandler() {
        minutesFirstPart = 0;
        minutesLastPart = 0;
        secondsFirstPart = 0;
        secondsLastPart = 0;
        timeDiv.innerHTML = '00:00'
        timeout = setTimeout(increaseTime, 1000)
        startBtn.setAttribute('disabled', true)
        stopBtn.removeAttribute('disabled')
    }

    function stopHandler() {
        clearTimeout(timeout)
        startBtn.removeAttribute('disabled')
        stopBtn.setAttribute('disabled', true)
    }

    startBtn.addEventListener('click', startHandler)
    stopBtn.addEventListener('click', stopHandler)
}