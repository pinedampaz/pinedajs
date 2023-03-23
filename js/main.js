
const carrito = []

const articulos = [{ imagen: '👚', codigo: 001, tipo: 'Remera Unisex Botanica', precio: 35.00 },
{ imagen: '👛', codigo: 002, tipo: 'Bolso Multiuso', precio: 18.00 },
{ imagen: '💤', codigo: 003, tipo: 'Almohadon Oedipus', precio: 20.00 },
{ imagen: '⏰', codigo: 004, tipo: 'Reloj Spring', precio: 29.00 },
{ imagen: '😷', codigo: 005, tipo: 'Barbijo Oedipus', precio: 0.00 }]


function buscarArticulo(codigo) {
    let resultado = articulos.find(articulo => articulo.codigo === parseInt(codigo))
    return resultado
}

function comprar () {
    let codigo = prompt("Selecciona tu articulo ingresando el codigo:")
    let articuloSeleccionado = buscarArticulo(codigo)
    if (articuloSeleccionado === undefined) {
        alert("El codigo ingresado no es valido.")
        return
    } else {
        carrito.push(articuloSeleccionado)
        alert(`${articuloSeleccionado.imagen} El articulo ${articuloSeleccionado.tipo} se ha agregado a su carro.`)
        let respuesta = confirm("Desea agregar otro articulo?")
        if (respuesta) {
            comprar()
        } else {
            finalizarCompra()
        }
    }
}

function verCarrito() {
    if (carrito.lenght > 0) {
        console.table(carrito)
    } else {
        console.warn("El carro se encuentra vacio")
    }
}


function finalizarCompra() {
    if (carrito.lenght === 0) {
        console.warn("El carro se encuentra vacio")
        return
    }
    const shopping = new Compra(carrito)
    alert(`El valor de la compra es de € ${shopping.obtenerSubtotal()}`)
    let respuesta = confirm("¿Deseas realizar el pago?")
    if (respuesta) {
        alert(shopping.confirmarCompra())
        carrito.lenght = 0
    }
} 
