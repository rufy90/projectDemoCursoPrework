/* //codigo del cuadrado
console.group('Cuadrados');
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: "${ladoCuadrado}" cm` );

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es: "${perimetroCuadrado}" cm` );

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado es: "${areaCuadrado}" cm^2` );
console.groupEnd();

//codigo de triangulo
console.group('Triangulos');
const ladoT1 = 6;
const ladoT2 = 6;
const baseT = 4;

console.log(`Los lados del triangulo miden: ${ladoT1}cm, ${ladoT2}cm, ${baseT}cm`);

const alturaT = 5.5;
console.log(`La altura del triangulo mide: ${alturaT}cm`);

const perimetroT = ladoT1 + ladoT2 + baseT;
console.log(`El perimetro del triangulo mide: ${perimetroT}cm`);

const areaT = (baseT * alturaT)/2;
console.log(`El area del triangulo mide: ${areaT}cm`);

console.groupEnd();

//codigo de circulo
console.group('Circulos');
//Radio
const radioCirc = 4;
console.log(`El radio del circulo es: "${radioCirc}" cm`);

//Diametro
const diametroCirc = radioCirc * 2;
console.log(`El diametro del circulo es: "${diametroCirc}" cm`);

//Pi
const pi= Math.PI;
console.log(`El valor de Pi es: "${pi}"`);

//Circunferencia
const perimetroCirc = diametroCirc * pi;
console.log(`El perimetro de la circunferencia del circulo es: "${perimetroCirc}" cm`);

//Area
const areaCirc = (radioCirc * radioCirc)* pi;
console.log(`El area del circulo es: "${areaCirc}" cm^2`);

console.groupEnd(); */




/********************************* 
Encapsulando código en funciones
**********************************/ 
//codigo del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}



//codigo de triangulo
function perimetroT(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
}

function areaT(baseT, alturaT) {
    return (baseT * alturaT) / 2;
}


//codigo de circulo
//Diametro
function diametroCirc(radio) {
    return radio * 2;
}
//Pi
const pi= Math.PI;
console.log(`El valor de Pi es: "${pi}"`);
//Circunferencia
function perimetroCirc (radio) {
    const diametro = diametroCirc(radio);
    return diametro * pi;
}
//Area
function areaCirc (radio) {
    return (radio * radio) * pi;
}





/* CONECTANDO CON HTML */
//SQUARE
function calcPerimetroC() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetroC = perimetroCuadrado(value);
    alert(perimetroC);
}
function calcAreaC() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const areaC = areaCuadrado(value);
    alert(areaC);
}

//TRIANGLE
function calcPerimetroT() {
    const input1 = document.getElementById("inputLado1");
    const input2 = document.getElementById("inputLado2");
    const input3 = document.getElementById("inputBase");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const perimetroTriangulo = perimetroT(value1, value2, value3);
    alert(perimetroTriangulo);
}
function calcAreaT() {
    const input1 = document.getElementById("inputBase");
    const input2 = document.getElementById("inputAltura");
    const value1 = input1.value;
    const value2 = input2.value;
    const areaTriangulo = areaT(value1, value2);
    alert(areaTriangulo);
}

//CIRCLE
function calcDiameterCircle() {
    const input1 = document.getElementById("inputRadio");
    const value1 = input1.value;
    const diameterCircle = diametroCirc(value1);
    alert(diameterCircle);
}
function calcCircunference() {
    const input1 = document.getElementById("inputRadio");
    const value1 = input1.value;
    const perimeterCircle = perimetroCirc(value1);
    alert(perimeterCircle);
}
function calcAreaCircle() {
    const input1 = document.getElementById("inputRadio");
    const value1 = input1.value;
    const areaCircle = areaCirc(value1);
    alert(areaCircle);
}

//UPDATE()
function update() {
    const input1 = document.getElementById("perimeter");
    const input2 = document.getElementById("area");
    const value1 = document.getElementById("inputLado1");
    const value2 = document.getElementById("inputLado2");
    const value3 = document.getElementById("inputBase");
    const value4 = document.getElementById("inputAltura");

    if (input1.checked){
        value1.disabled = false;
        value2.disabled = false;
        value3.disabled = false;
        document.getElementById("area").disabled=true;
    }
    if (input2.checked) {
        value3.disabled = false;
        value4.disabled = false;
        document.getElementById("perimeter").disabled=true;
    }
}