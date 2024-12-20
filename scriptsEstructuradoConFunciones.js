//Código estructurado con funciones

//console.log("ok");

/***** Zona de definición de variables */
//Definimos las variables con las que vamos a trabajar en el programa

//Creo un arreglo de mis productos
const productos = [
    {
        nombre: "Python",
        descripcion: "Obcaecati magnam error maxime eligendi doloremciteue voluptatibus nam laudantium corporis.",
        imagen: "imagenes/team-nocoloco-LWFdfx-5oEE-unsplash.jpg",
        precio: 2550.85

    },
    {
        nombre: "PHP",
        descripcion: "Neciteue magnam tenetur nam modi repellat vitae odio citeuam ipsam citeuaerat esse officiis.",
        imagen: "imagenes/team-nocoloco-OX1TXahR7Ng-unsplash.jpg",
        precio: 2300
    },
    {
        nombre: "Node.JS",
        descripcion: "Unde dolorum labore ipsa citeuos tempora non aspernatur citeuidem molestiae ratione.",
        imagen: "imagenes/team-nocoloco-U6L073YlbMo-unsplash.jpg",
        precio: 2400
    },
    {
        nombre: "Java",
        descripcion: "Praesentium veritatis molestiae debitis alias itaciteue illum assumenda dolor citeuae.",
        imagen: "imagenes/team-nocoloco-OX1TXahR7Ng-unsplash.jpg",
        precio: 2750
    }
]

//variable donde voy a crear una cadena con los elementos HTML de las cards de cada producto
let cursosHTML = "";

//guardo el div contenedor de las cards de los productos
const contenedorCursos = document.getElementById("contenedorCursos");
//guardo la lista (ul) del carrito
const listaCarrito = document.querySelector("#carrito ul");
//guardo el párrafo que muestra el total del carrito
const totalCarrito = document.querySelector("#carrito p")
//guardo el botón Borrar
const botonBorrar = document.querySelector("#boton-borrar");
//guardo el botón Ir a Pagar
const botonPagar = document.querySelector("#boton-pagar");
//guardo el párrafo para mostrar mensaje "No has agregado nada en el carrito"
const mensajePagarCarrito = document.getElementById("mensajeCarrito");
//variable para sumar los precios de los productos del carrito
let totalAPagar = 0;


/***** Zona de definición de funciones */

//creamos las cards con los datos en el HTML
function crearCardsConDatos() {
    for (let indice = 0; indice < productos.length; indice++) {
        //creamos una cadena con interpolación para incorporar los datos del arreglo
        //en cada repetición, con += concatenamos cada nueva cadena a la anterior
        //ustedes adapten el html de este ejemplo por sus propio código
        cursosHTML += ` 
                    <div class="curso">
                        <img src=${productos[indice].imagen}
                            alt="foto de una página web para crear sitios web">
                        <div class="curso-contenido">
                            <h2>${productos[indice].nombre}</h2>
                            <h3>Precio: $${productos[indice].precio}</h3>
                            <p>${productos[indice].descripcion}</p>
                            <a href="">Ver + info</a>                            
                            <input class="boton-agregar-carrito" type="button" value="Agregar al carrito">
                        </div>
                    </div>
        `;
    }
    //reemplazamos el contenido del div #contenedorCursos
    contenedorCursos.innerHTML = cursosHTML;
}

//agregamos los listener a los botones Agregar al Carrito
function crearListenersBotonesAgregar() {
    //guardo en un arreglo de todos los botones "Agregar al carrito"
    const botonesAgregar = document.querySelectorAll(".boton-agregar-carrito");
    console.log(botonesAgregar)
    for (let indice = 0; indice < botonesAgregar.length; indice++) {
        console.log("b")
        //función que ejecutará el listener
        function agregarElemCarrito() {
            const elementoLi = document.createElement("li");
            elementoLi.innerText = `Curso ${productos[indice].nombre} $${productos[indice].precio} `;
            listaCarrito.appendChild(elementoLi);
            totalAPagar += productos[indice].precio;
            totalCarrito.innerText = "Total a Pagar: $" + totalAPagar;
            mensajePagarCarrito.innerText = "";
        }

        //agregamos el listener a cada botón Agregar
        botonesAgregar[indice].addEventListener("click", agregarElemCarrito);
    }
}

// agregamos listener al botón Borrar
function borrarCarrito() {
    listaCarrito.innerHTML = "";
    totalCarrito.innerHTML = "Total a Pagar: $0";
    totalAPagar = 0;
    mensajePagarCarrito.innerText = ""
}

// agregamos listener al botón Ir a Pagar
function irAPagar() {
    if (listaCarrito.innerText === "") {
        mensajePagarCarrito.innerText = "No has seleccionado ningún producto"
    } else {
        window.location.href = "./pagos.html"
    }
}



/****** Instrucciones del programa *********/
//Acá empieza a ejecutarse el progrma

//ejecutamos la función que crea las cards en el HTML
crearCardsConDatos()
//ejecutamos la función que permite añadir productos al carrito
crearListenersBotonesAgregar()
//agregamos el listener al botón Borrar
botonBorrar.addEventListener("click", borrarCarrito);
//agregamos el listener al botón Ir a Pagar
botonPagar.addEventListener("click", irAPagar)


/*
Se puede mejora aún más este código, hay que seguir aprendiendo y practicando.
*/


