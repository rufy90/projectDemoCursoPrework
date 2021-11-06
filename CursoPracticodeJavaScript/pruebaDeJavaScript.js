let firtsName = 'Rufino';
let lastName = 'Carranza';
let userName = 'rufy90';
let age = 31;
let email = 'carranzarufino90@gmail.com'
let older = true;
let savings = 800;
let debts = 300;

//Full name
console.log('Full name: ', firtsName + ' ' + lastName);
//Real moneay
console.log('Real bank state: ', savings - debts);

/* Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables 
constantes por parámetros y argumentos en una función: */
const fname = "Juan David";
const lastname = "Castro Gallego";
const completeName = fname + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");


var fname;
var lastname;
var nickname;
function fullName(fname, lastName, nickname) {
    var completeName = fname +' '+ lastName;
    return console.log('Mi nombre es ' + completeName + ', pero prefiero que me digas ' + nickname + '.');
};
fullName('Juan David', 'Castro Gallego', 'juandc');

/* Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if: */

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
};

const tipoDeSuscripcion = "Basic";
if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion === 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if(tipoDeSuscripcion === 'ExpertPlus'){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}else{
    console.log("Solo puedes tomar los cursos gratis");
};

/* Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if) */

const tipoDeSuscripcion = "Free";
if (tipoDeSuscripcion === 'Free') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    if (tipoDeSuscripcion === 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        if (tipoDeSuscripcion === 'Expert') {
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
            if (tipoDeSuscripcion === 'ExpertPlus') {
                console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
            }
        }
    }
};

/* Replica el comportamiento de los siguientes ciclos for utilizando ciclos while: */
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i =0;
while (i < 5) {
    i++;
    console.log('El valor de i es: ' + i)
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let j= 11;
while (j>=3) {
    j--;
    console.log('El valor de i es: ' + j);
}

/* Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar. */ 

/* var result = 4;
do {
    result = prompt('Cuanto es 2 + 2');
} while (result === 4); */
var result = 0;
while (result != 4) {
    result = prompt('Type the result of: 2 + 2 = ');
};


//////////////////////////////////////////////////////

/* Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento. */

var startingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function printArray (myArray) {
    console.log(myArray[0]);
};

printArray(startingArray);

/* Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo). */
let startingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
print_array = function(newArray) {
    elements = "";
    for(x=0; x<newArray.length; x++){
        elements += newArray[x] + '\n';
    }
    return elements;
}
console.log(print_array(startingArray));

/*  Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo). */
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
};

Car1 = new Car('Hyundai', 'Accent', 2020);

let printObject = (object) => {
    for (const key in object) {
        console.log(object[key]);
    }
};
printObject(Car1);