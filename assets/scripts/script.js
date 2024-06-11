window.addEventListener("load",()=>{
    document.getElementById("claro").addEventListener("click",claro) 
    document.getElementById("Tamano").addEventListener("click",tamanio)
    document.getElementById("enviar").addEventListener("click",validacion)
});


function claro() {
    let inputs = document.getElementsByTagName("input");
    let titulos = document.getElementsByTagName("h1");
    let etiquetas = document.getElementsByTagName("label");
    let cuerpo = document.getElementsByTagName("body");
    let men = document.getElementsByTagName("textarea");
    

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.toggle("claro");
    }
    for (let i = 0; i < titulos.length; i++) {
        titulos[i].classList.toggle("claro");
    }
    for (let i = 0; i < etiquetas.length; i++) {
        etiquetas[i].classList.toggle("claro");
    }
    for (let i = 0; i < cuerpo.length; i++) {
        cuerpo[i].classList.toggle("claro");
    }
    for (let i = 0; i < men.length; i++) {
        men[i].classList.toggle("claro");
    }
}

function tamanio() {}


function validacion() { 
    
    // Para obtener los valores de los campos por id
    let nombre = document.getElementById("Nombre").value;
    let apellido = document.getElementById("Apellido").value;
    let telefono = document.getElementById("Telefono").value;
    let nombreUsuario = document.getElementById("Nombreus").value;
    let genero = document.querySelector('input[name="genero"]:checked');
    let correo = document.getElementById("Correo").value;
    let mensaje = document.getElementsByName("message")[0].value;

    // Para obtener los elementos de error
    let errornom = document.getElementById("errornom");
    let errorapell = document.getElementById("errorapell");
    let errortel = document.getElementById("errortel");
    let errorus = document.getElementById("errorus");
    let errorgen = document.getElementById("errorgen");
    let errormen = document.getElementById("errormen");

    // Esto comprueba si hay errores
    let errorFlag = false;

    // Validación del nombre
    if (nombre === "") {
        errornom.textContent = "Por favor introduzca su nombre";
        errornom.style.color = "red";
        errorFlag = true;
    } else {
        errornom.textContent = "";
    }

    // Validación del apellido
    if (apellido === "") {
        errorapell.textContent = "Por favor introduzca su apellido";
        errorapell.style.color = "red";
        errorFlag = true;
    } else {
        errorapell.textContent = "";
    }

    // Validación del teléfono
    if (telefono.length !== 9 || telefono.length !== 0) {
        errortel.textContent = "El teléfono debe tener 9 dígitos";
        errortel.style.color = "red";
        errorFlag = true;
    } else {
        errortel.textContent = "";
    }

    if (nombreUsuario === "") {
        errorus.textContent = "Por favor introduzca un nombre de usuario";
        errorus.style.color = "red";
        errorFlag = true;
    } else {
        errorus.textContent = "";
    }

    if (!genero) {
        errorgen.textContent = "Por favor seleccione su género";
        errorgen.style.color = "red";
        errorFlag = true;
    } else {
        errorgen.textContent = "";
    }

    if (correo === "") {
        errorcor.textContent = "Por favor introduzca su correo electrónico";
        errorcor.style.color = "red";
        errorFlag = true;
    } else {
        errorcor.textContent = "";
    }

    if (mensaje === "") {
        errormen.textContent = "Por favor introduzca su mensaje";
        errormen.style.color = "red";
        errorFlag = true;
    } else {
        errormen.textContent = "";
    }

    if (!errorFlag) {
        alert("validacion correcta");
    }
}
