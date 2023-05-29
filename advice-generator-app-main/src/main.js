const url = "https://api.adviceslip.com/advice";
const btn = document.getElementById("btn");
const titulo = document.getElementById("titulo");
const consejo = document.getElementById("consejo");



document.addEventListener('DOMContentLoaded',textoDeCarga);
btn.addEventListener('click',generador);

let data;
async function apiGenerador() {
  try {
    const res = await fetch(url);
    data = await res.json();
  } catch (error) {
    console.log(error);
  }
  
}

function textoDeCarga() {
  const textInicio = document.createTextNode('Presiona el boton verde para obtener un consejo');
  consejo.appendChild(textInicio);
}


async function generador() {
  await apiGenerador()
  titulo.innerHTML = `advice #${data?.slip?.id ?? ""}`
  consejo.innerHTML = `"${data?.slip?.advice ?? ""}"`;
}








































