function attachEventsListeners() {

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    daysBtn.addEventListener('click', function() {
        hoursInput.value = daysInput.value * 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = minutesInput.value * 60;
    })

    hoursBtn.addEventListener('click', function() {
        daysInput.value = hoursInput.value / 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = hoursInput.value * 3600;
    })

    minutesBtn.addEventListener('click', function() {
        daysInput.value = minutesInput.value / 1440;
        hoursInput.value = minutesInput.value / 60;
        secondsInput.value = minutesInput.value * 60;
    })

    secondsBtn.addEventListener('click', function() {
        daysInput.value = secondsInput.value / 86400;
        hoursInput.value = secondsInput.value / 3600;
        minutesInput.value = secondsInput.value / 60;
    })
}