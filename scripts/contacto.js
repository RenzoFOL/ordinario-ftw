// Obtenemos el formulario y el mensaje de éxito del HTML
const form = document.getElementById("formContacto");
const mensajeExito = document.getElementById("mensajeExito");

// Escuchamos cuando se intenta enviar el formulario
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que se recargue la página

  // Obtenemos los valores que el usuario escribió en los campos
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  // Verificamos que todos los campos estén llenos
  if (nombre && correo && mensaje) {
    // Mostramos los datos en la consola
    console.log("Formulario enviado:");
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Mensaje:", mensaje);

    // Mostramos el mensaje de éxito en pantalla
    mensajeExito.style.display = "block";

    // Esperamos 4 segundos y luego limpiamos el formulario
    setTimeout(() => {
      form.reset(); // Limpia todos los campos
      mensajeExito.style.display = "none"; // Oculta el mensaje otra vez
    }, 4000);
  } else {
    // Si falta algún campo, se muestra una alerta
    alert("Completa todos los campos");
  }
});
