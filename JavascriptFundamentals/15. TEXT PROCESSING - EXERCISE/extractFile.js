function solve(input) {
    let lastIndex = input.lastIndexOf('\\')

    let file = input.substring(lastIndex + 1)
    let separatorIndex = file.lastIndexOf('.')

    let fileName = file.substring(0, separatorIndex)
    let extension = file.substring(separatorIndex + 1)

    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${extension}`)
}

solve('C:\\Internal\\training-internal\\Template.pptx')