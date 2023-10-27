let nav = document.querySelector(".nav_menu");
let abrir = document.querySelector(".abrir");
let cerrar = document.querySelector(".cerrar");
let registrarse = document.querySelector(".registrarse");
let cancel = document.querySelector(".cancel");
registrarse.addEventListener('click', () => {
    createAccount();

})
cancel.addEventListener('click', () => {
    window.location.href='landing.html';

})
window.addEventListener('load', () => {
    cerrar.style.display = 'none';
    abrir.style.display = 'block';
    nav.style.display = 'none';
    reveal();
})

abrir.addEventListener('click', () => {
    cerrar.style.display = 'block';
    abrir.style.display = 'none';
    nav.style.display = 'block';

})
cerrar.addEventListener('click', () => {
    cerrar.style.display = 'none';
    abrir.style.display = 'block';
    nav.style.display = 'none';
})


function getCookie(dni) {
    let name = "dni=" + dni;
    let identificador = "dni=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(identificador.length, c.length);
        }
    }
    return "";
}

function setCookie(dni, exdays) {
    let name = document.getElementById("name").value;
    comp_nombre_ape(name);
    let surname = document.getElementById("surname").value;
    comp_nombre_ape(surname);
    let tlf = document.getElementById("tlf").value;
    comp_tlf(tlf);
    let mail = document.getElementById("mail").value;
    comp_correo(mail);

    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    document.cookie = "dni=" + dni + "; name=" + name + "; surname=" + surname + "; tfl=" + tlf + "; mail=" + mail + "; path=/";
}


function createAccount() {
    // Ger the information from the precious form from inputs:
    let dni_ = document.getElementById("dni").value;
    comp_dni(dni_);


    // Check if the cookie exists:
    if (getCookie(dni_) !== "") {
        alert("Ya existe una cuenta con este DNI");

    } else {
        // Create a cookie with the information:
        setCookie(dni_, 30);
        alert("Cuenta Creada");
    }

}

function comp_dni(dni_) {
    let pattern = /^[0-9]{8}[A-Z]$/;
    if (false === pattern.test(dni_)) {
        alert("DNI no valido")
    }

}

function comp_tlf(tlf) {
    let pattern = /^[0-9]{9}$/;
    if (false === pattern.test(tlf)) {
        alert("Telefono no valido");
    }
}

function comp_correo(correo) {
    let pattern = /^[a-z0-9]+@[a-z]+\.[a-z]{3}$/;
    if (false === pattern.test(correo)) {
        alert("Correo no valido")
    }
}

function comp_nombre_ape(nom) {
    let pattern = /^[A-Z,a-z]$/;
    if (false === pattern.test(nom)) {
        alert("Nombre u Apellido no valido")
    }
}


/* Funciones para la galería de fotos */
var slideIndex = 1;
setInterval(function () {
    document.getElementById("radio" + slideIndex).checked = true;
    slideIndex++;
    if (slideIndex > 4) {
        slideIndex = 1;
    }
}, 5000);



function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);



const siemas = document.querySelectorAll('.siema');

Siema.prototype.addArrows = function () {
    // make buttons & append them inside Siema's container
    this.prevArrow = document.createElement('button');
    this.nextArrow = document.createElement('button');
    this.prevArrow.textContent = '<';
    this.nextArrow.textContent = '>';
    this.selector.appendChild(this.prevArrow)
    this.selector.appendChild(this.nextArrow)

    // event handlers on buttons
    this.prevArrow.addEventListener('click', () => this.prev());
    this.nextArrow.addEventListener('click', () => this.next());

    // automatic movement

}

for (const siema of siemas) {
    const instance = new Siema({
        selector: siema,
        loop: true,
        duration: 400,
    });
    instance.addArrows();
}