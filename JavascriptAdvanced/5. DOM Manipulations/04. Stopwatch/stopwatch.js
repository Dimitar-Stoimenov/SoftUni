function stopwatch() {
    let timerElement = document.getElementById('time');

    let startBtnElement = document.getElementById('startBtn');
    let stopBtnElement = document.getElementById('stopBtn');
    let interval;
    //тук сет-вам променливата предварително, за да може да се използва извън скоупа на старт бутона

    startBtnElement.addEventListener('click', function (e) {
        timerElement.textContent = '00:00';
        //тук зануляваме таймера, само веднъж - това не е в сетИнтервал функцията;
        startBtnElement.setAttribute('disabled', true);
        //тук може и с e.currentTarget.setAttribute('disabled', true)
        stopBtnElement.removeAttribute('disabled');

        interval = setInterval(function () {
            let currentTime = timerElement.textContent;
            let timeArray = currentTime.split(':');
            minutes = Number(timeArray[0]);
            seconds = Number(timeArray[1]);-

            seconds++;

            if (seconds > 59) {
                seconds = '00';
                minutes++;
            } else if (seconds < 10) {
                seconds = '0' + seconds;
            }

            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            // вместо това, можеше да използвам .padStart(2, '0') - долу в output-a; падстарт работи върху стринг:
            // timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

            timerElement.textContent = `${minutes}:${seconds}`;
        }, 1000)

    });

    stopBtnElement.addEventListener('click', function (e) {
        stopBtnElement.setAttribute('disabled', true);
        startBtnElement.removeAttribute('disabled')

        clearInterval(interval)
    });
}