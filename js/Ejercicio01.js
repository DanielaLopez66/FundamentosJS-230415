//Ejercicio 01 Declaracion de Variables en js

var miNombre = "Ana Daniela"
var misApellidos;
var miEdad = 19;

//El obejeto de console nos permite enviar datos a la terminal y poder visualizar el valor de una variable o resultado de una función o metodo
console.warn("--- Declaración de variables usando : VAR");
console.log("Intentando leer las variables: ", miNombre, misApellidos);

misApellidos = "Lopez Neri";
console.log("Ya que ambas fueron inicializadas vuelvo a intentar leerlas ; ", miNombre, misApellidos);


//Una variable puede cambiar de valor en el proceso de ejecución del programa.

//b) Constante

console.warn("--- Declaración de variables del tipo constante usando : CONST")
const miUniversidad = "UT Xicotepec";
const miMatricula = "230415";
console.log("Hola, ", miNombre, " ", misApellidos, " Se que estudias actualmente en: ", miUniversidad, " asignaronla matricula: ", miMatricula, " Y tienes una edad de :", miEdad, "años.");

console.log("Analizabdo los datos puedo deducir que :");
console.log("miNombre es del tipo:", typeof (miNombre))
console.log("misApellidos es del tipo:", typeof (misApellidos))
console.log("miUniversidad es del tipo:", typeof (miUniversidad))
console.log("miMatricula es del tipo:", typeof (miMatricula))
console.log("miEdad es del tipo:", typeof (miEdad))

let miFechaNacimiento = "2005-01-06";
let miColorFavorito;
console.warn("--- Declaración de Variables Locales usando: LET")
console.log("Genial, te voy conociendo mejor, ahora se que tu naciste el: ", miFechaNacimiento, " y tu color favorito es : mmmmmmmmmm dejame pensar ....")
miColorFavorito = "rosa";
console.log(`Creo que es ${ miColorFavorito }, le atine ?`)

console.log("Analizando los datos puedo deducir que :")
console.log("miColorFavorito es del tipo:", typeof (miColorFavorito))
console.log("miFechaNacimiento es del tipo :", typeof (miFechaNacimiento))