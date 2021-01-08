function solve() {
    let dropdownBtn = document.getElementById('dropdown')
    let dropdownElement = document.getElementById('dropdown-ul')
    let resultBox = document.getElementById('box')

    dropdownBtn.addEventListener('click', (e) => {
        if (dropdownElement.style.display == 'block') {
            dropdownElement.style.display = 'none'
            resultBox.style.color = 'white'
            resultBox.style.backgroundColor = 'black'
        } else {
            dropdownElement.style.display = 'block'
        }
    })

    Array.from(dropdownElement.children).forEach(box => {
        box.addEventListener('click', (e) => {
            let rgb = e.currentTarget.textContent
            changeBackgroundOfBox.call(resultBox, rgb)
        })
    })

    function changeBackgroundOfBox(rgb) {
        this.style.backgroundColor = rgb
        this.style.color = 'black'
    }
}