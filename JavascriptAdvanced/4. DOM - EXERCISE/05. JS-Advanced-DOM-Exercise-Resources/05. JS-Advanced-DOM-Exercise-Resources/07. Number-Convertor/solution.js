function solve() {
    let numberBox = document.getElementById('input')
    let btn = document.getElementById('container').lastElementChild
    btn.addEventListener('click', convert)
    let selectMenu = document.getElementById('selectMenuTo')

    let binaryOption = document.createElement('option')
    binaryOption.value = 'binary'
    binaryOption.textContent = 'Binary'
    selectMenu.appendChild(binaryOption)

    let hexadecimal = document.createElement('option')
    hexadecimal.value = 'hexadecimal'
    hexadecimal.textContent = 'Hexadecimal'
    selectMenu.appendChild(hexadecimal)

    let resultBox = document.getElementById('result')

    function convert() {
        let numberToBeConverted = numberBox.value

        switch (selectMenu.value) {
            case 'binary':
                resultBox.value = binaryConvertion(numberToBeConverted)
                break;
            case 'hexadecimal':
                resultBox.value = hexadecimalConvertion(numberToBeConverted)
                break;
        }
    }

    function binaryConvertion(number) {
        let result = Number(number).toString(2)
        return result
    }

    function hexadecimalConvertion(number) {
        let result = Number(number).toString(16).toUpperCase()
        return result
    }
}