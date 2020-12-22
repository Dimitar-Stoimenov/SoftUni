function addItem() {
    let textElementValue = document.getElementById('newItemText').value
    let valueElementValue = document.getElementById('newItemValue').value

    let newElement = document.createElement('option')
    newElement.textContent = textElementValue
    newElement.value = valueElementValue

    let parentElement = document.getElementById('menu')
    parentElement.appendChild(newElement)

    document.getElementById('newItemText').value = ''
    document.getElementById('newItemValue').value = ''
}