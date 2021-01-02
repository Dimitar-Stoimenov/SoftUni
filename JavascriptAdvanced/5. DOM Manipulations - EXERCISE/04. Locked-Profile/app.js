function lockedProfile() {
    let btns = document.querySelectorAll('button')
    btns = Array.from(btns)

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let parentEl = btn.parentElement
            let unlock = parentEl.getElementsByTagName('input')[1]
            let hiddenDiv = parentEl.getElementsByTagName('div')[0]

            if (unlock.checked) {
                if (btn.textContent === 'Hide it') {
                    btn.textContent = 'Show more'
                    hiddenDiv.style.display = 'none'
                } else {
                    btn.textContent = 'Hide it'
                    hiddenDiv.style.display = 'block'
                }
            }
        })
    })
}