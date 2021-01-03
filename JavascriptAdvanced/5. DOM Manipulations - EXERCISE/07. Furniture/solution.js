function solve() {
    let generateBtn = document.querySelectorAll('button')[0]
    let generateTextAreaElement = document.querySelectorAll('textarea')[0]
    let buyBtn = document.querySelectorAll('button')[1]
    let tbodyElement = document.querySelector('tbody')
    let resultTextAreaElement = document.querySelectorAll('textarea')[1]

    generateBtn.addEventListener('click', () => {
        let collection = JSON.parse(generateTextAreaElement.value)

        for (const obj of collection) {
            let newTr = document.createElement('tr')

            let htmlTd = document.createElement('td')
            let img = document.createElement('img')
            img.src = obj.img
            htmlTd.appendChild(img)
            newTr.appendChild(htmlTd)

            let nameTd = document.createElement('td')
            let nameP = document.createElement('p')
            nameP.textContent = obj.name
            nameTd.appendChild(nameP)
            newTr.appendChild(nameTd)

            let priceTd = document.createElement('td')
            let priceP = document.createElement('p')
            priceP.textContent = obj.price
            priceTd.appendChild(priceP)
            newTr.appendChild(priceTd)

            let decFactor = document.createElement('td')
            let decP = document.createElement('p')
            decP.textContent = obj.decFactor
            decFactor.appendChild(decP)
            newTr.appendChild(decFactor)

            let markTd = document.createElement('td')
            let markInputEl = document.createElement('input')
            markInputEl.type = 'checkbox'
            markTd.appendChild(markInputEl)
            newTr.appendChild(markTd)

            tbodyElement.appendChild(newTr)
        }
    })

    buyBtn.addEventListener('click', () => {
        let furnitureNameArray = []
        let price = 0
        let furnitureCounter = 0
        let totalDecFactor = 0

        Array.from(document.querySelectorAll('tbody tr')).forEach(row => {
            if (row.lastElementChild.firstElementChild.checked) {
                let furniturePropertiesArray = row.querySelectorAll('td')
                furnitureNameArray.push(furniturePropertiesArray[1].firstElementChild.textContent)
                price += Number(furniturePropertiesArray[2].firstElementChild.textContent)
                furnitureCounter++
                totalDecFactor += Number(furniturePropertiesArray[3].firstElementChild.textContent)
            }
        })

        let avgDecFactor = totalDecFactor / furnitureCounter

        let result = `Bought furniture: ${furnitureNameArray.join(', ')}\nTotal price: ${price.toFixed(2)}\nAverage decoration factor: ${avgDecFactor}`

        resultTextAreaElement.textContent = result
    })
}