// const precioOriginal = 100;
// const descuento = 15;





// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioconDescuento,
//     precioConDescuento,
// });

function calcularPrecioConDescuento(precio,descuento) {
    const porcentajePrecioconDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioconDescuento)/100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const resultadoP = document.getElementById("resultadoP");

    resultadoP.innerText = "El precio con descuento son: $" + precioConDescuento;
};
