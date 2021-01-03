function solve() {
   let firstPlayerCardsCollection = document.getElementById('player1Div')
   let secondPlayerCardsCollection = document.getElementById('player2Div')
   let resultDivElement = document.getElementById('result')
   let firstPlayerResultElement = resultDivElement.firstElementChild
   let secondPlayerResultElement = resultDivElement.lastElementChild
   let firstTarget = null
   let secondTarget = null
   let historyElement = document.getElementById('history')

   let firstHandler = function (e) {
      if (!(e.target.src = "images/whiteCard.jpg")) {

         e.target.src = "images/whiteCard.jpg"
      }

      firstPlayerResultElement.textContent = e.target.name
      e.target.removeEventListener('click', firstHandler)
      firstTarget = e.target
      checkIfHandIsOver()
   }

   let secondHandler = function (e) {
      if (!(e.target.src = "images/whiteCard.jpg")) {

         e.target.src = "images/whiteCard.jpg"
      }

      secondPlayerResultElement.textContent = e.target.name
      e.target.removeEventListener('click', secondHandler)
      secondTarget = e.target
      checkIfHandIsOver()
   }

   Array.from(firstPlayerCardsCollection.children).forEach(card => {
      card.addEventListener('click', firstHandler)
   })

   Array.from(secondPlayerCardsCollection.children).forEach(card => {
      card.addEventListener('click', secondHandler)
   })

   function checkIfHandIsOver() {
      if (firstPlayerResultElement.textContent != '' && secondPlayerResultElement.textContent != '') {
         if (Number(firstPlayerResultElement.textContent) > Number(secondPlayerResultElement.textContent)) {
            firstTarget.style.border = '2px solid green'
            secondTarget.style.border = '2px solid red'
         } else {
            firstTarget.style.border = '2px solid red'
            secondTarget.style.border = '2px solid green'
         }

         firstTarget = null
         secondTarget = null

         historyElement.textContent += `[${firstPlayerResultElement.textContent} vs ${secondPlayerResultElement.textContent}] `
         historyElement.textContent.trimEnd()

         firstPlayerResultElement.textContent = ''
         secondPlayerResultElement.textContent = ''
      }
   }
}