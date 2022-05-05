function calcularMediaAritmetrica(lista){
    let sumaLista=0;

const sumaLista = lista.reduce( //Este metodo permite ir sumando los elementos internos del array

    function (valorAcumulado = 0, nuevoElemento){

        return valorAcumulado + nuevoElemento;
    }
); 

const promedioLista = sumaLista/lista.length;

return promedioLista;
}
const lista1 = [
    100,
    200,
    500,
    800,
    200000,
]

const mitadLista1 = parseInt(lista1.length/2);

function esPar(numerito){
    if(numerito % 2 ===0){
        return true
    }
    else{
        return false
    }

}

let mediana;

if(esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetrica([
        elemento1,
        elemento2,
    ]);
    return mediana = promedioElemento1y2;
}
else{
    mediana=lista1[mitadLista1];
}
