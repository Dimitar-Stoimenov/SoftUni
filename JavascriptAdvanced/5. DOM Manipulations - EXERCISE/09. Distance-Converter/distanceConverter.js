function attachEventsListeners() {
    let btn = document.getElementById('convert')
    let inputElement = document.getElementById('inputDistance')
    let outputElement = document.getElementById('outputDistance')

    let inputUnits = document.getElementById('inputUnits')
    let outputUnits = document.getElementById('outputUnits')

    btn.addEventListener('click', (e) => {
        let inputNumber = Number(inputElement.value)
        let convertedToMeters = 0
        let result = 0

        switch (inputUnits.value) {
            case 'km':
                convertedToMeters = inputNumber * 1000
                break;
            case 'm':
                convertedToMeters = inputNumber
                break;
            case 'cm':
                convertedToMeters = inputNumber / 100
                break;
            case 'mm':
                convertedToMeters = inputNumber / 1000
                break;
            case 'mi':
                convertedToMeters = inputNumber * 1609.34
                break;
            case 'yrd':
                convertedToMeters = inputNumber * .9144
                break;
            case 'ft':
                convertedToMeters = inputNumber * .3048
                break;
            case 'in':
                convertedToMeters = inputNumber * .0254
                break;
        }

        switch (outputUnits.value) {
            case 'km':
                result = convertedToMeters / 1000
                break;
            case 'm':
                result = convertedToMeters
                break;
            case 'cm':
                result = convertedToMeters * 100
                break;
            case 'mm':
                result = convertedToMeters * 1000
                break;
            case 'mi':
                result = convertedToMeters / 1609.34
                break;
            case 'yrd':
                result = convertedToMeters / .9144
                break;
            case 'ft':
                result = convertedToMeters / .3048
                break;
            case 'in':
                result = convertedToMeters / .0254
                break;
        }

        outputElement.value = result
    })
}