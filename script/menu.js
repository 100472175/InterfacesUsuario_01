let abrirCompra = document.querySelector(".bolsa");
let cerrarCompra = document.querySelector(".finalizaCompra");
let lista = document.querySelector(".lista_comida_disp");
let lista_comida = document.querySelector(".lista_comida_selec");
let body = document.querySelector("body");
let totalCarrito = document.querySelector(".total");
let cantidad = document.querySelector(".cantidad");
let contenedor = document.querySelector(".contenedor");
let eleme = document.querySelector(".carrito");
let contador = document.querySelector(".contador_t");
let cambiar_pedido = document.querySelector(".cambiar_pedido");
let paso1 = document.querySelector(".uno");
let paso2 = document.querySelector(".dos");
let paso3 = document.querySelector(".tres");
let pagar = document.querySelector(".pagar");
let comp = document.querySelector(".compr");
let reserva = document.querySelector(".reserva");
let cargando = document.querySelector(".cargando");
let precio_total = document.querySelector(".precio_total");
let logo = document.querySelector(".logo");
let cafe = document.querySelector(".cafe");
let bebidas_dulces = document.querySelector(".bebidas_dulces");
let delicateen = document.querySelector(".delicatessen");
let tartas = document.querySelector(".tartas");
let reposteria = document.querySelector(".reposteria");
let precio_compra = 0;
let pos = 0;


// Abrir y cerrar el carrito
abrirCompra.addEventListener('click', () => {
    body.classList.add('active');
})
cerrarCompra.addEventListener('click', () => {
    body.classList.remove('active');
})

// Volver al landing
logo.addEventListener('click', () => {
    window.location.href = 'landing.html';
})

// Cargar el carrito
window.addEventListener('load', () => {
    contenedor.style.display = 'block';
    eleme.style.display = 'block';
    contador.style.display = 'none';
    comp.style.display = 'none';
    paso1.style.background = 'black';
    pos = 0;
    initApp(0);
    cafe.style.background = 'black';
    cafe.style.color = 'white';
})

// Cambiar de categoria a cafe
cafe.addEventListener('click', () => {
    initApp(0);
    cafe.style.background = 'black';
    cafe.style.color = 'white';
    bebidas_dulces.style.background = 'white';
    bebidas_dulces.style.color = 'black';
    delicateen.style.background = 'white';
    delicateen.style.color = 'black';
    tartas.style.background = 'white';
    tartas.style.color = 'black';
    reposteria.style.background = 'white';
    reposteria.style.color = 'black';
})

// Cambiar de categoria a bebidas dulces
bebidas_dulces.addEventListener('click', () => {
    initApp(6);
    bebidas_dulces.style.background = 'black';
    bebidas_dulces.style.color = 'white';
    cafe.style.background = 'white';
    cafe.style.color = 'black';
    delicateen.style.background = 'white';
    delicateen.style.color = 'black';
    tartas.style.background = 'white';
    tartas.style.color = 'black';
    reposteria.style.background = 'white';
    reposteria.style.color = 'black';
})

// Cambiar el menu a delicatessen
delicateen.addEventListener('click', () => {
    initApp(12);
    delicateen.style.background = 'black';
    delicateen.style.color = 'white';
    bebidas_dulces.style.background = 'white';
    bebidas_dulces.style.color = 'black';
    tartas.style.background = 'white';
    tartas.style.color = 'black';
    reposteria.style.background = 'white';
    reposteria.style.color = 'black';
    cafe.style.background = 'white';
    cafe.style.color = 'black';
})

// Cambiar el menu a tartas
tartas.addEventListener('click', () => {
    initApp(18);
    tartas.style.background = 'black';
    tartas.style.color = 'white';
    bebidas_dulces.style.background = 'white';
    bebidas_dulces.style.color = 'black';
    delicateen.style.background = 'white';
    delicateen.style.color = 'black';
    reposteria.style.background = 'white';
    reposteria.style.color = 'black';
    cafe.style.background = 'white';
    cafe.style.color = 'black';
})

