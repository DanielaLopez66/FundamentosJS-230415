//Repaso de Arreglos


//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(199,0,36,1) 0%, rgba(255,191,26,1) 33%, rgba(255,129,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`


//Personalizacion de salida de consola
console.warn("Practica 06: Repaso de Arreglos en Java Script");

//DECLARACIÓN DE UN ARREGLO
//Para declarar un arreglo (Array) de datos en JavaScript basta con agregar [], y dentro los datos que contendra el arreglo.

const mesesAnio = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Noviembre","Diciembre"]

console.log("%c1.- Declaración de un Areglo (Array)",  style_console);

console.log(mesesAnio);
console.table(mesesAnio);

//Acceder a los valores de un arreglo de datos para acceder al valor solo basta enviar la posición del dato que queremos dentro de los límites establecidos. Siendo el limite inferiror 0 y el superior tamaño -1.

console.log("%c2.- Leer o recuperar los datos de un arreglo", style_console);
console.log(`El primer mes del año es ${mesesAnio[0]}`);
console.log(`El último mes del año es ${mesesAnio[mesesAnio.length-1]}`);
//No se puede acceder a elementos con posiciones negativas o posiciones superiores al tamaño definido

console.log(`El primer mes del año de la posición -1 es: ${mesesAnio[-1]}`)

console.log(`El treceavo mes del año de la posición  es: ${mesesAnio[12]}`)

console.log(`¿Qué tipo de dato es un arreglo? : ${typeof(mesesAnio)}`)

//Al ser JavaScript un lenguaje débilmente tipados podremos crear arreglos mixtos de tipos de Datos
console.log("declarando un Arreglo Mixto")
const saludar = function(nombre){return `Hola. ${nombre}!`}

let arregloMixto = ["String",5,45.26,-200,-.16854, Symbol ("MARH"), 'z', false, BigInt(1111222233334444555566667777), true, {latitud: "20° 18' 0\" N",longitud: "97° 58' 00\" W", altitud: 796}, saludar, null]

//Mostramos el contenido del objeto
console.log(arregloMixto);
console.table(arregloMixto);
console.log(typeof(arregloMixto));

console.log("Verificamos los tipos de datos de los elementos del arreglo: ")

console.log(`El dato en la posición[0] = ${arregloMixto[0]} y es del tipo: ${typeof(arregloMixto[0])}`);
console.log(`El dato en la posición[1] = ${arregloMixto[1]} y es del tipo: ${typeof(arregloMixto[1])}`);
console.log(`El dato en la posición[2] = ${arregloMixto[2]} y es del tipo: ${typeof(arregloMixto[2])}`);
console.log(`El dato en la posición[3] = ${arregloMixto[0]} y es del tipo: ${typeof(arregloMixto[3])}`),
console.log(`El dato en la posición[4] = ${arregloMixto[4]} y es del tipo: ${typeof(arregloMixto[4])}`);
console.log(`El dato en la posición[5] = ${arregloMixto[5].toString} y es del tipo: ${typeof(arregloMixto[5])}`);
console.log(`El dato en la posición[6] = ${arregloMixto[6]} y es del tipo: ${typeof(arregloMixto[6])}`);
console.log(`El dato en la posición[7] = ${arregloMixto[7]} y es del tipo: ${typeof(arregloMixto[7])}`);
console.log(`El dato en la posición[8] = ${arregloMixto[8]} y es del tipo: ${typeof(arregloMixto[8])}`);
console.log(`El dato en la posición[9] = ${arregloMixto[9]} y es del tipo: ${typeof(arregloMixto[9])}`);
console.log(`El dato en la posición[10] = ${arregloMixto[10]} y es del tipo: ${typeof(arregloMixto[10])}`);
console.log(`El dato en la posición[11] = ${arregloMixto[11]} y es del tipo: ${typeof(arregloMixto[11])}`);
console.log(`El dato en la posición[12] = ${arregloMixto[12]} y es del tipo: ${typeof(arregloMixto[12])}`);

console.log("%c3.- Arreglos Multidimencionales (Matrices)", style_console);

//Una matriz es una estructura de datos multidimensional (Tabla) de n columnas o m filas

let matriz = [[1,2,3,4],['a','b','c','d']]
//Esta es una matríz regular de 4x4

console.log(matriz)
console.table(matriz)

console.log("Declaramos una matríz irregular.")

const matrizIrregualar = [["Ángel","Adrián","Karen", "Abril"], [true,false,null],[9.2]]

console.log(matrizIrregualar)
console.table(matrizIrregualar)

//Accediendo a los valores de una matríz

console.log("Leyendo las Propiedades de una Matriz Regular")
console.log(`Elementos en la posición [0][0]: ${matriz[0][0]}`)
console.log(`Elementos en la posición [1][2]: ${matriz[1][2]}`)

