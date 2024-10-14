// Repaso de objetos 

const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)"; 
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalizacion de las salidas a consola
console.warn("Practica 05: Repaso de Objetos en Java Script");

//VARIABLES INDEPENDIENTES
console.log("%c1.- Variables independientes", style_console);

//Declaramos valores independientes relacioadas a un PRODUCTO
let Producto_Nombre = "Computadora Gammer Laptop 17\"";
let Producto_Marca = "AGUS";
let Producto_Modelo = "TUF 17";
let Producto_Precio = 15749.50;
let Producto_Disponibilidad = true;
let Producto_SKU = Symbol("TUF707VV-HK22W");
let Producto_Stock = 15;
let Producto_Imagen = null;
let Producto_Barcode;
let Producto_Categoria = ["Electronicos","Computacion", "Gamming", "Promociones Buen Fin", "Mejor Valorados"];

//Accedemos a los valores de las caracteristicas del producto de manera independiente
console.log(`Los datos del PRODUCTO son: \n
    Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca},  Tipo de Dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo},  Tipo de Dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio},  Tipo de Dato <${typeof(Producto_Precio)}>
    Disponibilidad ${Producto_Disponibilidad} ,  Tipo de Dato <${typeof(Producto_Disponibilidad)}>
    Stock: ${Producto_Stock},  Tipo de Dato <${typeof(Producto_Stock)}>
    Barcodde: ${Producto_Barcode},  Tipo de Dato <${typeof(Producto_Barcode)}>
    Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof(Producto_Imagen)}>
    Categorias: ${Producto_Categoria},  Tipo de Dato <${typeof(Producto_Categoria)}>`);
    console.log("En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresion anterior")
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));

    //Ahora lo declaramos como un OBJETO
    console.log("%c2.- Objeto", style_console);
    let Producto =
    {
        ID:3216,
        Nombre : "Tenis deportivos",
        Marca : "Nike",
        Modelo: "Jordan 24",
        Precio : 3321.25,
        Disponibilidad: false,
        Stock: 0,
        SKU : "DZ5485-612",
        Imagen: "../asets/products/sneakers/JORDAN.png",
        Barcode : null,
        Categorias: ["Deportes", "Tenis", "Juvenil"]
    }

    //Ahora leemos el objeto completo
    console.table(Producto);

    //Para acceder a los propiedades del objeto utilizamos un "." y el nombre de la propiedad a leer
    console.log("Accediendo a propiedades especificas del PRODUCTO")
    console.log(`Nombre Completo del PRODUCTO ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
    console.log(`Precio: ${Producto.Precio}`)
    if(Producto.Disponibilidad == 0)
    console.log(`Estatus: Agotado`)
    else
    console.log(`Estatus: Disponible`)

    console.log("%c3.- Destructores de Objetos", style_console);
    let Producto2 =
    {
        Clave : 316,
        Nombre : "Lentes para Sol",
        Marca : "Oarklev",
        Modelo: "QNTM Kato",
        Precio : 6829.00,
        Disponibilidad: true,
        Stock: 0,
        SKU : "OO9481D-0356",
        Imagen: "../asets/products/dunglasses/KatoRed.png",
        Barcode : 88832491626,
        Categorias: ["Deportes", "Tenis", "Juvenil"]
    }
    let Comprador = {
        ID:667,
        Clave : 316,
        Nombre : "Ana Daniela ",
        Apellidos : "Lopez Neri",
        Tipo : "Frecuente",
        Correo : "dl7996409@gmail.com",
        PaisOrigen :"Mexico",
        SaldoActual: 14000.00,
    }
    let Pedido = {
        ID:666,
        Producto_Clave : 316,
        Comprador_Clve : 3216,
        Cantidad: 2,
        Estatus : "Carrito de compra",
        TipoPago: "Tarjeta de credito"
    }
    //En base a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con su saldo a favor
    let {Precio :Producto_Precio2}= Producto2;
    let {Cantidad : Pedido_Cantidad} = Pedido;
    let {SaldoActual: Cliente_SaldoActual} = Comprador;
    let Costo_Compra = Producto_Precio * Pedido_Cantidad;

    console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de : ${(Costo_Compra)}`);
    if(Costo_Compra< Cliente_SaldoActual)
        console.log("El cliente tiene saldo suficiente.")

    // Actualizar el valor de los objetos
    console.log(`%c4.-Actualización de los valores de las propiedades de un Objeto`, style_console);
    console.log(`El objeto actualmente tiene los isguientes valores`)
    console.log(JSON.stringify(Producto2, null, 2));
    // Convierte el objeto a una cadena para evitar problemas con la referencia
    console.log(`Por cuestiones de inflacion el costo del producto ha cambiado y debe ser actualizado... de $6,829.00 a $6,925.50`)

    // Para podificar el valor de  un objeto basta con igualar el nuevo valor de la propiedad deseada 
    Producto2.Precio=6915.50;
    console.log(`Los nuevos valores del producto son: `)
    console.log(Producto2);

    //¿Puedo cambiar no solo el valor si no el tipo de dato de un Objeto en JavaScript?
    console.log(`--------------------`)
    console.log(`El objeto actualmente tiene los siguientes valores`)
    var tipoDisponibilidad = typeof(Producto.Disponibilidad)
    console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`)
    console.log(JSON.stringify(Producto2,null, 2));
    Producto2.Disponibilidad="Si";
    let nuevoTipoDisponibilidad = typeof(Producto2.Disponibilidad)
    console.log(Producto2);
    console.log(`El nuevo tipo de dato de la disponibilidad es: ${nuevoTipoDisponibilidad}`)

    //Agregar nuevas propiedades al objeto
    console.log("%c5.- Agregar nuevas propiedades al objeto", style_console);
    //Para agregar una nueva propiedad utilizaremos el nombre del objeto los corchetes [] y el nuevo de la propiedad con su valor por defecto.
    Comprador[`Direccion`]= "AV. Benito Juarez No.1525, Interior 4D, Xicotepec de Juarez, Puebla, Mexico"
    Comprador[`Tipo`]="Nuevo cliente"
    Comprador[`ActividadesReciente`]=true
    Comprador[`TotalCompras`]=3516.25
    console.log(`Despues de haber agregado las propiedades Direccion, Tipo, ActividadesReciente y TotalCompras...`)
    console.table(Comprador)

    //Eliminar propiedades existentes de un objeto
    console.log("%c6.- Eliminar propiedades existentes de un Objeto", style_console);
    console.log("La estructura y valores del objeto PEDIDO son previos a la modificacion: ")
    console.table(Pedido)
    console.log("Despues de la modificacion ...")
    console.table(Pedido)

    console.log("%c7.- Métodos para controlar la mutabilidad de los Objetos, Congelacion (FREEZE)",style_console);
    // Si deseamos no permitir que los objetos sean modificados ni en estructura, ni en valor, utilizaremos el modo FREEZE(congelar)
    console.log(`La estructura actual del objeto COMPRADOR es:`)
    console.table(Comprador)
    Object.freeze(Comprador)
    //Intentamos agregar, eliminar, o modificar los valores de una propiedad
    Comprador.FechaUltimaCompra = "05/09/2024 10:15:25"
    delete Comprador.Tipo;
    Comprador.Direccion = "Venustiano Carranza #132, Col La chiveria, Xicotepec de Juarez Puebla";
    console.log(`Verificamos si se realizaron los cambios en el objeto COMPRADOR:`)
    console.table(Comprador)

    console.log("%c8.- Métodos para controlar la mutabilidad de los Objetos, Sellado (SEAL)",style_console);
    //Sin embargo, en el caso que deseamos poder modificar los valores de las propiedades del objeto, pero no su estructura, usaremos SEAL
    console.log("Objeto antes de ser modificado: ")
    console.table(Pedido)
    //Sellamos el objeto
    Object.seal(Pedido)
    //Intentamos modificar su estructura
    Pedido[`FechaPedido`]="25/09/24 11:05:03"
    delete Pedido[`Cantidad`]
    console.log(`Verificamos si se realizaron los cambios en el objeto PEDIDO:`)
    console.table(Pedido)
    //Ahora intentamos modificar el valor de las propiedades
    Pedido.Cantidad = 5
    console.log(`Verificamos si se modificaron los cambios en el objeto PEDIDO`)
    console.table(Pedido);

    //Destruccion de 2 o mas objetos
    console.log("%c9.- Destruccion de 2 o mas objetos",style_console);

    let{Precio:productoPrecio, Marca:productoMarca}=Producto;
    let{Correo: clienteCorreo, PaisOrigen: ClientePais, SaldoActual: clienteSaldo, Tipo:clienteTipo}=Comprador

    if(productoPrecio>2000)
        productoPrecio ="Caro"
    else
    productoPrecio="Barato"

    if(clienteSaldo >0)
        clienteSaldo ="A favor"
    else if(clienteSaldo<0)
        clienteSaldo="Encontra"
    else 
    clienteSaldo = "Sin deuda"

    //Transformar valores cualitativos

    let clienteNivel;

    if(clienteTipo="Premium")
        clienteNivel=1
    if(clienteTipo="Freemium")
        clienteNivel=2
    if(clienteTipo="No identificado")
        clienteNivel=3

    //Clasifiamos al cliente por su pais de origen
    if(ClientePais == "Mexico")
        ClientePais="Nacional"
    else
        ClientePais= "Extranjero"

    //OLE -Object Literal Enhacement
    let datosClientePromociones = {clienteCorreo, ClientePais, clienteNivel, clienteSaldo, productoMarca, productoPrecio}

    //El nuevo objeto que creamos seria un ejemplo de la informacion que enviariamos al area de Marketing para la difusion de promociones
    console.log("Los datos del cliente y sus habitos de compra son:");
    console.log(datosClientePromociones);


    //Operaciones sobre objetos
    //Union de objetos
    console.log("%c10.- Union de objetos usando el metodo de asignacion (ASSING)",style_console);

    console.log("Imprimimos la estructura y valores del objeto PRODUCTO")
    console.table(Producto);

    console.log("Imprimimos la estructura y valores del objeto PEDIDO")
    console.table(Pedido);
    //Suponiendo que el usuario ya realizo el pago el pedido se convertira en una venta que requiere informacion de ambos objetos
    //IMPORTANTE: ASSIGN, no solo permite la fusion de 2 o mas objetos, tambien muta los objetos originales perdiendo el valor original del ID en este caso
    const venta=Object.assign(Producto, Pedido);
    console.log("Consultaos este nuevo objeto VENTA")
    console.table(venta);

    // Union de Objetos usando SPREAD OPERATOR para evitar la perdida de informacion con objetos que comparten el mismo nombre en sus propiedades
    console.log("%c11.- Union de objetos usando el SPREAD OPERATOR)",style_console);

    //Parchamos el error, reiniciando el valor del producto ID al original
    //Parchamos.ID=100

    console.table(Producto)
    console.table(Comprador)
    console.table(Pedido)
    
    const Venta2 =
    {
        producto: {...Producto},
        comprador:{...Comprador},
        pedido:{...Pedido}
    }
    console.log("Fusionamos los 3 objetos en uno nuevo, si perdida de informacion")
    console.log(Venta2)
    console.table(Venta2)

    console.log("%c12.- Mutabilidad POST Union de Objetos",style_console);

    //Vamos a verificar el estatus de mutabilidad de los objetos
    console.log("Vamos a verificar el estatus de mutabilidad del objeto PEDIDO")
    console.log(`Esta el objeto de pedido Congelado? : ${Object.isFrozen(Pedido)}`);
    console.log(`Esta el objeto de pedido Sellado? : ${Object.isSealed(Pedido)}`);

    console.log("Vamos a verificar el estatus de mutabilidad del objeto COMPRADOR")
    console.log(`Esta el objeto de pedido Congelado? : ${Object.isFrozen(Comprador)}`);
    console.log(`Esta el objeto de pedido Sellado? : ${Object.isSealed(Comprador)}`);

    console.log("Vamos a verificar el estatus de mutabilidad del objeto PRODUCTO")
    console.log(`Esta el objeto de pedido Congelado? : ${Object.isFrozen(Producto)}`);
    console.log(`Esta el objeto de pedido Sellado? : ${Object.isSealed(Producto)}`);

    // Modificamos la estructura de producto, agregado una nueva propiedad
    Producto[`isLegacy`]=false;
    console.log(Producto)
    console.log(Venta2);
