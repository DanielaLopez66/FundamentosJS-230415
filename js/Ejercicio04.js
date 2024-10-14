// Repaso de Arreglos 

// Estilización de los mensajes de salida

const bg= "linear-gradient(11deg, rgba(199,0,36,1)0%, rgba(199,0,36,1)33%, rgba(255,191,26,1)86%)";
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`

// Personalización de las Salidas a Consola
console.warn("Practica 06: Arreglos en JavaScript");

// DFe claración de un Arreglo
// Para declarar un arreglo (Array)  de datos en JavaScript basta con agregar [], y dentro los datos que contendra el arreglo

const mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", ]

console.log("%c1.- Declaración de un Arreglo (Array) ", style_console);
console.log(mesesAnio);
console.table(mesesAnio);

// Acceder a los valores de un Arreglo de datos para acceder al valor solo basrta env8iar la pocisión del dqato qyue queremos dentro de los limites seleccionados, siendo el limite inferior 0 y el limite superior tamaño -1

console.log("%c2.- Leer o recuperar los datos de un Arreglo", style_console);
console.log(`El primer mes del año es: ${mesesAnio[0]} `) 
console.log(`El ultimo mes del año es: ${mesesAnio[mesesAnio.length-1]} `) 

// No se pueden acceder a los elementos con pocisiones neggativas o pocisiones superiores al tamaño definido.

console.log(`El mes del año en la pocision -1 es ${mesesAnio[-1]}`)
console.log(`El treceavo mes del año en la pocision -1 es ${mesesAnio[12]}`)

console.log(`¿Que tipo de dato es un arreglo? : ${typeof(mesesAnio)}`)


// Al ser Javascript un lenguaje debilmente tipado podemos crear Arreglos mixtos de tipos de Datos
const saludar = function(nombre){return `Hola, ${nombre}`}

let arregloMixto = ["String", 5, 45,26, -200, -.16854, Symbol("MARH"), 'z', false, BigInt(111112222233333444455555666667777), true, {latitud: "20° 18' 0\" N" , longitud: "97° 58' 0\" W" , altitud: 796}, saludar,null ]

// Mostramos el contenido del objeto
console.log(arregloMixto);
console.table(arregloMixto);
console.log(typeof(arregloMixto));

console.log("Verificamos los tipos de datos de los elementos del arreglo: ")

console.log(`El dato en la pocision [0] = ${arregloMixto[0]} y es del tipo ${typeof(arregloMixto[0])}`)
console.log(`El dato en la pocision [1] = ${arregloMixto[1]} y es del tipo ${typeof(arregloMixto[1])}`)
console.log(`El dato en la pocision [2] = ${arregloMixto[2]} y es del tipo ${typeof(arregloMixto[2])}`)
console.log(`El dato en la pocision [3] = ${arregloMixto[3]} y es del tipo ${typeof(arregloMixto[3])}`)
console.log(`El dato en la pocision [4] = ${arregloMixto[4]} y es del tipo ${typeof(arregloMixto[4])}`)
console.log(`El dato en la pocision [5] = ${arregloMixto[5]} y es del tipo ${typeof(arregloMixto[5])}`)
console.log(`El dato en la pocision [6] = ${arregloMixto[6].toString} y es del tipo ${typeof(arregloMixto[6])}`)
console.log(`El dato en la pocision [7] = ${arregloMixto[7]} y es del tipo ${typeof(arregloMixto[7])}`)
console.log(`El dato en la pocision [8] = ${arregloMixto[8]} y es del tipo ${typeof(arregloMixto[8])}`)
console.log(`El dato en la pocision [9] = ${arregloMixto[9]} y es del tipo ${typeof(arregloMixto[9])}`)
console.log(`El dato en la pocision [10] = ${arregloMixto[10]} y es del tipo ${typeof(arregloMixto[10])}`)
console.log(`El dato en la pocision [11] = ${arregloMixto[11]} y es del tipo ${typeof(arregloMixto[11])}`)
console.log(`El dato en la pocision [12] = ${arregloMixto[12]} y es del tipo ${typeof(arregloMixto[12])}`)
console.log(`El dato en la pocision [13] = ${arregloMixto[13]} y es del tipo ${typeof(arregloMixto[13])}`)
console.log(`El dato en la pocision [14] = ${arregloMixto[14]} y es del tipo ${typeof(arregloMixto[14])}`)

console.log("%c3.- Arreglos Multdimensionales (Matrices)", style_console);

console.log("Declarando una matriz regular:")
// Una matriz es una estructura de datos multidimensional (tabla)
let matriz = [[1,2,3,4,],['a','b','c,','d']]

// Esta es una matriz regular de 4 x 4

console.log(matriz)
console.table(matriz)

console.log("Declarando una matriz irregular:")

const matrizIrregular = [["Juan","Pedro"," Maria", "Inés"], [true, true, false, null], [9.2]]

console.log(matrizIrregular)
console.table(matrizIrregular)

// Accediendo a los valores de la matriz regular

console.log("Leyendo las Propiedades de una Matriz Regular")
console.log(`Elementos en la pocision [0][0]: ${matriz[0][0]}`)
console.log(`Elementos en la pocision [0][1]: ${matriz[0][1]}`)
console.log(`Elementos en la pocision [0][2]: ${matriz[0][2]}`)
console.log(`Elementos en la pocision [0][3]: ${matriz[0][3]}`)
console.log(`Elementos en la pocision [1][0]: ${matriz[1][0]}`)
console.log(`Elementos en la pocision [1][1]: ${matriz[1][1]}`)
console.log(`Elementos en la pocision [1][2]: ${matriz[1][2]}`)
console.log(`Elementos en la pocision [1][3]: ${matriz[1][3]}`)

// Accediendo a los valores de la matriz regular

console.log("Leyendo las Propiedades de una Matriz Irregular")
console.log(`Elementos en la pocision [0][0]: ${matrizIrregular[0][0]}`)
console.log(`Elementos en la pocision [0][1]: ${matrizIrregular[0][1]}`)
console.log(`Elementos en la pocision [0][2]: ${matrizIrregular[0][2]}`)
console.log(`Elementos en la pocision [0][3]: ${matrizIrregular[0][3]}`)
console.log(`Elementos en la pocision [1][0]: ${matrizIrregular[1][0]}`)
console.log(`Elementos en la pocision [1][1]: ${matrizIrregular[1][1]}`)
console.log(`Elementos en la pocision [1][2]: ${matrizIrregular[1][2]}`)
console.log(`Elementos en la pocision [1][3]: ${matrizIrregular[1][3]}`)
console.log(`Elementos en la pocision [1][3]: ${matrizIrregular[2][0]}`)

//Funciones y Metodos de Arreglos
// Los metodos de un objeto siempre son invocados usando un . y al termino se delimitan los parametros entre (), en caso de que no lleve (), no es un ,metodo si no una propiedad

console.log("%c4.- Funciones o Metodos de los Arreglos (Array Methos or Array Functions", style_console);
console.log("¿Como saber cual es el tamaño de un arreglo?")
console.log(`Meses es un arreglo del tamaño : ${mesesAnio.length}`);
console.log(`arregloMixto es un arreglo de tamaño : ${arregloMixto.length} `)
console.log(`¿Que pasa con los multidimensionales?`)
console.log(`matriz es un arreglo de tamaño : ${matriz.length}`)
console.log("mmm, eso me da el tamaño de numero de filas de la matriz, pero como saber el numero de columnas?")
console.log(`la matriz regular tiene un numero de ${matriz[0].length}`)
console.log("Y para las irregulares?")

//Para saber la dimension de una matriz irregular podemos hacer el uso de ciclo
let numeroFilas = matrizIrregular.length
for ( let i = 0; i<numeroFilas; i++)
console.log(`La longitud de la fila ${[i]} es = ${matrizIrregular[i].length}`)   

console.log("%c5.- Agregar un nuevo elemento a un arreglo (PUSH)", style_console);
let estudiantes =["Daniela Lopez", "Angel Rufino", "Edgar Cabrera", "Diego Tecorralco", "Brandon Leon"]
console.log("Los elementos actuales del arreglo son: ")
console.table(estudiantes)
console.log("Agregamos a un nuevo estudiante llamado: Carlos Fosado")
estudiantes.push("Carlos Fosado")
console.log("Despues de agregarlo los elementos del arreglo son: ")
console.table(estudiantes)
console.log("¿Qué pasa con los Mixtos?")
console.log("El arregloMixto actualmente tiene los siguientes elementos:")
console.table(arregloMixto)
console.log("Agregamos la palabra:\"Hola\", como nuevo elemento")
arregloMixto.push("Hola");
console.log("Y tambien agregamos el numero -3128841651541541.54654585485, siendo este un BigInt ")
arregloMixto.push((-3128841651541541.54654585485));
console.log("Despues de estas dos operaciones el arreglo queda con los siguientes elementos")
console.table(arregloMixto);

console.log("%c6.- Agregar un nuevo elemento a un arreglo (UNSHIFT) en la posicion inicial", style_console);
console.table(estudiantes)
console.log("Ahora agregaremos a Abishai Flores, al comienzo del arreglo.")
estudiantes.unshift("Abishai Flores");
console.log("La lista actual es:")
console.table(estudiantes)

console.log("%c7.- Eliminar elementos de un arreglo en la ultima posicion (POP)", style_console);
console.log("El arreglo tiene los siguientes elementos:")
console.table(estudiantes)
console.log("Para este caso eliminaremos a Carlos Fosado, en la ultima posicion")
estudiantes.pop();
console.log("Despues de eliminar elemento el arreglo quedo con la siguiente manera:")
console.table(estudiantes);

console.log("%c8.- Eliminar elementos de un arreglo en la primera posicion (SHIFT)", style_console);
console.log("El arreglo tiene los siguientes elementos:")
console.table(estudiantes)
console.log("Para este caso eliminaremos a Abishai Flores, en la primera posicion")
estudiantes.shift();
console.log("Despues de eliminar elemento el arreglo quedo con la siguiente manera:")
console.table(estudiantes);

console.log("%c9.- Dividir un arreglo nuevo con posiciones definidas(SPLICE)", style_console);
console.log("El arreglo original tiene los elementos: ")
console.table(estudiantes);
console.log("Dividir el arreglo en uno nuevo eliminando ciertos elementos en base a su posicion")
//Cuando la funcion recibe un solo parametro eliminara los elementos de esta posicion en adelante 
estudiantes.splice(2);
console.table(estudiantes)
//Cuando la funcion splice recibe 2 parametros elimina todos los elementos en ese rango
estudiantes.push("Zyanya Zacatenco");
estudiantes.push("Tania Ibarra");
estudiantes.push("Juvenal Viveros");
estudiantes.push("Marcos Rios");
estudiantes.push("Jonathan Baldemar");
console.log("Se han agregado 5 nuevos estudiantes, por lo que el arreglo es:")
console.table(estudiantes);
console.log("Ahora ya tenemos los elementos suficientes para aplicar el metodo splice con dos parametros que seran 3, 5")
estudiantes.splice(3,5)
console.log("Resultado en :")
console.table(estudiantes);
//Splice sirve tambien para insertar elementos en posiciones especificas, ahora necesitamos Insertar a : "Antonio Ocpao" entre "Angel Rufino " "Idai Vargas"
console.log("Ahora vamos a insertar a \"Antonio Ocpaco\" en los elementos de la posicion 0 y 1")
estudiantes.splice(1,0,"Antonio Ocpaco");
console.log("Resultado en ")
console.table(estudiantes);

//Tambien splice sirve para reemplazar elementos por otros, en este caso remplazaremos a "Daniela Lopez" por  "Brandon Leon"
console.log("Ahora vamos a reemplazar a \"Daniela Lopez\" en los elementos de la posicion por \"Brandon Leon\"")
estudiantes.splice(0,1,"Brandon Leon");
console.log("Resultado en ")
console.table(estudiantes);

console.log("%c10.- Metodos para la manipulacion de arreglos INMUTABLES", style_console);
let signosZodiacales = ["Aries","Tauro", "Geminis", "Cancer", "Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario", "Piscis"]

//Destructuracion de arreglos

let [signo1,,signo3,,,,signo7,,,,,]=signosZodiacales
console.log(`El primer signo zodiacal es: ${signo1}`)
console.log(`El tercer signo zodiacal es: ${signo3}`)
console.log(`El septimo signo zodiacal es: ${signo7}`)

//Congelamos el arreglo volviendo INMUTABLE;
Object.freeze(signosZodiacales);

//Filtrado de datos
console.log("%c11.- Filtrado de elemento dentro de un arreglo utilizando el metodo FILTER", style_console);

console.log(estudiantes);
//Antes de filtrar datos llenemos el arreglo con 10 elementos 

estudiantes.push("Angel Rufino");
estudiantes.push("Esther Gonzalez");
estudiantes.push("Lorena Galindo ");
estudiantes.push("Jonathan Ramirez");
estudiantes.push("Aiton Artiaga");
estudiantes.push("Tania Ibarra");
console.table(estudiantes);

Object.freeze(estudiantes);

//Filtrar es un metodo que recorre los elementos de un arreglo haciendo alguna tareaen especifico, lo que tenemos que considerar es que este nuevo arreglo realmente es un objeto nuevo que puede ser mutable

console.log("Filtrando los primeros 5 elementos")
let nuevoEstudiantes = estudiantes.filter((estudiante, index)=>index<5);
console.table(nuevoEstudiantes);
console.table(filtraPrimeros5(estudiantes));

//Intentamos modificar el arreglo inmutable
//estudiantes.pop();
//console.table(estudiantes);

//Intentemos modificar el nuevo arreglo que no ha sido completado
nuevoEstudiantes.unshift("Diego Tecorralco");
console.table(nuevoEstudiantes);

function filtraPrimeros5(arregloEstudiantes)
{
    let listaFiltrada=[]
    for(let i=0; i<5;i++)
    {
        listaFiltrada.push(arregloEstudiantes[i]);

    }
    return listaFiltrada;
}

//Filtrado de datos 
console.log("%c12.- Filtrado de elemento dentro de un arreglo utilizando el metodo MAP, en el que necesitamos transformarlos", style_console);
console.log("Imprimimos los elementos actuales de signoZodiacales");
console.table(signosZodiacales);
//Que podemos hacer si necesitamos el mismo arreglo pero ahora con todos sus elementos con letras MAYUSCULAS
console.table(signosZodiacales.map(signosZodiacales=>signosZodiacales.toUpperCase()));

//Reduccion de elementos de un arreglo se usa cuando debemos hacer operaciones matematicas o cuantitativas a un arreglo, como obtener totales, la idea es reducir la lista a un valor mas simplificado

const costoListaCompras = [15,52,32,95,10,85,14,20,66,94,25]
//Como podemos calcular el total de una lista de costos de un carrito de compras
console.log("Los precios son:")
console.table(costoListaCompras);
console.log(`El total de la compra es: ${costoListaCompras.reduce((total,precio)=>total+precio,0).toFixed(2)}`)