const Cambio = document.getElementById('otra')
const Cambiar = document.getElementById('otro')
const header = document.querySelector('.header')
const elH1 = document.querySelector('inicio')
const boton = document.getElementById('boton')

const change = () => {
    Cambio.classList.add('block')
    Cambio.classList.remove('nonen')
    Cambiar.classList.add('nonen')
    Cambiar.classList.remove('block')
}

const delet = () => {
    Cambio.classList.add('nonen')
    Cambio.classList.remove('block')
    Cambiar.classList.add('block')
    Cambiar.classList.remove('nonen')
}

const toggleMenu = () =>{
  const bar = boton.firstElementChild
  const close = boton.lastElementChild
  const narv = document.querySelector('.nav')
 
  bar.classList.toggle('nonen')
  close.classList.toggle('nonen')

  narv.classList.toggle('view')
   
}

header.addEventListener('click', (e) =>{
   if(e.target.tagName){
      change()
   }  
    if (e.target.textContent === "inicio") {  
        change()           
    } 
    if (e.target.textContent === "desc.proyect") {
        delet()
    }
    if(e.target.tagName === "BUTTON" || e.target.tagName === "svg" || e.target.tagName === "path"){
      toggleMenu()  
    }
});



const form = document.getElementById("recibe");
const alert = document.querySelector(".alert");
const inputName = form.name;
const inputEmail = form.email;
const inputArea = form.message;

const rexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const rexEmail =
/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const rexMessage = /^[\s\S]{5,255}$/;

const validar = (input, texto, expresion) => {
if (expresion.test(input.value)) {
input.classList.remove("error");
input.classList.add("success");
} else {
alert.classList.add("alertError");
alert.textContent = texto;

input.classList.remove("success");
input.classList.add("error");

setTimeout(() => {
alert.classList.remove("alertError");
alert.textContent = "";
}, 5000);
}
};

inputName.addEventListener("blur", () => {
validar(inputName, "este nombre es incorrecto", rexName);
});

inputEmail.addEventListener("blur", () => {
validar(inputEmail, "este email es incorrecto", rexEmail);
});

inputArea.addEventListener("blur", () => {
validar(inputArea, "este mensaje es incorrecto", rexMessage);
});

const send = () => {
fetch("https://formsubmit.co/ajax/Mcorporan536@gmail.com", {
method: "POST",
headers: {
"Content-Type": "application/json",
Accept: "application/json",
},
body: JSON.stringify({
name: inputName.value,
email: inputEmail.value,
message: inputArea.value,
}),
})
.then((response) => response.json())
.then((data) => {
inputName.classList.remove("success", "error");
inputEmail.classList.remove("success", "error");
inputArea.classList.remove("success", "error");
form.reset();
})
.catch((error) => console.log(error));
};

form.addEventListener("submit", (e) => {
e.preventDefault();
if (
rexName.test(inputName.value) &&
rexEmail.test(inputEmail.value) &&
rexMessage.test(inputArea.value)
) {
send();

}
});


