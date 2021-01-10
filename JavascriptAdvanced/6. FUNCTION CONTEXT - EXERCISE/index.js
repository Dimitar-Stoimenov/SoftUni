function solve() {
   let rowElements = document.querySelectorAll('tbody tr')
   let lastClicked = null

   Array.from(rowElements).forEach(row => {
      row.addEventListener('click', (e) => {

         if (!e.currentTarget.style.backgroundColor) {
            e.currentTarget.style.backgroundColor = '#413f5e'

            if (lastClicked) {
               lastClicked.style.backgroundColor = ''
            }
            
            lastClicked = e.currentTarget
         } else {
            e.currentTarget.style.backgroundColor = ''
            lastClicked = null
         }
      })
   })
};