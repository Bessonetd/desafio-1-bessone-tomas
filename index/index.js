class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
}
const listasDeMascotas = ["perro", "gato"]

const listaDeLibros = [
    { titulo: "Harry Potter", autor: "J. K. Rowling" },
    { titulo: "It", autor: "Stephen King" }
]


const data = new Usuario('Tomas', 'Bessone', listaDeLibros, listasDeMascotas)

console.log(data)

function getFullName() {
    console.log(data.nombre + " " + data.apellido)
}

getFullName()

function addMascota(nombreNuevoMascota) {
    listasDeMascotas.push(nombreNuevoMascota)
}

addMascota("caballo")

function countMascotas() {
    console.log(listasDeMascotas.length)
}

countMascotas()

function addBook(titulo, autor) {
    listaDeLibros.push({ titulo: titulo, autor: autor })
}

addBook("El Señor de los Anillos", "J. R. R. Tolkien")

function getBookName() {
    listaDeLibros.forEach(function(elemento){
        const listaTitulosLibro = {titulo: elemento.titulo}
        console.log(listaTitulosLibro)
    })
}

getBookName()
