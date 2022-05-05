
//Funciones helpers (no son parte pero son necesarias para los calculos)

function esPar(numerito){
    return (numerito % 2===0);
}

function calcularMediaAritmetrica(lista){

const sumaLista = lista.reduce( //Este metodo permite ir sumando los elementos internos del array

   function (valorAcumulado = 0, nuevoElemento){

       return valorAcumulado + nuevoElemento;
   }
)};   


// Calculando la mediana de salarios de cualquier pais

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    //Entender si la lista es par

    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetrica([personitaMitad1,personitaMitad2]);
        return mediana;
    }
    else{
        const personitaMitad = lista[mitad];
        return personitaMitad; 
    }
}

//// Inicio del calculo de la mediana General

// - Obteniendo el valor de los salarios dentro un Array

const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

// -Ordenamos para calcular la mediana
const salariosColSorted = salariosCol.sort( 
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
); 

//Calculadora de mediana

const medianaGeneralCol = medianaSalarios(salariosColSorted)

// Mediana del top 10%

const spliceStart = (salariosCol.length * 90)/100; //Empezamos en el 90% de la población
const spliceCount = (salariosColSorted.length - spliceStart);

const salarioColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount
);
const medianaTop10Col = medianaSalarios(salarioColTop10)
console.log({
    medianaGeneralCol,
    medianaTop10Col,
});