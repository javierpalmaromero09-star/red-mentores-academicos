document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("registroForm");

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        // Obtener datos del formulario
        const nombre = document.getElementById("nombre").value.trim();
        const cuenta = document.getElementById("cuenta").value.trim();
        const escuela = document.getElementById("escuela").value;
        const fecha = document.getElementById("fecha").value;
        const correo = document.getElementById("correo").value.trim();
        const promedio = document.getElementById("promedio").value;
        const materia = document.getElementById("materia").value;
        const semestre = document.getElementById("semestre").value;
        const archivo = document.getElementById("archivo").files[0];

        // Verificar que todos los campos estén completos
        if (
            nombre === "" ||
            cuenta === "" ||
            escuela === "" ||
            fecha === "" ||
            correo === "" ||
            promedio === "" ||
            materia === "" ||
            semestre === "" ||
            !archivo
        ) {

            alert("Debe completar todos los campos y adjuntar la documentación en PDF.");

            return;
        }

        // Verificar que el archivo sea PDF
        if (archivo.type !== "application/pdf") {

            alert("La documentación debe adjuntarse en formato PDF.");

            return;
        }

        // Generar folio 26B-XXX
        const folio = "26B-" + Math.floor(Math.random() * 900 + 100);

        // Crear objeto con la información
        const datos = {

            folio: folio,
            nombre: nombre,
            cuenta: cuenta,
            escuela: escuela,
            fecha: fecha,
            correo: correo,
            promedio: promedio,
            materia: materia,
            semestre: semestre

        };

        // Guardar información en el navegador
        localStorage.setItem(
            "registroMentores",
            JSON.stringify(datos)
        );

        // Ir al comprobante
        window.location.href = "comprobante.html";

    });

});
