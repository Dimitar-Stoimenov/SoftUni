function attachEventsListeners() {
    let daysElement = document.getElementById('days');
    let daysBtn = document.getElementById('daysBtn');
    let hoursElement = document.getElementById('hours');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesElement = document.getElementById('minutes');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsElement = document.getElementById('seconds');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', () => {
        let value = daysElement.value;
        hoursElement.value = value * 24;
        minutesElement.value = value * 1440;
        secondsElement.value = value * 86400;
    })

    hoursBtn.addEventListener('click', () => {
        let value = hoursElement.value;
        daysElement.value = value / 24;
        minutesElement.value = daysElement.value * 1440;
        secondsElement.value = daysElement.value * 86400;
    })

    minutesBtn.addEventListener('click', () => {
        let value = minutesElement.value;
        daysElement.value = value / 24 / 60;
        hoursElement.value = value / 60;
        secondsElement.value = value * 60;
    })

    secondsBtn.addEventListener('click', () => {
        let value = secondsElement.value;
        daysElement.value = value / 24 / 60 / 60;
        hoursElement.value = value / 60 / 60;
        minutesElement.value = value / 60;
    })
}