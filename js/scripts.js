/***** Zona de definición de variables */
// Definimos las variables con las que vamos a trabajar en el programa

// Creo un arreglo de mis productos
const productos = [
  {
    nombre: "Ongos",
    descripcion: "Ongos deliciosos para tu disfrute.",
    imagen: "/img/ongos.png",
    precio: 12.0,
  },
  {
    nombre: "El Hongo",
    descripcion: "El hongo de temporada, fresco y natural.",
    imagen: "/img/elhongo2.png",
    precio: 12.0,
  },
  {
    nombre: "Escafandra",
    descripcion: "Escafandra, un sabor único para tus recetas.",
    imagen: "/img/escafandra.png",
    precio: 12.0,
  },
  {
    nombre: "Mufin",
    descripcion: "Un delicioso mufin para cada ocasión.",
    imagen: "/img/mufin.png",
    precio: 12.0,
  },
  {
    nombre: "Navidad",
    descripcion: "Navidad en cada bocado.",
    imagen: "/img/navidad.png",
    precio: 12.0,
  },
  {
    nombre: "El Coco",
    descripcion: "El coco, el toque tropical para tus postres.",
    imagen: "/img/elcoco.png",
    precio: 12.0,
  },
  {
    nombre: "El Reloj",
    descripcion: "El Reloj, perfecto para cada momento.",
    imagen: "/img/elreloj.png",
    precio: 12.0,
  },
  {
    nombre: "Saturno",
    descripcion: "Saturno, una mezcla perfecta de sabores.",
    imagen: "/img/saturno1.png",
    precio: 12.0,
  },
  {
    nombre: "Postres",
    descripcion: "Postres variados, ideales para todos.",
    imagen: "/img/postres_001.png",
    precio: 54.0,
  },
];

// variable donde voy a crear una cadena con los elementos HTML de las cards de cada producto
let cursosHTML = "";

// guardo el div contenedor de las cards de los productos
const contenedorCursos = document.getElementById("productos");

// guardo la lista (ul) del carrito
const listaCarrito = document.querySelector("#carrito ul");

// guardo el párrafo que muestra el total del carrito
const totalCarrito = document.querySelector("#carrito p");

// guardo el botón Borrar
const botonBorrar = document.querySelector("#boton-borrar");

// guardo el botón Ir a Pagar
const botonPagar = document.querySelector("#boton-pagar");

// guardo el párrafo para mostrar mensaje "No has agregado nada en el carrito"
const mensajePagarCarrito = document.getElementById("mensajeCarrito");

// variable para sumar los precios de los productos del carrito
let totalAPagar = 0;

/***** Zona de definición de funciones */

// creamos las cards con los datos en el HTML
function crearCardsConDatos() {
  for (let indice = 0; indice < productos.length; indice++) {
    // creamos una cadena con interpolación para incorporar los datos del arreglo
    // en cada repetición, con += concatenamos cada nueva cadena a la anterior
    cursosHTML += ` 
            <div class="card">
                <img height="312.5" src="${productos[indice].imagen}" alt="${productos[indice].nombre}" class="zoom-image" />
                <div class="description">
                    <p>${productos[indice].descripcion}</p>
                    <p class="price">$${productos[indice].precio}</p>
                    <button class="add-to-cart">Agregar al carrito</button>
                </div>
            </div>
        `;
  }
  // reemplazamos el contenido del div #productos
  contenedorCursos.innerHTML = cursosHTML;
}

// agregamos los listener a los botones Agregar al Carrito
function crearListenersBotonesAgregar() {
  // guardo en un arreglo de todos los botones "Agregar al carrito"
  const botonesAgregar = document.querySelectorAll(".add-to-cart");

  for (let indice = 0; indice < botonesAgregar.length; indice++) {
    // función que ejecutará el listener
    function agregarElemCarrito() {
      const elementoLi = document.createElement("li");
      elementoLi.innerText = `${productos[indice].nombre} - $${productos[indice].precio}`;
      listaCarrito.appendChild(elementoLi);
      totalAPagar += productos[indice].precio;
      totalCarrito.innerText = "Total a Pagar: $" + totalAPagar;
      mensajePagarCarrito.innerText = "";
    }

    // agregamos el listener a cada botón Agregar
    botonesAgregar[indice].addEventListener("click", agregarElemCarrito);
  }
}

// agregamos listener al botón Borrar
function borrarCarrito() {
  listaCarrito.innerHTML = "";
  totalCarrito.innerHTML = "Total a Pagar: $0";
  totalAPagar = 0;
  mensajePagarCarrito.innerText = "";
}

// agregamos listener al botón Ir a Pagar
function irAPagar() {
  if (listaCarrito.innerText === "") {
    mensajePagarCarrito.innerText = "No has seleccionado ningún producto";
  } else {
    window.location.href = "./pagos.html";
  }
}

/****** Instrucciones del programa *********/
// Aquí empieza a ejecutarse el programa

// ejecutamos la función que crea las cards en el HTML
crearCardsConDatos();

// ejecutamos la función que permite añadir productos al carrito
crearListenersBotonesAgregar();

// agregamos el listener al botón Borrar
botonBorrar.addEventListener("click", borrarCarrito);

// agregamos el listener al botón Ir a Pagar
botonPagar.addEventListener("click", irAPagar);
