let mar = document.querySelector("#Marlen")
let osiel = document.querySelector("#Osiel")


let cooks = document.querySelector("#Pirillo")
let luna = document.querySelector("#Modorri")
let reply = document.querySelector("#answer")
let puppies = document.querySelector("#puppies")

let questionBirthday = document.querySelector("#birthdayInput")
let reply2 = document.querySelector("#answer2")


let cachode = document.querySelector("#Cachode")
let nonobe = document.querySelector("#Nonobe")
let modorri = document.querySelector("#Modorrii")
let papiro = document.querySelector("#Papiro")
let reply3 = document.querySelector("#answer3")


if (document.title === "Formulario del Amor ❣") {
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



   setInterval(() => {

   }, 1000)



   setInterval(() => {
      if(cachode.checked === true) {
         nonobe.disabled = true;
         modorri.disabled = true;
         papiro.disabled = true;
         reply3.innerText = "Respuesta equivocada 🥀";

      } else if(nonobe.checked === true) {
         modorri.disabled = true;
         papiro.disabled = true;
         cachode.disabled = true;
         reply3.innerText = "Respuesta equivocada 🥀";
         
      } else if(modorri.checked === true) {
         nonobe.disabled = true;
         papiro.disabled = true;
         cachode.disabled = true;
         reply3.innerText = "Respuesta equivocada 🥀";
         
      } else if(papiro.checked === true) {
         nonobe.disabled = true;
         modorri.disabled = true;
         cachode.disabled = true;
         reply3.innerText = "Respuesta correcta 🥨, este es un apodo del pirillo 🐶";

      } else if(  cachode.checked !== true && 
                  nonobe.checked !== true &&
                  modorri.checked !== true && 
                  papiro.checked !== true ) {
         nonobe.disabled = false;
         modorri.disabled = false;
         cachode.disabled = false;
         papiro.disabled = false;
         reply3.innerText = "Elige una respuesta 💋";

         }

   }, 1000)


   setInterval(() => {
      if(mar.checked === true && questionBirthday.value === "2001-02-14") {
         reply2.innerText = "Acertaste con el cumpleaños del Osielillo 🎈"

      } else if (mar.checked === true && questionBirthday.value === "") {
         reply2.innerText = "Respuesta incorrecta 😌"

      } else if(osiel.checked === true && questionBirthday.value === "1997-09-05") {
         reply2.innerText = "Acertaste con el cumpleaños de la Mar 🎊"

      } else if (osiel.checked === true && questionBirthday.value === "") {
         reply2.innerText = "Respuesta incorrecta 😌"

      } else if(osiel.checked === true && mar.checked === true && questionBirthday.value.slice(0,7).includes("08")) {
         reply2.innerText = "Acertaste con el cumpleaños de la Nena 🎉🍖"

      } else if ( osiel.checked === true && mar.checked === true && !questionBirthday.value.slice(0,7).includes("08")) {
         reply2.innerText = "Respuesta incorrecta 😌"

      } else {
         reply2.innerText = "Esperando respuesta 🧐"

      }

   }, 1000)

};









