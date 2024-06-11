window.addEventListener("load",()=>{
    document.getElementById("claro").addEventListener("click",claro) 
    document.getElementById("Tamano").addEventListener("click",tamanio)
    document.getElementById("enviar").addEventListener("click",validacion)
});

// aplica el contraste claro a la pagina.
function claro() {
    //se toman las variables por su tagname
    let inputs = document.getElementsByTagName("input");
    let titulos = document.getElementsByTagName("h1");
    let etiquetas = document.getElementsByTagName("label");
    let cuerpo = document.getElementsByTagName("body");
    let men = document.getElementsByTagName("textarea");
    
    // estos son bucles que recorren todos los elementos en los arreglos de input,h1,label,body y textarea
    // y aplica la clase css "claro" en cada uno de ellos lo cual cambia el contraste de la pagina.
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

//la funcion validacion para ver si todos requisitos necesarios para enviarlo estan correcto
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

    // Valida si hay algo escrito en el campo nombre, de no ser asi aplica en el span un mensaje de error y lo pinta de color rojo
    if (nombre === "") {
        errornom.textContent = "Por favor introduzca su nombre";
        errornom.style.color = "red";
        errorFlag = true;
    } else {
        errornom.textContent = "";
    }

    // Valida si esta escrito algo en el campo de apellido, de no ser asi aplica en el span un mensaje de error y lo pinta de color rojo
    if (apellido === "") {
        errorapell.textContent = "Por favor introduzca su apellido";
        errorapell.style.color = "red";
        errorFlag = true;
    } else {
        errorapell.textContent = "";
    }
    // Validación del teléfono si tiene los 9 digitos o ninguno ya que es opcional, de no ser asi aplica en el span un mensaje de error y lo pinta de color rojo
    if (telefono.length !== 9 & telefono.length !== 0) {
        errortel.textContent = "El teléfono debe tener 9 dígitos";
        errortel.style.color = "red";
        errorFlag = true;
    } else {
        errortel.textContent = "";
    }
    // valida si el nombre de usuario esta escrito, de no ser asi aplica en el span un mensaje de error y lo pinta de color rojo
    if (nombreUsuario === "") {
        errorus.textContent = "Por favor introduzca un nombre de usuario";
        errorus.style.color = "red";
        errorFlag = true;
    } else {
        errorus.textContent = "";
    }
    // verifica si esta seleccionada una de las opciones de genero, de no ser asi aplica en el span un mensaje de error y lo pinta de color rojo
    if (!genero) {
        errorgen.textContent = "Por favor seleccione su género";
        errorgen.style.color = "red";
        errorFlag = true;
    } else {
        errorgen.textContent = "";
    }
    // verifica si se puso algo en el correo electronico,  de no ser asi aplica en el span un mensaje de error y lo pinta de color rojo
    if (correo === "") {
        errorcor.textContent = "Por favor introduzca su correo electrónico";
        errorcor.style.color = "red";
        errorFlag = true;
    } else {
        errorcor.textContent = "";
    }
    // verifica si hay algo escrito en el campo de mensaje, como es la primordial razon de mi formulario obivamente si no hay nada escrito
    //va a mostrar un mensaje que indique que escriba algo
    if (mensaje === "") {
        errormen.textContent = "Por favor introduzca su mensaje";
        errormen.style.color = "red";
        errorFlag = true;
    } else {
        errormen.textContent = "";
    }
    // si el"errorFlag" es falsa, entonces se muestra una alerta con el mensaje "validacion correcta" que significa que funciono.
    if (!errorFlag) {
        alert("validacion correcta");
    }
}
