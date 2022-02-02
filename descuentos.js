// const precioOriginal = 234;
// 
// const descuento = 18;
// 
// const porcentajePrecioConDescuento = 100 - descuento;
// 
// const precioConDescuento = precioOriginal * porcentajePrecioConDescuento / 100;
// 
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })

function calcularPrecioDescuento(precio, descuento) {
    return precio * (100 - descuento) / 100;
}
