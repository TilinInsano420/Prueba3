import { registrarp, Recargador, actualizaru, eliminar } from "./promesas.js";
// esto hace que todo cargue una vez que haya cargado toda la pagina
window.addEventListener("load",()=>{
    cargar();
    document.getElementById("claro").addEventListener("click",claro) 
    document.getElementById("Tamano").addEventListener("click",tamanio)
    document.getElementById("enviar").addEventListener("click",validacion)
    document.getElementById("Actualizar").addEventListener("click", actualizardats)
    document.getElementById("volver").addEventListener("click", volver)
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

// esta funcion hace que rote entre 3 diferentes tamaños
function tamanio() {
    //toma el elemento por id y hace una rotacion con los if viendo de que si es uno lo reemplaza por otro y asi
    let cuerpo = document.getElementById("body")
        if (cuerpo.classList.contains("Normal")) {
            cuerpo.classList.replace("Normal", "tam1")
        } else if (cuerpo.classList.contains("tam1")) {
            cuerpo.classList.replace("tam1", "tam2")
        } else if (cuerpo.classList.contains("tam2")) {
            cuerpo.classList.replace("tam2", "tam3")
        } else if (cuerpo.classList.contains("tam3")) {
            cuerpo.classList.replace("tam3", "Normal")
        }
    }


//Esta funcion es para registrar los datos que escribe el usuario a la base de datos
const registrar = () => {
    // Recupera elementos
    let eNombre = document.getElementById("Nombre");
    let eApellido = document.getElementById("Apellido");
    let eNombreUsuario = document.getElementById("Nombreus");
    let eTelefono = document.getElementById("Telefono");
    let eCorreo = document.getElementById("Correo");
    let eTema = document.getElementById("Tema");
    let eMensaje = document.getElementById("men");
    let eGenero = document.querySelector('input[name="genero"]:checked')

    // Recupera valores de elementos
    let vNombre = eNombre.value;
    let vApellido = eApellido.value;
    let vNombreUsuario = eNombreUsuario.value;
    let vTelefono = eTelefono.value;
    let vCorreo = eCorreo.value;
    let vTema = eTema.value;
    let vMensaje = eMensaje.value;
    let vGenero = eGenero.value;


    // Este crea un objeto con los datos recuperados
    let objeto = {nombre:vNombre,apellido:vApellido,nombreUsuario:vNombreUsuario,telefono:vTelefono,correo:vCorreo,
        genero:vGenero,tema:vTema,mensaje:vMensaje
    };

    // Envia la variable objeto a la funcion de registrarp de promesas lo cual esto lleva finalmente a la base de datos
    registrarp(objeto)
        .then(() => {
            alert("Se registró exitosamente");
            cargar()
        })
        //este es en caso de que ocurra un error lo cual a traves de los logs mostrara el mensaje de error
        .catch((error) => {
            console.log(error);
        });
};


//la funcion validacion para ver si todos requisitos necesarios para enviarlo estan correcto
function validacion() { 
    
    // Para obtener los valores de los campos por id
    let nombre = document.getElementById("Nombre").value;
    let apellido = document.getElementById("Apellido").value;
    let telefono = document.getElementById("Telefono").value;
    let nombreUsuario = document.getElementById("Nombreus").value;
    let genero = document.querySelector('input[name="genero"]:checked');
    let correo = document.getElementById("Correo").value;
    let mensaje = document.getElementById("men").value;

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
    // en caso de que este correcto, no se mostrara el texto(eso va para el resto tambien)
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
    // si el"errorFlag" es falsa, ejecuta la funcion de registrar lo cual esto mandaria los datos hacia la bdd.
    if (!errorFlag) {
        registrar();
    }
}
// Función para cargar los datos a la tabla
const cargar = ()=>{
    //llama a la funcion recargador para recuperar los datos y mostrarlos en la tabla
    Recargador().then((usuarios)=>{
        //cargar todo en la tabla creada dentro del html
        let estructura = ""
        //esto se carga a la tabla del html y se pueda vizualisar los datos
        usuarios.forEach((p) => {
            estructura += "<tr>"
            estructura += "<td>"+p.nombre+"</td>"
            estructura += "<td>"+p.apellido+"</td>"
            estructura += "<td>"+p.telefono+"</td>"
            estructura += "<td>"+p.nombreUsuario+"</td>"
            estructura += "<td>"+p.genero+"</td>"
            estructura += "<td>"+p.correo+"</td>"
            estructura += "<td>"+p.tema+"</td>"
            estructura += "<td>"+p.mensaje+"</td>"
            estructura += "<td><button id='act"+p.id+"'>Actualizar</button></td>"
            estructura += "<td><button id='bor"+p.id+"'>Eliminar</button></td>"
            estructura += "</tr>";
        });
        document.getElementById("tabla").innerHTML = estructura;

        //este  a traves de presionar el boton actualizar encuentra a traves de la id, los datos necesarios para mostrarlos
        //en el formulario (los que aparecen en estructura)
        usuarios.forEach((p) => {
            // consigue los elementos para que estos se puedan mostrar respectivamente con la presionada del boton correcto
            document.getElementById("act"+p.id).addEventListener("click", () => {
                document.getElementById("Nombre").value = p.nombre;
                document.getElementById("Apellido").value = p.apellido;
                document.getElementById("Telefono").value = p.telefono;
                document.getElementById("Nombreus").value = p.nombreUsuario;
                
                //llama al por id al boton de actualizar y le agrega un atributo con la id para llamarla mas tarde 
                document.getElementById("Actualizar").setAttribute("data-id",p.id);


                //este hace que el genero se marque al presionar el boton actualizar
                document.querySelector('input[name="genero"][value="' + p.genero + '"]').checked = true;

                document.getElementById("Correo").value = p.correo;
                document.getElementById("Tema").value = p.tema;
                document.getElementById("men").value = p.mensaje;
                

                //estos son para que no este el boton enviar y se registre 2 veces cuando deberia solo actualizar
                document.getElementById("enviar").style.display = "none";
                document.getElementById("Actualizar").style.display = "inline";
                document.getElementById("volver").style.display = "inline";
            });
            // este es para poder borrar a traves del boton eliminar y pregunta si se va a borrar el mensaje
            document.getElementById("bor" + p.id).addEventListener("click", () => {
                if (confirm("Desea eliminar el mensaje de: \n" + p.nombre + " " + p.apellido)) {
                    eliminar(p.id).then(() => {
                        alert("Mensaje eliminado");
                        cargar();
                    }).catch((e) => {
                        console.log(e);
                    });
                } else {}
            });
        });
    });
};

// este es para que se haga la actualizacion en la bd
const actualizardats = () => {
    // Para obtener los valores de los campos por id 
    let bnombre = document.getElementById("Nombre");
    let bapellido = document.getElementById("Apellido");
    let btelefono = document.getElementById("Telefono");
    let bnombreUsuario = document.getElementById("Nombreus");
    let bgenero = document.querySelector('input[name="genero"]:checked');
    let bcorreo = document.getElementById("Correo");
    let btema = document.getElementById("Tema");
    let bmensaje = document.getElementById("men");

    // Recupera valores de elementos
    let vnombre = bnombre.value;
    let vapellido = bapellido.value;
    let vtelefono = btelefono.value;
    let vnombreUsuario = bnombreUsuario.value;
    let vgenero = bgenero.value;
    let vcorreo = bcorreo.value;
    let vtema = btema.value;
    let vmensaje = bmensaje.value;
    
    //todos los datos se guardan en un solo objeto
    let obj = {nombre: vnombre,apellido: vapellido,telefono: vtelefono,nombreUsuario: vnombreUsuario,genero: vgenero,
        correo: vcorreo,tema: vtema,mensaje: vmensaje}

    // se guarda el id del boton actualizar para poder tener su id y asi actualizar de manera correcta
    //pd: tuve que agregar un atributo al actualizar porque me mostraba el codigo del documento en ves de mostrar
    //actualizar pero funciona!!
    let id = document.getElementById("Actualizar").getAttribute("data-id");
    console.log("please:",id) // me falto eliminar, pero esto es para comprobar de que el id esta en el boton para hacer la actualizacion
    
    
    //se llama la funcion actualizaru de promesas para que lo mande a la bd y una vez que lo hace deja de mostrar el boton act y volver
    actualizaru(obj,id).then(() => {
        alert("Se actualizó correctamente");
        document.getElementById("enviar").style.display = "inline";
        document.getElementById("Actualizar").style.display = "none";
        document.getElementById("volver").style.display = "none";
        cargar();
    }).catch((error) => {
        console.log(error);
    });
};

// esta funcion limpia todo despues de presionarlo a traves de un reset(que hace que todos los campos se reseteen)
function volver() {
    document.querySelector("form").reset();
    document.getElementById("enviar").style.display = "inline";
    document.getElementById("Actualizar").style.display = "none";
    document.getElementById("volver").style.display = "none";}