//Accediendo a los valores de una matríz Irregular
console.log("Leyendo las Propiedades de una Matriz Irregular")
console.log(`Elementos en la posición [0][0]: ${matrizIrregualar[0][0]}`)
console.log(`Elementos en la posición [2][0] (Promedio de Ángel): ${matrizIrregualar[2][0]}`)
console.log(`Elementos en la posición [1][2] (¿Es Karen mayor de edad?): ${matrizIrregualar[1][2]}`)

//Funciones y Métodos de Arreglos
//Los métodos de un objeto siempre son invocados usando un . y al termino se delimitan los parametros entre (), en caso de que no lleve (), no es un método sino una propiedad.

console.log("%c4.- Funciones o Métodos de los Arreglos (Array Methos or Array Functions", style_console);
console.log("¿Como saber cual es el tamaño de un arreglo?")
console.log(`meses es un arreglo de tamaño: ${mesesAnio.length}`)
console.log(`arregloMixto es un arreglo de tamaño: ${arregloMixto.length}`)
console.log(`¿Que pasa con los multidimencionales?`)
console.log(`matriz de un arreglo de tamaño: ${matriz.length}`) //La cuenta de arriba a abajo dando el numero de filas
console.log(`matriz de un arreglo de tamaño: ${matriz[0].length}`)
console.log("Y para las irregulares?")
//Para saber la dimensión de una matriz irregular podemos hacer el uso de ciclo
let nuemeroFilas = matrizIrregualar.length
for(let i =0; i<nuemeroFilas; i++)
    console.log(`La longitud de la fila ${[i]} es = ${matrizIrregualar[i].length}`)

console.log("%c5.- Agregar un nuevo elemento a un Arreglo (PUSH)", style_console);

let estudiantes = ["Ángel Rufino","Adrián Peréz","Karen Lizbeth","Osvaldo Abishai","Daniel Bravo"]
console.log("Los elementos actuales del arreglo son: ")
console.table(estudiantes)
console.log("Agregamos a un nuevo estudiante llamado: Abril Guzman")
estudiantes.push("Abril Guzman")//Siempre agrega el elemento en la última posición
console.log("Después de agregarla los elementos del arreglo son: ")
console.table(estudiantes)

console.log("'Qué pasa con los Mixtos?")
console.log("El arregloMixto actualmente tiene los siguientes elementos: ")
console.table(arregloMixto);
console.log("Agregamos la palabra: \"Hola\", como un nuevo elemento")
arregloMixto.push("Hola");
console.log("Y también agregamos el número -3128817875487448415.23597518864, siendo este un BigInt")
arregloMixto.push(BigInt(-3128817875487448415.23597518864))
console.log("Después de estas dos operaciones el arreglo queda con los siguientes elementos: ")
console.table(arregloMixto)

console.log("%c6.- Agregar un nuevo elemento a un Arreglo (UNSHIFT) en la posición inicial", style_console);
console.table(estudiantes)
console.log("Ahora agregamos a Uriel Medina, al comienzo del arreglo.")
estudiantes.unshift("Uriel Medina")
console.table(estudiantes)

console.log("%c7.- Eliminar elementos de un Arreglo en la última posición (POP)", style_console);
console.log("El arreglo tiene los siguientes elementos: ")
console.table(estudiantes)
console.log("Para este caso eliminaremos a Abril Guzman, en la última posición.")
estudiantes.pop();
console.log("Después de eliminar el elemento el arreglo quedo de la siguiente manera: ")
console.table(estudiantes)

console.log("%c8.- Eliminar elementos de un Arreglo en la primera posición (SHIFT))", style_console);
console.log("El arreglo tiene los siguientes elementos: ")
console.table(estudiantes)
console.log("Para este caso eliminaremos a Uriel Medina, en la primera posición.")
estudiantes.shift();
console.log("Después de eliminar el elemento el arreglo quedo de la siguiente manera: ")
console.table(estudiantes)

console.log("%c9.- Modificar un arreglo en un arreglo nuevo con posiciones defindas (SPLICE)", style_console);
console.log("El arreglo tiene los elementos: ")
console.table(estudiantes)
console.log("Dividir el arreglo en uno nuevo eliminado ciertos elementos en base a su posiciòn")
//Cuando la funciòn SPLICE recibe un solo parámetro eliminara los elementos de esa posición en adelante
estudiantes.splice(2)
console.table(estudiantes)

//Cuando la función SPLICE recibe 2 parámetros elimina todos los elementos que no estén en ese rango
estudiantes.push("Tania Ibarra")
estudiantes.push("Zyanya Zacatenco")
estudiantes.push("Juvenal Vìveros")
estudiantes.push("Jhonathan Baldermar")
estudiantes.push("Matias Mejia")
console.log("Se han agregado 5 nuevos estudiantes, por lo que el arreglo es: ")
console.table(estudiantes)
console.log("Ahora ya tenemos los elementos suficientes para aplicar el método SPLICE con dos parámetros que serán 3,5")
estudiantes.splice(3,5)
console.log("Resultado en: ")
console.table(estudiantes)

