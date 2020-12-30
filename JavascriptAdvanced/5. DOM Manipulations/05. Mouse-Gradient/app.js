function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let result = document.getElementById('result')

    gradientElement.addEventListener('mousemove', function (e) {
        let width = e.currentTarget.offsetWidth
        let percentageOfGradience = Math.floor(e.offsetX / width * 100)
        result.textContent = percentageOfGradience + '%'
    })
}