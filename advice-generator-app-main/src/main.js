const url = "https://api.adviceslip.com/advice";
const btn = document.getElementById("btn");
const titulo = document.getElementById("titulo");
const consejo = document.getElementById("consejo");



window.addEventListener('DOMContentLoaded',()=>{
  const textInicio = document.createTextNode('Presiona el boton verde para obtener un consejo');
  consejo.appendChild(textInicio);
  consejo.style.textTransform = 'uppercase';
  consejo.style.fontSize = '20px'
})


btn.addEventListener('click',generador)
async function generador() {
  const res = await fetch(url);
  const data = await res.json();

  consejo.innerHTML = "";

  titulo.innerHTML = `advice #${data.slip.id}`
  consejo.innerHTML = `"${data.slip.advice}"`;
}










































