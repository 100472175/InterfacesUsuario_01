let abrirCompra = document.querySelector(".bolsa");
let cerrarCompra = document.querySelector(".finalizaCompra");
let lista = document.querySelector(".lista");
let lista_comida = document.querySelector(".lista_comida");
let body = document.querySelector("body");
let totalCarrito = document.querySelector(".total");
let cantidad = document.querySelector(".cantidad");

let contenedor = document.querySelector(".contenedor");
let eleme = document.querySelector(".elemeto_carrito");
let contador = document.querySelector(".contador_t");
let paso1 = document.querySelector(".cambiar_pedido");
let paso2 = document.querySelector(".dos");
let paso3 = document.querySelector(".pagar");
let comp = document.querySelector(".compr");
let reserva = document.querySelector(".reserva");
let cargando = document.querySelector(".cargando");
let precio_total = document.querySelector(".precio_total");
let precioTotal = 0;

abrirCompra.addEventListener('click', () => {
    body.classList.add('active');
})
cerrarCompra.addEventListener('click', () => {
    body.classList.remove('active');
})

let cosas = [
    {
        id: 1,
        nombre: 'Cafe con leche',
        imagen: '/menu/cafe1.jpg',
        precio: 5.5
    },
    {
        id: 2,
        nombre: 'Latte machiato',
        imagen: '/menu/cafe2.jpg',
        precio: 50
    },
    {
        id: 3,
        nombre: 'Capuchino',
        imagen: '/menu/cafe3.jpg',
        precio: 40
    },
    {
        id: 4,
        nombre: 'Cafe con hielo',
        imagen: '/menu/cafe4.jpg',
        precio: 50
    },
    {
        id: 5,
        nombre: 'Cafe solo',
        imagen: '/menu/cafe5.jpg',
        precio: 50
    },
    {
        id: 6,
        nombre: 'Chocolate',
        imagen: '/menu/cafe6.jpg',
        precio: 40
    },
    {
        id: 7,
        nombre: 'A',
        imagen: 'bebida1.jpg',
        precio: 12
    },
    {
        id: 8,
        nombre: 'Batido de chocolate',
        imagen: 'bebida2.jpg',
        precio: 50
    },
    {
        id: 9,
        nombre: 'Batido de strachatela',
        imagen: 'bebida3.jpg',
        precio: 40
    },
    {
        id: 10,
        nombre: 'Batido de strachatela',
        imagen: 'bebida4.jpg',
        precio: 50
    },
    {
        id: 11,
        nombre: 'Surtido de macarrons',
        imagen: 'bebida5.jpg',
        precio: 50
    },
    {
        id: 12,
        nombre: 'Tarta sorpresa',
        imagen: 'bebida6.jpg',
        precio: 40
    },
    {
        id: 13,
        nombre: 'Macarons',
        imagen: 'delicatessen1.jpg',
        precio: 12
    },
    {
        id: 14,
        nombre: 'Croissants',
        imagen: 'delicatessen2.jpg',
        precio: 50
    },
    {
        id: 15,
        nombre: 'Profiteroles',
        imagen: 'delicatessen3.jpg',
        precio: 40
    },
    {
        id: 16,
        nombre: 'Eclairs',
        imagen: 'delicatessen4.jpg',
        precio: 50
    },
    {
        id: 17,
        nombre: 'Surtido de macarrons',
        imagen: 'delicatessen5.jpg',
        precio: 50
    },
    {
        id: 18,
        nombre: 'Tarta sorpresa',
        imagen: 'delicatessen6.jpg',
        precio: 40
    },
    {
        id: 19,
        nombre: 'Macarons',
        imagen: 'tartas1.jpg',
        precio: 12
    },
    {
        id: 20,
        nombre: 'Croissants',
        imagen: 'tartas2.jpg',
        precio: 50
    },
    {
        id: 21,
        nombre: 'Profiteroles',
        imagen: 'tartas3.jpg',
        precio: 40
    },
    {
        id: 22,
        nombre: 'Eclairs',
        imagen: 'tartas4.jpg',
        precio: 50
    },
    {
        id: 23,
        nombre: 'Surtido de macarrons',
        imagen: 'tartas5.jpg',
        precio: 50
    },
    {
        id: 24,
        nombre: 'Tarta sorpresa',
        imagen: 'tartas6.jpg',
        precio: 40
    },
    {
        id: 25,
        nombre: 'Macarons',
        imagen: 'Reposteria1.jpg',
        precio: 12
    },
    {
        id: 26,
        nombre: 'Croissants',
        imagen: 'Reposteria2.jpg',
        precio: 50
    },
    {
        id: 27,
        nombre: 'Profiteroles',
        imagen: 'Reposteria3.jpg',
        precio: 40
    },
    {
        id: 28,
        nombre: 'Eclairs',
        imagen: 'Reposteria4.jpg',
        precio: 50
    },
    {
        id: 29,
        nombre: 'Surtido de macarrons',
        imagen: 'Reposteria5.jpg',
        precio: 50
    },
    {
        id: 30,
        nombre: 'Tarta sorpresa',
        imagen: 'Reposteria6.jpg',
        precio: 40
    },
];