//SPLICE sirve también para insertar elementos en posiciones específicas, ahora necesitamos insertar a: "Jesús Dominguez" entre "Ángel Rufino" "Adrián Peréz"
console.log("Ahora vamos a insertar a \"Jesús Dominguez\", en los elementos de la poisición 0 y 1.")
estudiantes.splice(1,0,"Jesús Dominguez")
console.log("Resultando en:")
console.table(estudiantes)

//Tambièn SPLICE sirve para reemplazar elementos por otros, en este caso remplazaremos a  "Ángel Rufino" por "Brandon León"
console.log("Ahora vamos a insertar a \"Ángel Rufino\", en los elementos de la poisiciòn por \"Brandon León\".")
estudiantes.splice(0,1,"Brandon León")
console.log("Resultando en:")
console.table(estudiantes)

console.log("%c10.- Métodos para la manipulación de Arreglos INMUTABLES", style_console);
let signosZodiacales = ["Aries", "Tauro","Cáncer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricorno","Acuario","Piscis"]
//Llaves para un objeto, corchetes para arreglo
//Destructuración de Arreglos
let [signo1,,signo3,,,,signo7,,,,,] = signosZodiacales;
console.log(`El primer signo zodiacal es: ${signo1}`)
console.log(`El tercer signo zodiacal es: ${signo3}`)
//console.log(`El cuarto signo zodiacal es: ${signo4}`)
console.log(`El septimo signo zodiacal es: ${signo7}`)

//Congelamos el arreglo volviendolo INMUTABLE:
Object.freeze(signosZodiacales);

//Filtrado de Datos
console.log("%c11.- Filtrado de Elementos dentro de un Arreglo utilizando  el método FILTER", style_console);

console.table(estudiantes);
//Antes de filtrar datos llenemos el arreglo con 10 Elementos
estudiantes.push("Ángel Rufino")
estudiantes.push("Osvaldo Abishai")
estudiantes.push("Karen Negrete")
estudiantes.push("Uriel Abdalha")
estudiantes.push("Lorena Galindo")
estudiantes.push("Esther González")
console.table(estudiantes);

 Object.freeze(estudiantes);

//Filter es un método que recorre los elementos de un arreglo haciendo alguna tarea en específico, lo que tenemos que considerar es que este nuevo arreglo resultante es un objeto nuevo que puede ser mutable.

console.log("Filtramos los primeros 5 elementos");
let nuevoEstudiantes = estudiantes.filter((estudiante,index) => index<5);//Funcion lambda recorre todo el arreglo y solo devuelve en la iteracion estudiante que sean menor a 5 
console.table(nuevoEstudiantes);

console.log("Filtramos los nombres con mas de 15 carácteres");
//Filtrar a los estudiantes que su nombre tenga más de 15 carácteres
let nuevoEstudiantesNombre = estudiantes.filter((estudiante) => estudiante.length>15); //Es como si fuera la condición
console.table(nuevoEstudiantesNombre);

console.table(filtraPrimeros5(estudiantes));
//Intentamos modificar el arreglo inmutable
/*estudiantes.pop();
console.table(estudiantes);*/

//Intentamos modificar el nuevo arreglo que no ha sido congelado
nuevoEstudiantes.unshift("Daniela Lopéz")
console.table(nuevoEstudiantes)

//La función lambda es mas corta al hacer una function
function filtraPrimeros5(arregloEstudiantes)
{
    let listaFiltrada=[]
    for (let i=0; i<5; i++){
        listaFiltrada.push(arregloEstudiantes[i]);
    }
    return listaFiltrada;
}

//Filtrado de Datos - Transformando datos
console.log("%c12.- Filtrado de Elementos dentro de un Arreglo utilizando  el método MAP en el que necesitamos transformarlo", style_console);
console.log("Imprimir los elementos actuales de signosZodiacales:")
console.table(signosZodiacales);
//Que podemos hacer si necesitamos el mismo arreglo pero ahora con todos sus elementos con letras MAYÚSCULAS
console.table(signosZodiacales.map(signoZodiacal=> signoZodiacal.toUpperCase()));

console.log("%c13.- Reducción de Elementos de un Arreglo", style_console);
//Reducción de elementos de un arreglo, se usa cuando debemos hacer operaciones matemáticas o cuantittativas o un arreglo, como obtener totales, la idea es reducir la lista a un valor más simplificado.

const costosListaCompras = [15,52.50,16.90,32.50,28,105,45.2,94.10]
//como podemos calular el total de una lista de costos de un carrito de compras
console.log("Los precios son:")
console.table(costosListaCompras)
console.log(`El total de la compra es: ${costosListaCompras.reduce((total, precio)=>total + precio,0).toFixed(2)}`)