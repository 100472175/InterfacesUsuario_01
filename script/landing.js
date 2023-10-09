function getCookie(dni) {
    let name = "dni=" + dni;
    let identificador = "dni=";
    let clave = dni;
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(identificador.length, c.length);
        }
    }
    return "";
}

function setCookie(dni,exdays) {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let tlf = document.getElementById("tlf").value;
    let mail = document.getElementById("mail").value;

    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = "dni=" + dni + "; name=" + name + "; surname=" + surname + "; tfl=" + tlf + "; mail=" + mail + "; path=/";
}


function createAccount() {
    // Ger the information from the precious form from inputs:
    let dni_ = document.getElementById("dni").value;

    // Check if the cookie exists:
    if (getCookie(dni_) !== "") {
        alert("Ya existe una cuenta con este DNI");
        console.log("Ya existe una cuenta con este DNI")
    }
    else {
        // Create a cookie with the information:
        setCookie(dni_, 30);
        console.log("Cuenta Creada");
    }

}