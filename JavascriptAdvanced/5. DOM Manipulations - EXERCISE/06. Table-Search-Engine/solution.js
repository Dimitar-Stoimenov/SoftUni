function solve() {
   let searchBtn = document.getElementById('searchBtn')
   let searchTextElement = document.getElementById('searchField')

   searchBtn.addEventListener('click', search)

   function search() {

      Array.from(document.querySelectorAll('tbody tr')).forEach(row => {
         row.classList.remove('select')

         if (row.textContent.includes(searchTextElement.value)) {
            row.classList.add('select')
         }
      })

      searchTextElement.value = ''
   }
}