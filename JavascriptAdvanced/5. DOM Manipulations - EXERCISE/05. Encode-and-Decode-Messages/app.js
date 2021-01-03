function encodeAndDecodeMessages() {
    let mainDivElement = document.getElementById('main')

    let encodeButton = mainDivElement.children[0].lastElementChild
    let encodeTextElement = encodeButton.previousElementSibling

    let decodeButton = mainDivElement.children[1].lastElementChild
    let decodeTextElement = decodeButton.previousElementSibling

    encodeButton.addEventListener('click', () => {
        let text = encodeTextElement.value
        let output = ''

        for (let i = 0; i < text.length; i++) {
            let char = text[i]
            output += String.fromCharCode((char.charCodeAt(0)) + 1)
        }

        encodeTextElement.value = ''
        decodeTextElement.value = output
    })

    decodeButton.addEventListener('click', () => {
        let text = decodeTextElement.value
        let output = ''

        for (let i = 0; i < text.length; i++) {
            let char = text[i]
            output += String.fromCharCode((char.charCodeAt(0)) - 1)
        }

        decodeTextElement.value = output
    })
}