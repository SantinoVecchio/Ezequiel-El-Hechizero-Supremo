//asignamos las constantes a las diferentes id
const button = document.getElementById("boton")
const span = document.getElementById("texto")
const input = document.getElementById("buscador")
// como interactuar con los diferentes elemento
// span.innerText = "Papanatas"
// eventos relacionados a los elementos 
// button.onclick = () => {
//     span.innerText = "Papanatas" }
button.onclick = function () {
    span.classList.toggle ("rojo")
    span.innerText = "Papanatas"
}
// SE PUEDE ESCRIBIR DE LAS 2 FORMAS
//se actualiza mientras vas escribiendo 
input.onchange = (ev) => {
    console.log(ev)
}
input.onchange = (ev) => {
    console.log(ev.target)
}
input.onchange = (ev) => {
    console.log(ev.target.value)
}
//se actualiza mientras vas escribiendo 
input.onkeydown = (ev) => {
    console.log(ev.target.value)
}

// span.classList.add ("verde")
span.classList.toggle ("rojo")
// span.classList.remove ("rojo")

const celdas = document.getElementsByClassName("celda")