// Cambiar el menu a reposteria
reposteria.addEventListener('click', () => {
    initApp(24);
    reposteria.style.background = 'black';
    reposteria.style.color = 'white';
    bebidas_dulces.style.background = 'white';
    bebidas_dulces.style.color = 'black';
    delicateen.style.background = 'white';
    delicateen.style.color = 'black';
    tartas.style.background = 'white';
    tartas.style.color = 'black';

    cafe.style.background = 'white';
    cafe.style.color = 'black';
})

// Intentar cambiar de paso, al pulsar el boton de otro paso
paso1.addEventListener('click', () => {
    if (pos === 1) {
        contenedor.style.display = 'block';
        eleme.style.display = 'block';
        contador.style.display = 'none';
        comp.style.display = 'none';
        paso1.style.background = 'black';
        paso2.style.background = '#4d5a72';
        pos = 0;
    } else if (pos === 2) {
        alert("No puedes ir para atras tu pedido esta en camino")
    }
})

// Intentar cambiar de paso, al pulsar el boton de otro paso, succesfull
cambiar_pedido.addEventListener('click', () => {
    if (pos === 1) {
        contenedor.style.display = 'block';
        eleme.style.display = 'block';
        contador.style.display = 'none';
        comp.style.display = 'none';
        paso1.style.background = 'black';
        paso2.style.background = '#4d5a72';
        pos = 0;
    }
})

// Intentar cambiar de paso, al pulsar el boton de otro paso
paso2.addEventListener('click', () => {
    if (pos === 0) {
        if (precio_compra !== 0) {
            contenedor.style.display = 'none';
            eleme.style.display = 'none';
            contador.style.display = 'none';
            comp.style.display = 'block';
            paso2.style.background = 'black';
            pos = 1;
            mostrarElemento();
        } else {
            alert("No has selecionado ningún elemento")
        }
    } else if (pos === 2) {
        alert("No puedes ir para atras tu pedido esta en camino")
    }
})

// Intentar cambiar de paso, al pulsar el boton de otro paso, unsuccesfull porque no hay elemtnos para comprar
totalCarrito.addEventListener('click', () => {
    if (pos === 0) {
        if (precio_compra !== 0) {
            contenedor.style.display = 'none';
            eleme.style.display = 'none';
            contador.style.display = 'none';
            comp.style.display = 'block';
            paso2.style.background = 'black';
            pos = 1;
            mostrarElemento();
        } else {
            alert("No has selecionado ningún elemento")
        }
    }
})

// Intentar cambiar de paso para mostrar el contador, como se se hubiera enviado
paso3.addEventListener('click', () => {

    if (pos === 1) {
        contenedor.style.display = 'none';
        eleme.style.display = 'none';
        comp.style.display = 'none';
        contador.style.display = 'block';
        paso3.style.background = 'black';
        pos = 2;
        let timerInterval = setInterval(startTimer, 1000);
        store_pedido(lista_comidas, precio_compra);
    } else if (pos === 0) {
        alert("Solo se puede acceder despues de pagar ")
    }
})
// Cambio  de paso para mostrar el contador, como se se hubiera enviado
pagar.addEventListener('click', () => {
    if (pos === 1) {
        contenedor.style.display = 'none';
        eleme.style.display = 'none';
        comp.style.display = 'none';
        contador.style.display = 'block';
        paso3.style.background = 'black';
        pos = 2;
        store_pedido(lista_comidas, precio_compra);
        let timerInterval = setInterval(startTimer, 1000);
    }
})

