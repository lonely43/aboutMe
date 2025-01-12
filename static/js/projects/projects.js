//filter 
{
   let selected = []
   let filters = document.querySelectorAll("main .search ul li input")
   let cards = document.querySelectorAll(".projects .card")

   filters.forEach(el => {
      el.addEventListener('click', () => {
         if(selected.indexOf(el.value) < 0)
            selected.push(el.value)
         else{
            selected.splice(selected.indexOf(el.value),1)
         }

         showCards(selected)
      }, false)
   })

   function showCards(selected){
      let filteredCards = []

      if(selected.length == 0){
         filteredCards = cards
      }
      else{
         cards.forEach((el, index) => {
            let marks = el.getAttribute("marks").split(" ")

            if(isLegit(marks, selected)){
               if(filteredCards.indexOf(el) < 0){
                  filteredCards.push(el)
               }
            }
            else{
               if(filteredCards.indexOf(el) >= 0){
                  filteredCards.splice(selected.indexOf(index),1)
               }
            }
         })
      }

      document.querySelector(".projects").innerHTML = `` // clear section

      // in null case
      if(filteredCards.length <= 0){
         document.querySelector(".projects").innerHTML= `<h1 style="font-weight:400;text-align:center;">there's nothing here :(</h1>`
      }
      else{
         filteredCards.forEach(el => {
            document.querySelector(".projects").appendChild(el)
         })
      }
   }

   function isLegit(marks, selected){
      for(i = 0; i < selected.length; i++){
         if(!(marks.includes(selected[i]))){
            return false
         }
      }
      return true
   }
}
