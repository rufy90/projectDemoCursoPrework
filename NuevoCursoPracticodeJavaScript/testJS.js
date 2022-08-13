/* Test de JavaScript

1️ Responde las siguientes preguntas en la sección de comentarios:
·	¿Qué es una variable y para qué sirve?
Es un espacio reservado en memoria para almacenar informacion que se requiere al usuario
·	¿Cuál es la diferencia entre declarar e inicializar una variable?
Declarar es especificar el tipo de variable y el tipo de dato que esta tendra, inicializar es asignarle un valor
·	¿Cuál es la diferencia entre sumar números y concatenar strings?
Sumas numeros es estrictamente trabajar con numericos y concatenar es trabajar con numeros, letras y simbolos
·	¿Cuál operador me permite sumar o concatenar?
El operador + para suma y para concatenar + 

2️ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
·	Nombre                          String
·	Apellido                        String
·	Nombre de usuario en Platzi     String
·	Edad                            Integer
·	Correo electrónico              String
·	Mayor de edad                   Boolean
·	Dinero ahorrado                 Float
·	Deudas                          Float

3️ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios. */
var nombre = 'Rufino';
var apellido = 'Carranza';
var platziUser = 'Ruf99'
var edad = 32;
var email = 'carranza99@gmail.com';
var mEdad = 'Si';
var dAhorrado = 1050;
var deudas = 350;

/* 4️ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior: */
console.log('Nombre completo: ' + nombre + ' ' + apellido);
console.log('Dinero real: $' + (dAhorrado - deudas));