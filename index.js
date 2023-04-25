let mar = document.querySelector("#Marlen")
let osiel = document.querySelector("#Osiel")
let cooks = document.querySelector("#Pirillo")
let luna = document.querySelector("#Modorri")
let reply = document.querySelector("#answer")
let puppies = document.querySelector("#puppies")


if (document.title === "Formulario del Amor") {
   setInterval(() => {
      if (mar.checked === true && osiel.checked === true) {
         return document.querySelector("h3").innerText = `Hola ${osiel.value} y ${mar.value}`;
      } else if (osiel.checked === true) {
         return document.querySelector("h3").innerText = `Hola ${osiel.value}`;
      } else if (mar.checked === true) {
         return document.querySelector("h3").innerText = `Hola ${mar.value}`
      } else if (mar.checked !== true && osiel.checked !== true) {
         return document.querySelector("h3").innerText = `Holis quien sea..`
      }
   }, 1000)

   setInterval(() => {
      if(mar.checked === true && osiel.checked === true){
         return document.querySelector("#birthday").innerText = `¿Cuando cumpleaños la nena?`
      } else if(osiel.checked === true){
         return document.querySelector("#birthday").innerText = `¿Cuando cumpleaños la ${mar.value}?`
      } else if(mar.checked === true){
         return document.querySelector("#birthday").innerText = `¿Cuando cumpleaños el ${osiel.value}?`
      } else if (mar.checked !== true && osiel.checked !== true) {
         return document.querySelector("#birthday").innerText = `¿Cuando es su aniversario?`
      }
   }, 1000)


   setInterval(() => {
      if(cooks.checked === true){
         luna.disabled = true;
         reply.innerText = `Hay!!! Que culero con la ${luna.value}`
         puppies.setAttribute("src", "./imgs/nonobe.jpg")
      } else if(luna.checked === true){
         cooks.disabled = true;
         reply.innerText = `Hay!!! Que culero con el ${cooks.value}`
         puppies.setAttribute("src", "./imgs/pirillo.jpg")
      } else if(cooks.checked !== true && luna.checked !== true){
         cooks.disabled = false
         luna.disabled = false
         reply.innerText = `Escoge un cachorro`
         puppies.setAttribute("src", "./imgs/cachorros.jpg")
      }
   }, 1000)

};










