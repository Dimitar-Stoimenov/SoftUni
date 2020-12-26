function addItem() {
    let itemsCollectionElement = document.getElementById('items')

    let inputBox = document.getElementById('newText')
    let inputText = inputBox.value

    let newLiElement = document.createElement('li')
    newLiElement.textContent = inputText

    if (newLiElement.textContent !== '') {
        let deleteElement = document.createElement('span')
        deleteElement.textContent = ' [Delete]'
        deleteElement.classList.add('delete')
        deleteElement.style.cursor = 'pointer'
        deleteElement.style.color = 'red'

        newLiElement.appendChild(deleteElement)

        deleteElement.addEventListener('click', function (e) {
            let parent = e.target.parentElement

            parent.remove()
        })

        itemsCollectionElement.appendChild(newLiElement)

        inputBox.value = ''
    }
}