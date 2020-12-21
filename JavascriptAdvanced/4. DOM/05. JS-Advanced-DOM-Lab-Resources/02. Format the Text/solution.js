function solve() {
    let text = document.getElementById('input').innerText
    let sentences = text.split('.').filter(x => x !== '')

    let paragraphs = []
    let counter = 0

    for (let i = 0; i < sentences.length; i += 3) {
        paragraphs[counter] = []
        paragraphs[counter].push(sentences[i])

        if (i + 1) {
            paragraphs[counter].push(sentences[i + 1])
        }

        if (i + 2) {
            paragraphs[counter].push(sentences[i + 2])
        }

        counter++
    }

    for (const array of paragraphs) {
        let paragraph = document.createElement('p')
        paragraph.innerText = array.join('.') + '.'
        let output = document.getElementById("output")
        output.appendChild(paragraph)
    }
}