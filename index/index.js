class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
        this.libro = Usuario.listaLibros
        this.mascotas = Usuario.listaMascotas
    }
    static listaLibros = [{ titulo: "Harry Potter", autor: "J. K. Rowling" }]

    static listaMascotas = ["perro"]

    //LISTA DE METODOS

    getFullName() {
        return console.log(`Nombre Completo: ${this.nombre} ${this.apellido}`)
    }

    addMascotas(nuevaMascota) {
        Usuario.listaMascotas.push(nuevaMascota)
    }

    countMascotas() {
        return console.log(Usuario.listaMascotas.length)
    }

    addBook(nombre, autor) {
        Usuario.listaLibros.push({ titulo: nombre, autor: autor })
    }

    getBookName() {
        return Usuario.listaLibros.forEach(function (elemento) {
            const listaTituloLibro = [`${elemento.titulo}`]
            console.log(listaTituloLibro)
        })
    }
}

const usuario = new Usuario('Tomas', 'Bessone')

console.log(usuario)

usuario.getFullName()

usuario.addMascotas("caballo")

usuario.countMascotas()

usuario.addBook("El Señor de los Anillos", "J. R. R. Tolkien")

usuario.getBookName()