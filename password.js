const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
//getting the elements from html
const btn = document.getElementById("passid")
let passwaord1 = document.querySelector(".container1")
let passwaord2 = document.querySelector(".container2")


function generateRandom(){
  let random1, random2
  let cumulative1 =""
  let cumulative2 =""

  for(let i =0;i<15;i++){
  random1= characters[Math.floor(Math.random()*characters.length)]

  random2 = characters[Math.floor(Math.random()*characters.length)]
    // cumulative+=random1
    cumulative1+=random1
    cumulative2+=random2
    
  }
    // console.log(cumulative)
    
return [cumulative1,cumulative2]
}


btn.addEventListener("click",function(){

    let [passwordUno,passwordDos] = generateRandom()
    passwaord1.textContent =passwordUno
    passwaord2.textContent =passwordDos
})

