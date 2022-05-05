const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const lista1Cont = [];
lista1.map(
    function(elemento){
        if (lista1Cont[elemento]){
            lista1Cont[elemento] += 1;
        }
        else{
            lista1Cont[elemento] = 1;
        }
       
    }
);
// con object.entries a partir de un objeto se puede crear un array con la función sort ordenamos
const lista1Array = Object.entries(lista1Cont).sort(
    function (elementoA,elementoB){
        return elementoA[1] - elementoB[1];
    }
);

const moda = lista1Array[lista1Array.length-1];

