function solve() {
   let rowElements = document.querySelectorAll('tbody tr')
   Array.from(rowElements).forEach(row => {
      row.addEventListener('click', (e) => {

         rowElements.forEach(x => {
            if (x === e.currentTarget) {
               if (!e.currentTarget.style.backgroundColor) {
                  e.currentTarget.style.backgroundColor = '#413f5e'
               } else {
                  e.currentTarget.style.backgroundColor = ''
               }
            } else {
               x.style.backgroundColor = ''
            }
         })
      })
   })
}
