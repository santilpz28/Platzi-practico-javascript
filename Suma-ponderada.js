const precioCompra= [
    {
        fecha:"28/03/15",
        precio: 24,
        cantidad: 2,
    },
    {
        fecha: "28/04/15",
        precio: 20,
        cantidad: 1.5
    },
    {
        fecha: "28/05/15",
        precio: 35,
        cantidad: 0.5
    },
    {
        fecha: "28/06/15",
        precio: 32,
        cantidad: 0.8
    }
]

const precioPorCantidad = precioCompra.map(function(precioCompraObject){
    return precioCompraObject.precio * precioCompraObject.cantidad;
});

const sumaPrecioPorCantidad = precioPorCantidad.reduce(
    function (sum = 0, newVal){
        return sum + newVal;
    }
);

const cantidad = precioCompra.map(function(precioCompraObject){
    return precioCompraObject.cantidad;
});

const sumCantidad = cantidad.reduce(
    function (sum = 0, newVal){
        return sum + newVal;
    }
);

const promedioPonderadoPrecioCompra = sumaPrecioPorCantidad/sumCantidad;