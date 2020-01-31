function stopwatch() {

    let startBtn = document.getElementById('startBtn')
    let stopBtn = document.getElementById('stopBtn')
    let timeDiv = document.getElementById('time')

    let timeoutID;

    function increaseTime() {

        let [minutesFirstPart, minutesLastPart, secondsFirstPart, secondsLastPart] = timeDiv.textContent.split(':').join('');

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
        timeoutID = setTimeout(increaseTime, 1000)
    }

    function startHandler() {
        timeDiv.textContent = '00:00'
        timeoutID = setTimeout(increaseTime, 1000)
        startBtn.setAttribute('disabled', true)
        stopBtn.removeAttribute('disabled')
    }

    function stopHandler() {
        clearTimeout(timeoutID)
        startBtn.removeAttribute('disabled')
        stopBtn.setAttribute('disabled', true)
    }

    startBtn.addEventListener('click', startHandler)
    stopBtn.addEventListener('click', stopHandler)
}