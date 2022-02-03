const price = 340.29;
const coupon1 = 15;
const coupon2 = 12;
const coupon3 = 10;
const coupon4 = 18;

function calcularPrecioDescuento(precio, descuento) {
    return precio * (100 - descuento) / 100;
}

function validateCoupon(params) {
    const userCoupon = document.getElementById("coupon-code");
    const vuserCoupon = String(userCoupon.value);
    switch(vuserCoupon) {
        case "COUPON1":
            const valueDiscount = document.getElementById("coupon-discount");
            valueDiscount.innerText = "Discount applied:  -%" + coupon1;
            const newPrice = calcularPrecioDescuento(price, coupon1);
            const vnewPrice = newPrice.toFixed(2);
            const newPriceText = document.getElementById("final-price");
            newPriceText.innerText = "$" + vnewPrice;
            break;

        case "COUPON2":
            const valueDiscount1 = document.getElementById("coupon-discount");
            valueDiscount1.innerText = "Discount applied:  -%" + coupon2;
            const newPrice1 = calcularPrecioDescuento(price, coupon2);
            const vnewPrice1 = newPrice1.toFixed(2);
            const newPriceText1 = document.getElementById("final-price");
            newPriceText1.innerText = "$" + vnewPrice1;
            break;
         
        case "COUPON3":
            const valueDiscount2 = document.getElementById("coupon-discount");
            valueDiscount2.innerText = "Discount applied:  -%" + coupon3;
            const newPrice2 = calcularPrecioDescuento(price, coupon3);
            const vnewPrice2 = newPrice2.toFixed(2);
            const newPriceText2 = document.getElementById("final-price");
            newPriceText2.innerText = "$" + vnewPrice2;
            break;

        case "COUPON4":
            const valueDiscount3 = document.getElementById("coupon-discount");
            valueDiscount3.innerText = "Discount applied:  -%" + coupon4;
            const newPrice3 = calcularPrecioDescuento(price, coupon4);
            const vnewPrice3 = newPrice3.toFixed(2);
            const newPriceText3 = document.getElementById("final-price");
            newPriceText3.innerText = "$" + vnewPrice3;
            break;

        default:
            const valueDiscount4 = document.getElementById("coupon-discount");
            valueDiscount4.innerText = "Invalid coupon, try again.";
            const newPriceText4 = document.getElementById("final-price");
            newPriceText4.innerText = "$" + price;
            break;
};
}
