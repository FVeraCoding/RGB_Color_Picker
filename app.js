const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.textContent = rojo;
textoVerde.textContent = verde;
textoAzul.textContent = azul;

inputRojo.addEventListener("input", (e) =>{
    rojo = e.target.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul);
})

inputVerde.addEventListener("input", (e) => {
    verde = e.target.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul);
})

inputAzul.addEventListener("input", (e)=>{
    azul = e.target.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul);
})

function actualizarColor(rojo, verde, azul){
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}