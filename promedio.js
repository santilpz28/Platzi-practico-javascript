

function calcularMediaAritmetrica(lista){
    let sumaLista=0;

// for (let i = 0; i < lista.length; i++ ) {
//     sumaLista = sumaLista + lista[i];
// }

const sumaLista = lista.reduce( //Este metodo permite ir sumando los elementos internos del array

    function (valorAcumulado = 0, nuevoElemento){

        return valorAcumulado + nuevoElemento;
    }
); 

const promedioLista = sumaLista/lista.length;

return promedioLista;
}