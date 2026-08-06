// ================================
// Verificar información
// ================================

function verificar() {

    let nombre = document.getElementById("nombre").value;
    let cuenta = document.getElementById("cuenta").value;
    let escuela = document.getElementById("escuela").value;
    let correo = document.getElementById("correo").value;

    if(nombre=="" || cuenta=="" || escuela=="" || correo==""){

        alert("Primero complete todos los campos obligatorios.");

        return;

    }

    alert(
        "La información ha sido verificada correctamente.\n\nRevise nuevamente sus datos antes de enviar la solicitud."
    );

}



// ===================================
// Envío del formulario
// ===================================

document.getElementById("registroForm").addEventListener("submit",function(e){

    e.preventDefault();



    // Generar folio

    let folio = "RMA-" + Math.floor(Math.random()*90000+10000);



    // Obtener fecha y hora

    let fechaActual = new Date();

    let fechaRegistro = fechaActual.toLocaleDateString("es-MX");

    let horaRegistro = fechaActual.toLocaleTimeString("es-MX");



    // Guardar datos

    let datos = {

        nombre: document.getElementById("nombre").value,

        cuenta: document.getElementById("cuenta").value,

        escuela: document.getElementById("escuela").value,

        fechaNacimiento: document.getElementById("fecha").value,

        correo: document.getElementById("correo").value,

        promedio: document.getElementById("promedio").value,

        materia: document.getElementById("materia").value,

        semestre: document.getElementById("semestre").value,

        archivo:

        document.getElementById("archivo").files.length>0 ?

        document.getElementById("archivo").files[0].name :

        "No adjuntado",

        folio: folio,

        fechaRegistro: fechaRegistro,

        horaRegistro: horaRegistro

    };



    localStorage.setItem(

        "registroMentores",

        JSON.stringify(datos)

    );



    alert(

        "La solicitud fue enviada correctamente.\n\nSe generará el comprobante de registro."

    );



    window.location.href="comprobante.html";

});
