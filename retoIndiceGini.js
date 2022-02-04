const datoPrueba = [[1500,24],[2700,15],[4000,2], [700,29]];


function dineroSueldo(parametro) {
    return parametro[0] * parametro[1];
}

function individuos(parametro) {
    return parametro[1];
}

function sumarPar(parametro) {
    const element = [];
    element.push(parametro[0]);
        for (let indice = 1; indice <= (parametro.length - 1); indice++) {
            const suma = parametro[indice] + element[element.length - 1];
            element.push(suma);
    }
    return element;
}

function total(parametro) {
    return parametro[parametro.length - 1];
}

function porcentaje(parametro) {
    const element = [];
    const hundred = total(parametro);
    for (let indice = 0; indice < parametro.length; indice++) {
        const resultado = (parametro[indice] * 100) / hundred;

        element.push(Number(resultado.toFixed(2)));
    }
    return element;
}

function sumarArray(total, value) {
    return total + value;
}

function restarPorcentajes(parametro1, parametro2) {
    const element = [];
    for (let indice = 0; indice < parametro1.length; indice++) {
        const valor = parametro1[indice] - parametro2[indice];
        element.push(valor);
    }
    return element;
}

function calcularIndice(parametro1, parametro2) {
    let element = parametro1 / parametro2;
    if (element < 0 ) {
        element = element * (-1);
    }
    return Number(element.toFixed(2));
}

function indiceGini(datos) {

    const sueldoGrupoArray = datos.map(dineroSueldo);
    const individuosArray = datos.map(individuos);
    const sumaSueldos = sumarPar(sueldoGrupoArray);
    const sumaIndividuos = sumarPar(individuosArray);
    const porcentajeSueldos = porcentaje(sumaSueldos);
    const porcentajeIndividuos = porcentaje(sumaIndividuos);
    const sumaPorcentajeIndividuos = porcentajeIndividuos.reduce(sumarArray);
    const restaPorcentajes = restarPorcentajes(porcentajeIndividuos, porcentajeSueldos);
    const sumaPorcentajesRestados = restaPorcentajes.reduce(sumarArray);
    const indiceGini = calcularIndice(sumaPorcentajesRestados, sumaPorcentajeIndividuos);
    return indiceGini;

 
}

function valueData(parametro){
    return Number(parametro.value);
}

function armarArray(parametro1, parametro2) {
    return [parametro1, parametro2];
}
const preText = document.getElementById("preMessage");
const giniResult = document.getElementById("giniResult");
const lista = document.getElementById("datos");

function imprimirDato(parametro) {
    const elementoHtml = document.createElement("li");
    elementoHtml.textContent = parametro;
    lista.appendChild(elementoHtml);
}

    let finalArray = [];

function add() {
    const moneyData = document.getElementById("money-data");
    const peopleData = document.getElementById("people-data");
    const vMoney = valueData(moneyData);
    const vPeople = valueData(peopleData);
    const arrayData = armarArray(vMoney, vPeople);
    imprimirDato(arrayData);
    finalArray.push(arrayData);
    preText.innerText = `Sus datos son:`;
}

function calcular() {
    if (finalArray.length > 1) {
        const Gini = indiceGini(finalArray);
        giniResult.innerText = `El índice Gini es de ${Gini}`;
    } else {
        preText.innerText = `Debe ingresar un mínimo de dos datos`;
    }
}


function reiniciar() {
    while (finalArray.length > 0) {
        finalArray.pop();
    };
    giniResult.innerText = "";
    preText.innerText = "";
    lista.innerText = "";
    return finalArray;

}
