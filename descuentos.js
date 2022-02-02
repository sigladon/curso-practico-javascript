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

function applyDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");

    const vinputPrice = Number(inputPrice.value);
    const vinputDiscount = Number(inputDiscount.value);

    const discount = calcularPrecioDescuento(vinputPrice, vinputDiscount);
    const discountText = document.getElementById("pDiscount");
    discountText.innerText = "El nuevo precio es $" + discount;
}
