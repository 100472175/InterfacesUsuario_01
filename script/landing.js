let nav = document.querySelector(".nav_menu");
let abrir = document.querySelector(".abrir");
let cerrar = document.querySelector(".cerrar");
let registrarse = document.querySelector(".registrarse");
let cancel = document.querySelector(".cancel");
registrarse.addEventListener('click', () => {
    setCookie();

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

function setCookie() {
    localStorage.tiempo1 = new Date().getTime();
    if (typeof (Storage) !== "undefined") {
        let dni = document.getElementById("dni").value;
        let dni_check = comp_dni(dni);

        localStorage.tiempo2 = new Date().getTime();
        let name = document.getElementById("name").value;
        let name_check = comp_nombre_ape(name);

        let surname = document.getElementById("surname").value;
        let surname_check = comp_nombre_ape(surname);

        let tlf = document.getElementById("tlf").value;
        let telf_check = comp_tlf(tlf);

        let mail = document.getElementById("mail").value;
        let mail_check = comp_correo(mail);

        if ((dni_check && name_check && surname_check && telf_check && mail_check) === false) {
            var guardado = localStorage.getItem('dni'+dni);
            console.log(JSON.parse(guardado));
            let datos = {dni: dni, name: name, surname: surname, tlf: tlf, mail: mail};
            localStorage.setItem('dni'+dni, JSON.stringify(datos));
        } else {
            alert("No se puede crear la cuenta");
        }
    } else {
        alert("No se puede crear la cuenta");
    }
}


function createAccount() {
    // Ger the information from the precious form from inputs:
    setCookie(dni_);
    alert("Cuenta Creada");
}

function comp_dni(dni_) {
    let pattern = /^[0-9]{8}[A-Z]$/;
    if (false === pattern.test(dni_)) {
        alert("DNI no valido");
        return true;
    }
    return false;
}

function comp_tlf(tlf) {
    let pattern = /^[0-9]{9}$/;
    if (false === pattern.test(tlf)) {
        alert("Telefono no valido");
        return true;
    }
    return false;
}

function comp_correo(correo) {
    let pattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    if (false === pattern.test(correo)) {
        alert("Correo no valido");
        return true;
    }
    return false;
}

function comp_nombre_ape(nom) {
    let pattern = /^[a-zA-Zá-ú]+$/;
    if (false === pattern.test(nom)) {
        alert("Nombre o Apellido no valido");
        return true;
    }
    return false;
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
    this.prevArrow = document.createElement('button_mov');
    this.nextArrow = document.createElement('button_mov');
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
        perPage:{
            0: 1,
            600: 2,
            966: 1
        }
    });
    instance.addArrows();
}