const crtBtn = document.getElementById("crtBtn")
const copyBtn = document.getElementById("copyBtn")
const textGen = document.getElementById("textGen")
const delta = "0123456789abcdefghijklmnopqrstuvwxyz!?-+@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"

crtBtn.addEventListener("click", genPassword)
copyBtn.addEventListener("click", genCopy)

function genPassword(e){
   let password = ""
   const passwordLength = 20
   for(let i = 0; i < passwordLength; i++){
      password += delta[Math.floor(Math.random()*delta.length)]
   }
   textGen.innerHTML = password
}

function genCopy(){
   if(textGen.innerHTML == ` Click "Create" `){
      alert(`At first create password`)
   }
   else{
      navigator.clipboard.writeText(textGen.innerHTML)
   }
}