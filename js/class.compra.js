class Compra {
    constructor(carrito) {
        this.carrito = carrito
    }
    obtenerSubtotal() {
        if (carrito.lenght > 0) {
            return this.carrito.reduce((acc, articulo) => acc + articulo.precio, 0).toFixed(2)
         } else {
            return 'Error inesperado.'
         }
    }
    confirmarCompra() {
        if (this.obtenerSubtotal() !== 'Error inesperado.'){
            return `Se ha confirmado el pago de € ${this.obtenerSubtotal()}. \n Muchas gracias por tu compra!`
        } else {
            return `Se ha producido un error en la transaccion. Vuelva a intentarlo en unos minutos.`
        }
    }
}