let lista_comidas = [];

function initApp(st_elem) {
    while (lista.hasChildNodes()) {
        lista.removeChild(lista.firstChild);
    }
    let prods = Array.from(cosas).slice(st_elem, (st_elem+6))
    prods.forEach((value, key) => {
        //
        let newDiv = document.createElement('div');
        newDiv.classList.add('elemento');
        newDiv.innerHTML = `
            <img src="images/${value.imagen}/" alt="imagen_del_producto">
            <div class="titulo">${value.nombre}</div>
            <div class="precio">${value.precio.toLocaleString()}</div> <!--Mirar que hace el toLocaleString() */-->
            <button onclick="aniadirAlCarrito(${value.id-1})"> Añadir </button>`;
        lista.appendChild(newDiv);
    })
}

function aniadirAlCarrito(key) {
  if (lista_comidas[key] == null) {
      lista_comidas[key] = JSON.parse(JSON.stringify(cosas[key]));
      lista_comidas[key].cantidad = 1;
  }
  else{
      lista_comidas[key].cantidad = lista_comidas[key].cantidad + 1;

  }
  recargaElemento()
}

function recargaElemento() {
    lista_comida.innerHTML = '';
    let cuenta = 0;

    lista_comidas.forEach((value, key) => {
        precioTotal = precioTotal + value.precio;
        cuenta = cuenta + value.cantidad;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <!--<div><img src="images/menu/${value.imagen}/" alt="imagen_del_producto"></div> -->
            <div>${value.nombre}</div>
            <div>${value.precio.toLocaleString()}</div>
            <div>
                <button class="contador" onclick="cambiaCantidad(${key}, ${value.cantidad - 1})"> — </button>
                <div class="contador">${value.cantidad}</div>
                <button class="contador" onclick="cambiaCantidad(${key}, ${value.cantidad + 1})"> + </button>      
            </div>`;
            lista_comida.appendChild(newDiv);
        }
    })
    totalCarrito.innerText = "Total → ".concat(precioTotal.toLocaleString());
    cantidad.innerText = cuenta;
}

function mostrarElemento() {
    reserva.innerHTML = '';
    let cuenta = 0;
    let precioTotal = 0;
    lista_comidas.forEach((value, key) => {
        precioTotal = precioTotal + value.precio;
        cuenta = cuenta + value.cantidad;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML= `
            <div><img src="images/${value.imagen}/" alt="imagen_del_producto3"></div>
            <div>${value.nombre}</div>
            <div>${value.precio.toLocaleString()}</div>
            <div class="contador">${value.cantidad}</div>`;
            reserva.appendChild(newDiv);
        }
    })
    precio_total.innerText = "Total: ".concat(precioTotal.toLocaleString());

}

function cambiaCantidad(key, cantidad) {
    if (cantidad == 0) {
        delete lista_comidas[key];
    } else {
        lista_comidas[key].cantidad = cantidad;
        lista_comidas[key].precio = cantidad * cosas[key].precio;
    }
    recargaElemento();
}

paso1.addEventListener('click', () => {
    contenedor.style.display = 'block';
    eleme.style.display = 'block';
    contador.style.display = 'none';
    comp.style.display = 'none';
})

totalCarrito.addEventListener('click', () => {
    contenedor.style.display = 'none';
    eleme.style.display = 'none';
    contador.style.display = 'none';
    comp.style.display = 'block';
    mostrarElemento();
})

paso3.addEventListener('click', () => {
    contenedor.style.display = 'none';
    eleme.style.display = 'none';
    comp.style.display = 'none';
    contador.style.display = 'block';
    let timerInterval = setInterval(startTimer, 1000);
})

window.addEventListener('load', () => {
    contenedor.style.display = 'block';
    eleme.style.display = 'block';
    contador.style.display = 'none';
    comp.style.display = 'none';
    initApp(0)

})


let timeLimitInMinutes = 10;
let timeLimitInSeconds = timeLimitInMinutes * 60;
let timerElement = document.getElementById('timer');

function startTimer() {
    timeLimitInSeconds--;
    let minutes = Math.floor(timeLimitInSeconds / 60);
    let seconds = timeLimitInSeconds % 60;

    if (timeLimitInSeconds < 0) {
        timerElement.textContent = '00:00';
        cargando.style.display = 'None';
        let newDiv = document.createElement('p');
        newDiv.innerHTML= ` Pedido entregado`;


        clearInterval(timerInterval);
        return;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    timerElement.textContent = minutes + ':' + seconds;
}

