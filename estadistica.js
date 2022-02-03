
// Media
//
function calcularMediaAritmetia(lista) {
    //    let sumaLista = 0;
    //    for (let i = 0; i < lista.length; i++ ) {
    //        sumaLista = sumaLista + lista[i];
    //    }
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );


    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


// Mediana



function esPar(array) {
    if (array % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana(lista) {
    lista.sort((a, b) => a - b);
    const mitadLista = parseInt(lista.length / 2);
    let mediana;
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        mediana = calcularMediaAritmetia([elemento1, elemento2,]);
    } else {
        mediana = lista[mitadLista];
    }
    return mediana;
}

// moda
//
// function mode(arr){
//    return arr.sort((a,b) =>
//          arr.filter(v => v===a).length
//        - arr.filter(v => v===b).length
//    ).pop();
//}


function frecuenciaDato(cadena) {
    const cadenaCount = {};
    cadena.map(
        function(elemento) {
            if (cadenaCount[elemento]) {
                cadenaCount[elemento] += 1;
            } else {
                cadenaCount[elemento] = 1;
            }
        }
    );
    return cadenaCount;
}

function calcularModa(lista) {
    const arrayOrdenada = Object.entries(frecuenciaDato(lista)).sort (
        function (a,b) {
            return a[1] - b[1];
        }
    );
    const ultimaArray = arrayOrdenada[arrayOrdenada.length - 1];
    const cantidadModa = ultimaArray[1];

    const arrayNumeroModa = [] ;
    arrayOrdenada.map(arraysModa);

    function arraysModa(a) {
        if (a[1] == cantidadModa) {
            arrayNumeroModa.push(a);
        }
    }

    if (arrayNumeroModa.length == 1) {
        const arrayValorModa = arrayNumeroModa[0];
        const valorModa = arrayValorModa[0];
        return `La moda es ${valorModa} con una frecuenca de ${cantidadModa}.`;
    } else if (arrayNumeroModa.length > 1 && arrayNumeroModa.length != arrayOrdenada.length) {
        const valoresModa = [];
        arrayNumeroModa.map(
            function valores(x) {
                valoresModa.push(x[0]);
            }
        );
        return `La moda es ${valoresModa} con una frecuencia de ${cantidadModa}.`;
    } else {
        return "Todos los datos tienen la misma frecuencia, no existe moda."; 
    }
    
    
}
