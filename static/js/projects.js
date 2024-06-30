let selected = ["vanilla", "sass", "react", "angular", "vue"]
let filters = document.querySelectorAll("main .search ul li input")
let cards = document.querySelectorAll(".projects .card")

filters.forEach(el => {
   el.checked = true
   el.addEventListener('click', () => {
      if(selected.indexOf(el.value) < 0)
         selected.push(el.value)
      else{
         selected.splice(selected.indexOf(el.value),1)
      }

      showCards(selected)
   }, false)
})

function showCards(array){
   let filteredCards = []

   cards.forEach(el => {
      array.forEach(arrEl => {
         if(el.getAttribute("marks").split(" ").indexOf(arrEl) >= 0){
            filteredCards.push(el)
         }
      })
   })

   document.querySelector(".projects").innerHTML = ``

   if(filteredCards.length <= 0){
      document.querySelector(".projects").innerHTML= `<h1 style="font-weight:400;text-align:center;">there's nothing here :(</h1>`
   }
   else{
      filteredCards.forEach(el => {
         document.querySelector(".projects").appendChild(el)
      })
   }
}