// PRODUCTOS
const productos = [
    // Calzado
    {
        id: "calzado-01",
        titulo: "Calzado 01",
        imagen: "./img/calzado/01.jpg",
        categoria: {
            nombre: "Zapatillas",
            id: "calzado"
        },
        precio: 1000
    },
    {
        id: "calzado-02",
        titulo: "Calzado 02",
        imagen: "./img/calzado/02.jpg",
        categoria: {
            nombre: "Zapatillas",
            id: "calzado"
        },
        precio: 1000
    },
    {
        id: "calzado-03",
        titulo: "Calzado 03",
        imagen: "./img/calzado/03.jpg",
        categoria: {
            nombre: "Zapatillas",
            id: "calzado"
        },
        precio: 1000
    },
    {
        id: "calzado-04",
        titulo: "Calzado 04",
        imagen: "./img/calzado/04.jpg",
        categoria: {
            nombre: "Zapatillas",
            id: "calzado"
        },
        precio: 1000
    },
    {
        id: "calzado-05",
        titulo: "Calzado 05",
        imagen: "./img/calzado/05.jpg",
        categoria: {
            nombre: "Zapatillas",
            id: "calzado"
        },
        precio: 1000
    },

    // Remeras
    {
        id: "remera-01",
        titulo: "Remera 01",
        imagen: "./img/remeras/01.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remera-02",
        titulo: "Remera 02",
        imagen: "./img/remeras/02.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remera-03",
        titulo: "Remera 03",
        imagen: "./img/remeras/03.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remera-04",
        titulo: "Remera 04",
        imagen: "./img/remeras/04.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remera-05",
        titulo: "Remera 05",
        imagen: "./img/remeras/05.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remera-06",
        titulo: "Remera 06",
        imagen: "./img/remeras/06.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remera-07",
        titulo: "Remera 07",
        imagen: "./img/remeras/07.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remera-08",
        titulo: "Remera 08",
        imagen: "./img/remeras/08.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 1000
    },

    // Buzos
    {
        id: "buzo-01",
        titulo: "Buzo 01",
        imagen: "./img/buzos/01.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 1000
    },
    {
        id: "buzo-02",
        titulo: "Buzo 02",
        imagen: "./img/buzos/02.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 1000
    },
    {
        id: "buzo-03",
        titulo: "Buzo 03",
        imagen: "./img/buzos/03.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 1000
    },
    {
        id: "buzo-04",
        titulo: "Buzo 04",
        imagen: "./img/buzos/04.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 1000
    },
    {
        id: "buzo-05",
        titulo: "Buzo 05",
        imagen: "./img/buzos/05.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 1000
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");



function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto =>{

        const div = document.createElement("div")
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>        
        `;

        contenedorProductos.append(div);

    })

    actualizarBotonesAgregar();
}
cargarProductos(productos);


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos)
        }   

    })
})

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

const productosEnCarrito = [];

function agregarAlCarrito(e){

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}