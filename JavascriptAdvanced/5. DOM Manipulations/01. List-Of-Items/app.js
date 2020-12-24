function addItem() {
    let itemsCollectionElement = document.getElementById('items')

    let inputBox = document.getElementById('newItemText')
    let inputText = inputBox.value

    let newLiElement = document.createElement('li')
    newLiElement.textContent = inputText
    itemsCollectionElement.appendChild(newLiElement)

    inputBox.value = ''
}