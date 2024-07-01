const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
      if(entry.isIntersecting){
         entry.target.classList.add("fadeIn")
      }else{
         entry.target.classList.remove("fadeIn")
      }
   });
 });

const els = document.querySelectorAll(".fadeOut")
els.forEach(el => {
   observer.observe(el)
})