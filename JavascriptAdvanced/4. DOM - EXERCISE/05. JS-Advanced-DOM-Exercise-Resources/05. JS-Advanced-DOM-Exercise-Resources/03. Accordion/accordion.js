function toggle() {
    let toggler = document.getElementsByClassName('button')[0]
    let accordionElement = document.getElementById('extra')

    if (toggler.textContent === 'More') {
        toggler.textContent = 'Less'
        accordionElement.style.display = 'block'
    } else {
        toggler.textContent = 'More'
        accordionElement.style.display = 'none'
    }
}