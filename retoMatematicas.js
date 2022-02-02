function calculoaltura(lado1, lado2, base) {
    if (lado1 == lado2 ) {
        if (lado1 >= (base / 2)) {
           return Math.sqrt((lado1 * lado1) - (base / 2) * (base / 2 ));
        } else {
        return "El valor de los lados debe ser mayor o igual al de la mitad de la base";
        }
    } else {
        return "Los lados del triángulo deben ser iguales";
    }
}

function altura(params) {
    const lado1 = document.getElementById("lado1");
    const lado2 = document.getElementById("lado2");
    const base = document.getElementById("base");
    const vlado1 = Number(lado1.value);
    const vlado2 = Number(lado2.value);
    const vbase = Number(base.value);
    const alturaCalculada = calculoaltura(vlado1, vlado2, vbase);
    alert("La altura del triángulo es de " + alturaCalculada);
}