// Lista de los productos disponibles
let cosas = [
    {
        id: 1,
        nombre: 'Cafe con leche',
        imagen: 'menu/cafe1.jpg',
        precio: 2.00
    },
    {
        id: 2,
        nombre: 'Latte machiato',
        imagen: 'menu/cafe2.jpg',
        precio: 2.00
    },
    {
        id: 3,
        nombre: 'Capuchino',
        imagen: 'menu/cafe3.jpg',
        precio: 2.30
    },
    {
        id: 4,
        nombre: 'Cafe con hielo',
        imagen: 'menu/cafe4.jpg',
        precio: 1.80
    },
    {
        id: 5,
        nombre: 'Cafe solo',
        imagen: 'menu/cafe5.jpg',
        precio: 1.80
    },
    {
        id: 6,
        nombre: 'Chocolate',
        imagen: 'menu/cafe6.jpg',
        precio: 2.3
    },
    {
        id: 7,
        nombre: 'Batido de chocolate negro',
        imagen: 'bebida1.jpg',
        precio: 4.50
    },
    {
        id: 8,
        nombre: 'Batido de chocolate',
        imagen: 'bebida2.jpg',
        precio: 4.50
    },
    {
        id: 9,
        nombre: 'Batido de strachatela',
        imagen: 'bebida3.jpg',
        precio: 4.50
    },
    {
        id: 10,
        nombre: 'Batido de vainilla',
        imagen: 'bebida4.jpg',
        precio: 4.50
    },
    {
        id: 11,
        nombre: 'Batido de strachatela',
        imagen: 'bebida5.jpg',
        precio: 4.5
    },
    {
        id: 12,
        nombre: 'Batido de nubes',
        imagen: 'bebida6.jpg',
        precio: 3
    },
    {
        id: 13,
        nombre: 'Macarons de chocolate',
        imagen: 'delicatessen1.jpg',
        precio: 2.5
    },
    {
        id: 14,
        nombre: 'Mini delicias',
        imagen: 'delicatessen2.jpg',
        precio: 3.5
    },
    {
        id: 15,
        nombre: 'Bonbones',
        imagen: 'delicatessen3.jpg',
        precio: 1.5
    },
    {
        id: 16,
        nombre: 'Macarons de oreo',
        imagen: 'delicatessen4.jpg',
        precio: 2.5
    },
    {
        id: 17,
        nombre: 'Mini tartitas',
        imagen: 'delicatessen5.jpg',
        precio: 4.5
    },
    {
        id: 18,
        nombre: 'Macarons de fresa',
        imagen: 'delicatessen6.jpg',
        precio: 2.5
    },
    {
        id: 19,
        nombre: 'Tarta mixta',
        imagen: 'tartas1.jpg',
        precio: 10
    },
    {
        id: 20,
        nombre: 'Tarta de nata',
        imagen: 'tartas2.jpg',
        precio: 10
    },
    {
        id: 21,
        nombre: 'Tarta de fresa',
        imagen: 'tartas3.jpg',
        precio: 10
    },
    {
        id: 22,
        nombre: 'Tarta de oreo',
        imagen: 'tartas4.jpg',
        precio: 10
    },
    {
        id: 23,
        nombre: 'Tarta de vainilla',
        imagen: 'tartas5.jpg',
        precio: 10
    },
    {
        id: 24,
        nombre: 'Tarta de chocolate',
        imagen: 'tartas6.jpg',
        precio: 10
    },
    {
        id: 25,
        nombre: 'Donas glaseados',
        imagen: 'Reposteria1.jpg',
        precio: 3.5
    },
    {
        id: 26,
        nombre: 'Tortitas especiales',
        imagen: 'Reposteria2.jpg',
        precio: 4.5
    },
    {
        id: 27,
        nombre: 'Tortitas con fresas',
        imagen: 'Reposteria3.jpg',
        precio: 4.5
    },
    {
        id: 28,
        nombre: 'Gofres',
        imagen: 'Reposteria4.jpg',
        precio: 4.5
    },
    {
        id: 29,
        nombre: 'Totitas con chocolate',
        imagen: 'Reposteria5.jpg',
        precio: 4.5
    },
    {
        id: 30,
        nombre: 'Crepes',
        imagen: 'Reposteria6.jpg',
        precio: 4.5
    },
];

// lista auxiliar para guardar los elementos que se han añadido al carrito
let lista_comidas = [];

