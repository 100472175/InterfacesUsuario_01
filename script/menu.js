let abrirCompra = document.querySelector(".bolsa");
let cerrarCompra = document.querySelector(".finalizaCompra");
let lista = document.querySelector(".lista");
let lista_comida = document.querySelector(".lista_comida");
let body = document.querySelector("body");
let totalCarrito = document.querySelector(".total");
let cantidad = document.querySelector(".cantidad");

abrirCompra.addEventListener('click', ()=>{
    body.classList.add('active');
})
cerrarCompra.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let productos = [
    {
        id: 1,
        nombre: 'Cafe con leche',
        imagen: 'cafe1.jpg',
        precio: 50
    },
    {
        id: 2,
        nombre: 'Latte machiato',
        imagen: 'cafe2.jpg',
        precio: 50
    },
    {
        id: 3,
        nombre: 'Capuchino',
        imagen: 'cafe3.jpg',
        precio: 40
    },
    {
        id: 4,
        nombre: 'Cafe con hielo',
        imagen: 'cafe4.jpg',
        precio: 50
    },
    {
        id: 5,
        nombre: 'Cafe solo',
        imagen: 'cafe5.jpg',
        precio: 50
    },
    {
        id: 6,
        nombre: 'Chocolate',
        imagen: 'cafe6.jpg',
        precio: 40
    },
];

let bebidas = [
    {
        id: 7,
        nombre: 'Cafe',
        imagen: 'cafe1.jpg',
        precio: 50
    },
    {
        id: 8,
        nombre: 'Batido',
        imagen: 'cafe2.jpg',
        precio: 50
    },
    {
        id: 9,
        nombre: 'Capuchino',
        imagen: 'cafe3.jpg',
        precio: 40
    },
    {
        id: 10,
        nombre: 'Cafe con hielo',
        imagen: 'cafe4.jpg',
        precio: 50
    },
    {
        id: 11,
        nombre: 'Cafe solo',
        imagen: 'cafe5.jpg',
        precio: 50
    },
    {
        id: 12,
        nombre: 'Chocolate',
        imagen: 'cafe6.jpg',
        precio: 40
    },
];
let lista_comidas = [];
function init_bebida(){
    lista.length = 0;
    bebidas.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('elemento');
        newDiv.innerHTML = `
            <img src="images/menu/${value.imagen}/" alt="imagen_del_producto">
            <div class="titulo">${value.nombre}</div>
            <div class="precio">${value.precio.toLocaleString()}</div> <!--Mirar que hace el toLocaleString() */-->
            <button onclick="aniadirAlCarrito_2(${key})"> Añadir al carrito</button>`;
        lista.appendChild(newDiv);
    })
}
function initApp(){
    lista.length = 0;
    productos.forEach((value, key) =>{
        //
        let newDiv = document.createElement('div');
        newDiv.classList.add('elemento');
        newDiv.innerHTML = `
            <img src="images/menu/${value.imagen}/" alt="imagen_del_producto">
            <div class="titulo">${value.nombre}</div>
            <div class="precio">${value.precio.toLocaleString()}</div> <!--Mirar que hace el toLocaleString() */-->
            <button onclick="aniadirAlCarrito(${key})"> Añadir al carrito</button>`;
        lista.appendChild(newDiv);
    })
}
//init_bebida();
initApp();
function aniadirAlCarrito(key){
    if (lista_comidas[key] == null){
        lista_comidas[key] = JSON.parse(JSON.stringify(bebidas[key]));
        lista_comidas[key].cantidad = 1;
    }
    recargaElemento()
}
function aniadirAlCarrito_2(key){
    if (lista_comidas[key] == null){
        lista_comidas[key] = JSON.parse(JSON.stringify(productos[key]));
        lista_comidas[key].cantidad = 1;
    }
    recargaElemento()
}
function recargaElemento() {
    lista_comida.innerHTML = '';
    let cuenta = 0;
    let precioTotal = 0;
    lista_comidas.forEach((value, key) => {
        precioTotal = precioTotal + value.precio;
        cuenta = cuenta + value.cantidad;

        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="/images/menu/${value.image}"/><div>
            <div>${value.nombre}</div>
            <div>${value.precio.toLocaleString()}</div>
            <div>
                <button onclick="cambiaCantidad(${key}, ${value.cantidad - 1})">-</button>
                <div class="contador">${value.cantidad}</div>
                <button onclick="cambiaCantidad(${key}, ${value.cantidad + 1})">+</button>      
            </div>`;
            lista_comida.appendChild(newDiv);
        }
    })
    totalCarrito.innerText = precioTotal.toLocaleString();
    cantidad.innerText = cuenta;
}

function cambiaCantidad(key, cantidad){
    if(cantidad == 0){
        delete lista_comidas[key];
    } else{
        lista_comidas[key].cantidad = cantidad;
        lista_comidas[key].precio = cantidad * productos[key].precio;
    }
    recargaElemento();
}


