document.addEventListener("DOMContentLoaded", () => {
    // Definiciones de IDs para mayor claridad
    const SERVICE_ID = "service_l9eq1nk";
    const TEMPLATE_ID = "template_0aa016d";

    const form = document.getElementById("form-contacto");
    const respuesta = document.getElementById("form-respuesta");

    if (form && respuesta) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            // 1. Deshabilita el botón y muestra "Enviando..."
            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            respuesta.textContent = ''; // Limpiar mensajes anteriores

            // 2. Crear objeto de parámetros
            const param = {
                nombre: form.nombre.value.trim(),
                email: form.email.value.trim(),
                telefono: form.telefono.value.trim(),
                mensaje: form.mensaje.value.trim(),
            };
            
            // 3. Envío con emailjs.send()
            emailjs.send(SERVICE_ID, TEMPLATE_ID, param)
                .then(() => {
                    respuesta.textContent = "¡Gracias! He recibido tu consulta y te responderé pronto.";
                    respuesta.style.color = "green"; // Éxito en verde
                    form.reset();
                    console.log("Mensaje enviado con éxito.");
                })
                .catch((error) => {
                    respuesta.textContent = "Hubo un error al enviar el formulario. Inténtalo de nuevo.";
                    respuesta.style.color = "red"; // Error en rojo
                    console.error("EmailJS error:", error);
                })
                .finally(() => {
                    // 4. Habilitar el botón de nuevo
                    submitButton.disabled = false;
                    submitButton.textContent = 'Enviar';
                });
        });
    }
});