// Inicio de la aplicación, que se ejecuta nada más cargar la página.
function initApp(st_elem) {
    while (lista.hasChildNodes()) {
        lista.removeChild(lista.firstChild);
    }
    let prods = Array.from(cosas).slice(st_elem, (st_elem + 6))
    prods.forEach((value, key) => {
        //
        let newDiv = document.createElement('div');
        newDiv.classList.add('elemento');
        newDiv.innerHTML = `
            <img src="./images/${value.imagen}" alt="imagen_del_producto">
            <div class="titulo">${value.nombre}</div>
            <div class="precio">${value.precio.toLocaleString()} €</div>
            <button onclick="aniadirAlCarrito(${value.id - 1})"> Añadir </button>`;
        lista.appendChild(newDiv);
    })
}

// Función para añadir un elemento al carrito
function aniadirAlCarrito(key) {

    if (lista_comidas[key] == null) {
        lista_comidas[key] = JSON.parse(JSON.stringify(cosas[key]));
        lista_comidas[key].cantidad = 1;
    } else {
        lista_comidas[key].cantidad = lista_comidas[key].cantidad + 1;
        lista_comidas[key].precio = lista_comidas[key].cantidad * cosas[key].precio;

    }
    recargaElemento();
}

// Función para recargar el carrito
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
            <div>${value.nombre}</div>
            <div>${cosas[key].precio} €</div>
            <div>${value.precio.toLocaleString()} €</div>
            <div>
                <button class="contador" onclick="cambiaCantidad(${key}, ${value.cantidad - 1})"> — </button>
                <div class="contador">${value.cantidad}</div>
                <button class="contador" onclick="cambiaCantidad(${key}, ${value.cantidad + 1})"> + </button>      
            </div>`;
            lista_comida.appendChild(newDiv);
        }
    })
    totalCarrito.innerText = "Total → ".concat(precioTotal.toLocaleString()).concat(' €');
    precio_compra = precioTotal;
    cantidad.innerText = cuenta;
}

// Función para mostrar los elementos del carrito en el "paso 2"
function mostrarElemento() {
    reserva.innerHTML = '';
    lista_comidas.forEach((value, key) => {
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="images/${value.imagen}" alt="imagen_del_producto3"></div>
            <div>${value.nombre}</div>
            <div>${cosas[key].precio} €</div>
            <div>${value.precio.toLocaleString()} €</div>
            <div class="contador">${value.cantidad} u</div>`;
            reserva.appendChild(newDiv);
        }
    })
    precio_total.innerText = "Total: ".concat(precio_compra.toLocaleString()).concat(' €');
}

// Cambiar la cantidad de un elemento del carrito
function cambiaCantidad(key, cantidad) {
    if (cantidad === 0) {
        delete lista_comidas[key];
    } else {
        lista_comidas[key].cantidad = cantidad;
        lista_comidas[key].precio = cantidad * cosas[key].precio;
    }
    recargaElemento();
}

// Datos para el contador de tiempo
let cantidad_minutos = 10;
let cantidad_segundos = cantidad_minutos * 60;
let timerElement = document.getElementById('timer');

// Función para comenzar el contador de tiempo
function startTimer() {
    cantidad_segundos--;
    let minutos = Math.floor(cantidad_segundos / 60);
    let segundos = cantidad_segundos % 60;

    if (cantidad_segundos < 0) {
        timerElement.textContent = '00:00';
        cargando.style.display = 'None';
        let newDiv = document.createElement('p');
        newDiv.innerHTML = ` Pedido entregado`;
        clearInterval(timerInterval);
        return;
    }
    if (minutos < 10) {
        minutos = '0' + minutos;
    }
    if (segundos < 10) {
        segundos = '0' + segundos;
    }

    timerElement.textContent = minutos + ':' + segundos;
}

function store_pedido(lista_comidas, precio_compra) {
    let pedido = {
        lista_comidas: lista_comidas,
        precio_compra: precio_compra
    }
    //Get the time
    let today = new Date();
    localStorage.setItem('pedido'+today, JSON.stringify(pedido));
}