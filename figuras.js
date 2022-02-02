// Código del cuadrado

console.group("Cuadrados");

//    const ladoCuadrado = 5;
//    console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Código del triangulo

console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(altura, base) {
    return (base * altura) / 2;
}

console.groupEnd();

// Código del Circulo

console.group("Círculo");

function diametroCirculo(radio) {
    return radio * 2;
}

function circunferencia(radio) {
    return diametroCirculo(radio) * Math.PI;
}

function areaCirculo(radio) {
    return radio * radio * Math.PI;
}


console.groupEnd();

// Interacción con HTML

function calcularPerimetroCuadrado(params) {
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(params) {
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(params) {
    const lado1 = document.getElementById("ladoTriangulo1");
    const lado2 = document.getElementById("ladoTriangulo2");
    const base = document.getElementById("baseTriangulo");
    const vlado1 = Number(lado1.value);
    const vlado2 = Number(lado2.value);
    const vbase = Number(base.value);
    const perimetro = perimetroTriangulo(vlado1, vlado2, vbase);
    alert(perimetro);
}

function calcularAreaTriangulo(params) {
    const base = document.getElementById("baseTriangulo");
    const altura = document.getElementById("alturaTriangulo");
    const vbase = Number(base.value);
    const valtura = Number(altura.value);
    const area = areaTriangulo(valtura, vbase);
    alert(area);
}

function calcularCircunferencia(params) {
    const radio = document.getElementById("radioCirculo");
    const vradio = Number(radio.value);
    const circum = circunferencia(vradio);
    alert(circum);
}

function calcularAreaCirculo(params) {
    const radio = document.getElementById("radioCirculo");
    const vradio = Number(radio.value);
    const area = areaCirculo(vradio);
    alert(area);
}
