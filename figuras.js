// Codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado= 5;
// console.log("Los lados del cuadrado miden: "+ ladoCuadrado +"cm");

function perimetroCuadrado(lado){
    return lado*4;
};

perimetroCuadrado();

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado +"cm");

function areaCuadrado(lado){
    return lado * lado;
} ;
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd("Cuadrados");

// Codigo triangulo

console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo=5.6;

// console.log(
//     "Los lados del triangulo miden: "
//     + ladoTriangulo1 +"cm "
//     + ladoTriangulo2 +"cm "
//     + baseTriangulo +"cm"
//     );

// console.log("La altura del triangulo es: " + alturaTriangulo + "cm");
function perimetroTriangulo(lado1, lado2,base){
    return lado1 + lado2 + base;
};
// console.log("El perimetro del triangulo es: " + perimetroTriangulo +"cm");

function areaTriangulo(altura, base){
    return (altura*base)/2;
};
// console.log("El área del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd("Triangulos");

//Circulos

console.group("Circulos");

//Radio



// console.log("El radio del circulo es: " + radioCirculo + "cm")

//Diametro


function diametroCirculo(radio){
    return radio * 2;
} ;

// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//PI

const PI = Math.PI;

//Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio); //llamando funciones dentro de otra función
    return diametro * PI;
};

// console.log("el perimetro del circulo es: " + perimetroCirculo + "cm");

//Area

function areaCirculo(radio){
    return (radio*radio)*PI;
} 

//console.log("El area del circulo es de: " + areaCirculo + "cm^2");


console.groupEnd("Circulos");


// -- Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// -- Triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("LadoTriangulo1");
    const input2 = document.getElementById("LadoTriangulo2");
    const input3 = document.getElementById("base");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input3 = document.getElementById("base");
    const input4 = document.getElementById("altura");
    const value3 = input3.value;
    const value4 = input4.value;
    

    const area = areaTriangulo(value3,value4);
    alert(area);
}

// -- Circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}
