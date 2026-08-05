let datos = {
nombre: document.getElementById("nombre").value,
escuela: document.getElementById("escuela").value,
cuenta: document.getElementById("cuenta").value,
correo: document.getElementById("correo").value,
folio: "RMA-" + Math.floor(Math.random()*90000+10000)
};

document.getElementById("registroForm").addEventListener("submit", function(e){

    e.preventDefault();


    let datos = {

        nombre: document.getElementById("nombre").value,
        cuenta: document.getElementById("cuenta").value,
        escuela: document.getElementById("escuela").value,
        fecha: document.getElementById("fecha").value,
        correo: document.getElementById("correo").value,
        promedio: document.getElementById("promedio").value,
        materia: document.getElementById("materia").value,
        semestre: document.getElementById("semestre").value,

        folio: "RMA-" + Math.floor(Math.random()*90000+10000)

    };


    localStorage.setItem(
        "registroMentores",
        JSON.stringify(datos)
    );


    window.location.href="comprobante.html";


});
