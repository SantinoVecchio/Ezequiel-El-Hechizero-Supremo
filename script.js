// const button =document.getElementById("submit")
// const input =document.getElementById("texto")
// console.log(button)
// button.onclick = (e) =>{
//     e.preventDefault()
//     console.log(input.value)
// }

const nombre = "Ezequiel"
let edad = 15
const saludo = `Mi nombre es ${nombre}`

console.log(saludo)
console.log(edad)
console.log(nombre)
console.log ("1"==1)
console.log (Number("1")===1) // Number transforma el valor en tipo numero1
console.log ("1"===1) //no son iguales porque el segundo uno no es un string porque no tiene comillas por lo tanto no son el mismo tipo aunque tengan el mismo valor

// const no permite reasignar, let si lo permite 
// internamente todo se guarda con 1 y 0 existe otra logica que es boolean donde los 2 valores son en vez de 1 y 0 verdadero y falso (true or false) boolean
// Son datos usados para expresar los valores lógicos true y false (verdadero y falso). Su uso principal es en condicionales o expresar que cierta condición se cumple o no (por ejemplo que un checkbox esté chequeado o no)
//estan los operadores de asignacion = *= += -=, los aritmeticos + - . / y los que comparan valores entre si (booleanos) >< >= <= == (compara el valor) ==== (es estricto compara el valor y el tipo)

//si quiero definir una lista pongo const lista = [armo lista] separando con comas , todas las listas tienen una funcion en comun (.length) const lista = [1,"hola",null].length o lista.length , la funcion esta nos va a devolver la cantidad de elementos que conforman la lista , en este caso 3

//si ponemos length nos muestra la cantidad de elementos que conforman la lista y sino nos muestra el contenido de la lista

//una funcion es un bloque de codigo reutilizable que acepta parametros , se declara con la palabra function , posterior del nombre que le vamos a asignar y adentro los parametros 
// las funciones pueden retornar algo con return
function saludar(nombre){
console.log(`Hola ${nombre}`)
return `hola ${nombre}`
}
const misaludo= saludar (nombre)
const lista=[1,"hola",null].length
console.log(lista)
console.log(misaludo)