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
        convert(daysElement.value * 86400);
    });
    hoursBtn.addEventListener('click', () => {
        convert(hoursElement.value * 60 * 60);
    });
    minutesBtn.addEventListener('click', () => {
        convert(minutesElement.value * 60);
    });
    secondsBtn.addEventListener('click', () => {
        convert(secondsElement.value);
    });

    function convert(sec) {
        daysElement.value = sec / (60 * 60 * 24);
        hoursElement.value = sec / (60 * 60);
        minutesElement.value = sec / 60;
        secondsElement.value = sec;
    };
}