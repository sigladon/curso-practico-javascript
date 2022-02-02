// Código del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm²");

console.groupEnd();

// Código del triangulo

console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del triángulo miden " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm y " 
    + baseTriangulo 
    + "cm."
);

console.log("La altura del triángulo es de " + alturaTriangulo + "cm.");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triángulo es: " + areaTriangulo + "cm²");

console.groupEnd();

// Código del Circulo

console.group("Círculo");

const radioCirculo = 4;
console.log("El radio del circulo es de " + radioCirculo + "cm.");

const diametroCirculo = radioCirculo * 2;
console.log("El diametroCirculo del circulo es de " + diametroCirculo + "cm.");

const pi = Math.PI;


const circunferencia = diametroCirculo * pi;
console.log("La circunferencia del circulo es de " + circunferencia + "cm.");

const areaCirculo = pi * radioCirculo * radioCirculo;
console.log("El área del circulo es de " + areaCirculo + "cm².");



console.groupEnd();
